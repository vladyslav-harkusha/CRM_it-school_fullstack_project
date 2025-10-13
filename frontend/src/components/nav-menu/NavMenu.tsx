import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth.tsx";
import { navLinks } from "./nav-links.constant.ts";

export const NavMenu = () => {
    const { isAuth } = useAuth();

    const links = isAuth ? navLinks.private : navLinks.public;

    const linkStyles = ({ isActive }: { isActive: boolean }) =>
        "py-1 px-2 rounded-2xl border-x-3 hover:border-[var(--c-table-head)] duration-300 " +
        (isActive
            ? "border-[var(--c-header-links)] text-[var(--c-header-links)] hover:border-[var(--c-header-links)]"
            : "border-transparent");

    return (
        <nav>
            <ul className="flex gap-6 font-bold text-[var(--c-table-head)] uppercase">
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
