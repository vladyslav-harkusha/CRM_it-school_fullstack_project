import { createContext } from "react";

import { IUser, IUserSignInDTO } from "../../../../shared/interfaces/user.interface.ts";

interface AuthContextType {
    user: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
    login: (userData: IUserSignInDTO) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
