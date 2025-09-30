import { AccountInfo } from "../account-info/AccountInfo.tsx";
import { NavMenu } from "../nav-menu/NavMenu.tsx";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher.tsx";
import { MainLogo } from "../UI/main-logo/MainLogo.tsx";

export const Header = () => {
    const isAuth = true;

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
            {isAuth && <AccountInfo />}
        </header>
    );
};
