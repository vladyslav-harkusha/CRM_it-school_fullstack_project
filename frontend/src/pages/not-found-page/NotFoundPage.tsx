import { useLocation } from "react-router-dom";

export const NotFoundPage = () => {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold text-[var(--c-orange)] mb-4">404 Page Not Found</h1>
            <p className="text-lg text-[var(--c-text)]">Error: No route matches URL "{pathname}"</p>
        </div>
    );
};
