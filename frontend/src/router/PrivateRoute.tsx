import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/UI/loader/Loader.tsx";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "./routes";

export const PrivateRoute = () => {
    const { isAuth, isLoading } = useAuth();

    if (isLoading) return <Loader margin_t={35} />;

    return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
