import { Navigate, Outlet } from "react-router-dom";

import { Loader } from "../components/UI/loader/Loader.tsx";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "./routes";

export const PublicRoute = () => {
    const { isAuth, isLoadingMe } = useAuth();

    if (isLoadingMe) return <Loader margin_t={35} />;

    return isAuth ? <Navigate to={ROUTES.ORDERS} replace /> : <Outlet />;
};
