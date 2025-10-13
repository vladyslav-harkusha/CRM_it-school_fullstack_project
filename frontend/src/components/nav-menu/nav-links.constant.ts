import { ROUTES } from "../../router/routes.ts";

export const navLinks = {
    public: [
        { name: "About", endpoint: ROUTES.ABOUT },
        { name: "Login", endpoint: ROUTES.LOGIN },
    ],
    private: [
        { name: "About", endpoint: ROUTES.ABOUT },
        { name: "Orders", endpoint: ROUTES.ORDERS },
        { name: "Admin panel", endpoint: ROUTES.ADMIN_PANEL },
        { name: "Logout", endpoint: ROUTES.LOGOUT },
    ],
} as const;
