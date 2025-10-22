import { useNavigate } from "react-router-dom";

import { ButtonMain } from "../../components/UI/button-main/ButtonMain.tsx";
import { useAuth } from "../../hooks/useAuth.tsx";
import { ROUTES } from "../../router/routes.ts";

export const LogoutPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const onLogoutClick = async () => {
        try {
            await logout();
            navigate(ROUTES.LOGIN);
        } catch {
            throw new Error("Could not logout");
        }
    };

    return (
        <div>
            <h2>You can logout from app:</h2>
            <ButtonMain text={"Logout"} onClick={onLogoutClick} />
        </div>
    );
};
