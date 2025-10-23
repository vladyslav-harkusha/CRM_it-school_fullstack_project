import { createBrowserRouter, Navigate } from "react-router-dom";

import { ErrorBoundary } from "../components/error-boundary/ErrorBoundary.tsx";
import { MainLayout } from "../layouts/MainLayout.tsx";
import { AboutPage } from "../pages/about-page/AboutPage.tsx";
import { AdminPanelPage } from "../pages/admin-panel-page/AdminPanelPage.tsx";
import { LoginPage } from "../pages/login-page/LoginPage.tsx";
import { LogoutPage } from "../pages/logout-page/LogoutPage.tsx";
import { NotFoundPage } from "../pages/not-found-page/NotFoundPage.tsx";
import { OrdersPage } from "../pages/orders-page/OrdersPage.tsx";
import { PrivateRoute } from "./PrivateRoute.tsx";
import { PublicRoute } from "./PublicRoute.tsx";
import { ROUTES } from "./routes.ts";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.LOGIN} /> },
            { path: ROUTES.ABOUT, element: <AboutPage /> },
            {
                element: <PublicRoute />,
                children: [{ path: ROUTES.LOGIN, element: <LoginPage /> }],
            },
            {
                element: <PrivateRoute />,
                children: [
                    { path: ROUTES.LOGOUT, element: <LogoutPage /> },
                    { path: ROUTES.ORDERS, element: <OrdersPage /> },
                    { path: ROUTES.ADMIN_PANEL, element: <AdminPanelPage /> },
                ],
            },

            { path: "*", element: <NotFoundPage /> },
        ],
        errorElement: <ErrorBoundary />,
    },
]);
