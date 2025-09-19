import { ITokenPair } from "../../../shared/interfaces/token.interface.ts";
import { IUser, IUserSignInDTO } from "../../../shared/interfaces/user.interface.ts";
import { TOKENS } from "../constants/tokens.ts";
import { URLS } from "../constants/urls.ts";
import { apiService } from "./api-service.ts";

export const authService = {
    async login(user: IUserSignInDTO): Promise<IUser> {
        const { data } = await apiService.post(URLS.auth.login, user);
        this.setTokens(data.tokens);

        return await this.me();
    },

    async me(): Promise<IUser> {
        const { data } = await apiService.get(URLS.auth.me);
        return data;
    },

    setTokens({ accessToken, refreshToken }: ITokenPair): void {
        localStorage.setItem(TOKENS.ACCESS, accessToken);
        localStorage.setItem(TOKENS.REFRESH, refreshToken);
    },

    getAccessToken(): string {
        return localStorage.getItem(TOKENS.ACCESS) || "";
    },

    getRefreshToken(): string {
        return localStorage.getItem(TOKENS.REFRESH) || "";
    },
};
