import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth.tsx";
import { ROUTES } from "../../router/routes.ts";
import { LoginForm } from "./login-form/LoginForm.tsx";

export const LoginPage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    if (isAuth) navigate(ROUTES.ORDERS);

    return (
        <div className="flex flex-col items-center justify-center h-[93vh]">
            <LoginForm />
        </div>
    );
};
