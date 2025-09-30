import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout.tsx";
import { AboutPage } from "../pages/about-page/AboutPage.tsx";
import { AdminPanelPage } from "../pages/admin-panel-page/AdminPanelPage.tsx";
import { LoginPage } from "../pages/login-page/LoginPage.tsx";
import { OrdersPage } from "../pages/orders-page/OrdersPage.tsx";
import { ROUTES } from "./routes.ts";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.ORDERS} /> },
            { path: ROUTES.LOGIN, element: <LoginPage /> },
            { path: ROUTES.ABOUT, element: <AboutPage /> },
            { path: ROUTES.ORDERS, element: <OrdersPage /> },
            { path: ROUTES.ADMIN_PANEL, element: <AdminPanelPage /> },
            { path: ROUTES.NOT_FOUND, element: <AdminPanelPage /> },
        ],
    },
]);
