import { ITokenPair } from "../../../shared/interfaces/token.interface.ts";
import { IUser, IUserSignInDTO } from "../../../shared/interfaces/user.interface.ts";
import { urls } from "../constants/urls.ts";
import { ApiResponseType, apiService } from "./api-service.ts";

export const authService = {
    async login(user: IUserSignInDTO): Promise<IUser> {
        const { data } = await apiService.post(urls.auth.login, user);
        this.setTokens(data.tokens);
        const { data: me } = await this.me();

        return me;
    },

    setTokens({ accessToken, refreshToken }: ITokenPair): void {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    },

    me(): ApiResponseType<IUser> {
        return apiService.get(urls.auth.me);
    },
};
