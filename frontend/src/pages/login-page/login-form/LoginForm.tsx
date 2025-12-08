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
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(login)}
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
            <ButtonMain text={"Submit"} />
        </form>
    );
};
