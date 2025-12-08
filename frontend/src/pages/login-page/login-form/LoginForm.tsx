import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ButtonMain } from "../../../components/UI/button-main/ButtonMain.tsx";
import { InputMain } from "../../../components/UI/input-main/InputMain.tsx";
import { useAuth } from "../../../hooks/useAuth.tsx";
import { LoginSchema, LoginSchemaType } from "../../../validators/login.schema.ts";

export const LoginForm = () => {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginSchemaType) => {
        try {
            await login(data);
            // eslint-disable-next-line
        } catch (error: any) {
            if (error.status === 401) {
                setError("root", {
                    type: "server",
                    message: "Wrong email or password",
                });
            } else {
                setError("root", {
                    type: "server",
                    message: "Authorize failed",
                });
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-5 w-[400px] p-10 rounded-xl border-2 border-[var(--c-table-head)] bg-[var(--c-table-row2)]"
        >
            <InputMain
                type="email"
                label={"Email"}
                placeholder={"email"}
                error={errors.email?.message}
                {...register("email")}
            />
            <InputMain
                type="password"
                label={"Password"}
                placeholder={"password"}
                error={errors.password?.message}
                {...register("password")}
            />

            {errors.root?.message && (
                <p className="text-rose-500 font-medium">{errors.root.message}</p>
            )}

            <ButtonMain text={"Submit"} />
        </form>
    );
};
