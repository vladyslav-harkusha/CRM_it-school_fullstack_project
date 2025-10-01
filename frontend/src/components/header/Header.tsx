import { AccountInfo } from "../account-info/AccountInfo.tsx";
import { NavMenu } from "../nav-menu/NavMenu.tsx";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher.tsx";
import { MainLogo } from "../UI/main-logo/MainLogo.tsx";

export const Header = () => {
    const isAuth = true;

    return (
        <header
            className="
                h-[7vh] px-10 flex items-center justify-between gap-5
                bg-[var(--c-orange)] border-2 border-[var(--c-table-head)]
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
