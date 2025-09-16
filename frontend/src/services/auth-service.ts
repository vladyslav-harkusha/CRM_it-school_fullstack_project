import { ITokenPair } from "../../../shared/interfaces/token.interface.ts";
import { IUser, IUserSignInDTO } from "../../../shared/interfaces/user.interface.ts";
import { tokens } from "../constants/tokens.ts";
import { urls } from "../constants/urls.ts";
import { ApiResponseType, apiService } from "./api-service.ts";

export const authService = {
    async login(user: IUserSignInDTO): Promise<IUser> {
        const { data } = await apiService.post(urls.auth.login, user);
        this.setTokens(data.tokens);
        const { data: me } = await this.me();

        return me;
    },

    me(): ApiResponseType<IUser> {
        return apiService.get(urls.auth.me);
    },

    setTokens({ accessToken, refreshToken }: ITokenPair): void {
        localStorage.setItem(tokens.access, accessToken);
        localStorage.setItem(tokens.refresh, refreshToken);
    },

    getAccessToken(): string {
        return localStorage.getItem(tokens.access) || "";
    },

    getRefreshToken(): string {
        return localStorage.getItem(tokens.refresh) || "";
    },
};
