import { useNavigate } from "react-router-dom";

import { ButtonMain } from "../../components/UI/button-main/ButtonMain.tsx";
import { useAuth } from "../../hooks/useAuth.tsx";
import { ROUTES } from "../../router/routes.ts";

export const LogoutPage = () => {
    const { logout, user, isPendingLogout } = useAuth();
    const navigate = useNavigate();

    const onLogoutClick = async () => {
        try {
            await logout();
        } finally {
            navigate(ROUTES.LOGIN);
        }
    };

    return (
        <div className="h-[93vh] flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl font-bold text-[var(--c-table-head)]">
                {user?.name} {user?.surname}
            </h2>
            <p className="font-bold">you can click to logout from app:</p>
            <ButtonMain
                text={isPendingLogout ? "Loading..." : "Logout"}
                onClick={onLogoutClick}
                isPending={isPendingLogout}
                disabled={isPendingLogout}
            />
        </div>
    );
};
