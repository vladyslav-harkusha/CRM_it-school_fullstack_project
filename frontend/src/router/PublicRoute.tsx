import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/UI/loader/Loader.tsx";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "./routes";

export const PublicRoute = () => {
    const { isAuth, isLoading } = useAuth();

    if (isLoading) return <Loader />;

    return isAuth ? <Navigate to={ROUTES.ORDERS} replace /> : <Outlet />;
};
