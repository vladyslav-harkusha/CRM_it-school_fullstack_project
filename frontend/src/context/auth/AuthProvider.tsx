import { useQueryClient } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";

import { IUser, IUserSignInDTO } from "../../../../shared/interfaces/user.interface.ts";
import { authService } from "../../services/auth-service.ts";
import { AuthContext } from "./AuthContext.tsx";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const queryClient = useQueryClient();
    const isAuth = !!user;

    const login = async (userData: IUserSignInDTO) => {
        const loggedUser = await authService.login(userData);
        setUser(loggedUser);
    };

    const logout = async () => {
        try {
            await authService.logout();
        } finally {
            setUser(null);
            queryClient.clear();
        }
    };

    const refreshUser = async () => {
        try {
            const me = await authService.me();
            setUser(me);
        } catch {
            setUser(null);
        }
    };

    useEffect(() => {
        if (authService.getAccessToken()) {
            refreshUser();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuth, login, logout, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
};
