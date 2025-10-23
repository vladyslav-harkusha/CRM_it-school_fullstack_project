import { createBrowserRouter, Navigate } from "react-router-dom";

import { ErrorBoundary } from "../components/error-boundary/ErrorBoundary.tsx";
import { MainLayout } from "../layouts/MainLayout.tsx";
import { AboutPage } from "../pages/about-page/AboutPage.tsx";
import { AdminPanelPage } from "../pages/admin-panel-page/AdminPanelPage.tsx";
import { LoginPage } from "../pages/login-page/LoginPage.tsx";
import { LogoutPage } from "../pages/logout-page/LogoutPage.tsx";
import { NotFoundPage } from "../pages/not-found-page/NotFoundPage.tsx";
import { OrdersPage } from "../pages/orders-page/OrdersPage.tsx";
import { ROUTES } from "./routes.ts";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.LOGIN} /> },
            { path: ROUTES.LOGIN, element: <LoginPage /> },
            { path: ROUTES.LOGOUT, element: <LogoutPage /> },
            { path: ROUTES.ABOUT, element: <AboutPage /> },
            { path: ROUTES.ORDERS, element: <OrdersPage /> },
            { path: ROUTES.ADMIN_PANEL, element: <AdminPanelPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
        errorElement: <ErrorBoundary />,
    },
]);
