import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

import { IUser } from "../../../../shared/interfaces/user.interface.ts";
import { authService } from "../../services/auth-service.ts";
import { AuthContext } from "./AuthContext.tsx";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClient();

    const { data: user, isLoading: isLoadingMe } = useQuery<IUser>({
        queryKey: ["auth", "me"],
        queryFn: authService.me,
        retry: false,
        enabled: Boolean(authService.getAccessToken()),
    });

    const isAuth = !!user;

    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess: (loggedUser) => {
            queryClient.setQueryData(["auth", "me"], loggedUser);
        },
    });

    const logoutMutation = useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["auth"] });
        },
    });

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuth,
                isLoadingMe,
                login: loginMutation.mutateAsync,
                logout: logoutMutation.mutateAsync,
                isPendingLogin: loginMutation.isPending,
                isPendingLogout: logoutMutation.isPending,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
