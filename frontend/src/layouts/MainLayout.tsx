import { Outlet } from "react-router-dom";

import { Header } from "../components/header/Header.tsx";

export const MainLayout = () => {
    return (
        <>
            <Header />
            <h2>Main Layout</h2>
            <Outlet />
        </>
    );
};
