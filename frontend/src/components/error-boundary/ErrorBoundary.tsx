import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-5xl font-bold text-[var(--c-orange)] mb-4">
                    {error.status} {error.statusText}
                </h1>
                <p className="text-lg text-[var(--c-text)]">
                    {error.data || "Something went wrong..."}
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold text-[var(--c-orange)] mb-2">
                Web application error
            </h1>
            <p className="text-[var(--c-text)]">{(error as Error)?.message || "Unknown error"}</p>
        </div>
    );
};
