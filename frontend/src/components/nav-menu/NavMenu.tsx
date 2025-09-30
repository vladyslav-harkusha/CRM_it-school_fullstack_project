import { NavLink } from "react-router-dom";

import { ROUTES } from "../../router/routes.ts";

const navLinks = {
    public: [
        { name: "About", endpoint: ROUTES.ABOUT },
        { name: "Login", endpoint: ROUTES.LOGIN },
    ],
    private: [
        { name: "About", endpoint: ROUTES.ABOUT },
        { name: "Orders", endpoint: ROUTES.ORDERS },
        { name: "Admin panel", endpoint: ROUTES.ADMIN_PANEL },
        { name: "Logout", endpoint: ROUTES.LOGIN },
    ],
} as const;

export const NavMenu = () => {
    const isAuth = true;

    const links = isAuth ? navLinks.private : navLinks.public;
    const linkStyles = ({ isActive }: { isActive: boolean }) =>
        "py-1 px-2 rounded-2xl border-x-3 hover:border-gray-500 duration-300 " +
        (isActive ? "border-gray-700 text-gray-700 hover:border-gray-700" : "border-transparent");

    return (
        <nav>
            <ul className="flex gap-6 font-bold text-gray-500 uppercase border-transparent">
                {links.map((link) => (
                    <li key={link.name}>
                        <NavLink className={linkStyles} to={link.endpoint}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
