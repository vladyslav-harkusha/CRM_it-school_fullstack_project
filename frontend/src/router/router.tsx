import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout.tsx";
import { AdminPanelPage } from "../pages/admin-panel-page/AdminPanelPage.tsx";
import { LoginPage } from "../pages/login-page/LoginPage.tsx";
import { OrdersPage } from "../pages/orders-page/OrdersPage.tsx";
import { EndpointsEnum } from "./endpoints.enum.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={EndpointsEnum.ORDERS} /> },
            { path: EndpointsEnum.LOGIN, element: <LoginPage /> },
            { path: EndpointsEnum.ORDERS, element: <OrdersPage /> },
            { path: EndpointsEnum.ADMIN_PANEL, element: <AdminPanelPage /> },
            { path: EndpointsEnum.NOT_FOUND, element: <AdminPanelPage /> },
        ],
    },
]);
