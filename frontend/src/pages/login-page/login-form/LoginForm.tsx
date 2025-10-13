import { useForm } from "react-hook-form";

import { IUserSignInDTO } from "../../../../../shared/interfaces/user.interface.ts";
import { ButtonMain } from "../../../components/UI/button-main/ButtonMain.tsx";
import { InputMain } from "../../../components/UI/input-main/InputMain.tsx";
import { useAuth } from "../../../hooks/useAuth.tsx";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm<IUserSignInDTO>();
    const { login } = useAuth();

    return (
        <form
            onSubmit={handleSubmit(login)}
            className="flex flex-col items-center gap-5 w-[400px] p-10 rounded-xl border-2 border-[var(--c-table-head)] bg-[var(--c-table-row2)]"
        >
            <InputMain type="email" label={"Email"} placeholder={"email"} {...register("email")} />
            <InputMain
                type="password"
                label={"Password"}
                placeholder={"password"}
                {...register("password")}
            />
            <ButtonMain text={"Submit"} />
        </form>
    );
};
