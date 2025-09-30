import { NavMenu } from "../nav-menu/NavMenu.tsx";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher.tsx";
import { MainLogo } from "../UI/main-logo/MainLogo.tsx";

export const Header = () => {
    return (
        <header
            className="
                h-16 px-10 flex items-center justify-between gap-5
                bg-amber-400 border-2 border-gray-600
                shadow-[inset_0px_0px_10px_rgba(0,0,0,0.7)]
            "
        >
            <MainLogo />
            <ThemeSwitcher />
            <NavMenu />
        </header>
    );
};
