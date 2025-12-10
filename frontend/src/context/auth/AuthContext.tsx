import { createContext } from "react";

import { IUser, IUserSignInDTO } from "../../../../shared/interfaces/user.interface.ts";

interface AuthContextType {
    user: IUser | undefined;
    isAuth: boolean;
    isLoadingMe: boolean;
    login: (data: IUserSignInDTO) => Promise<IUser>;
    logout: () => Promise<void>;
    isPendingLogin: boolean;
    isPendingLogout: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
