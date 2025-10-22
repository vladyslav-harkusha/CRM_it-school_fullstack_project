import { IPaginatedResponse } from "../../../shared/interfaces/paginated-response.interface.ts";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface.ts";
import { IUser } from "../../../shared/interfaces/user.interface.ts";
import { URLS } from "../constants/urls.ts";
import { apiService } from "./api-service.ts";

export const usersService = {
    async getAll(
        queryParams?: IQueryParams,
        signal?: AbortSignal,
    ): Promise<IPaginatedResponse<IUser>> {
        const { data } = await apiService.get<IPaginatedResponse<IUser>>(URLS.users, {
            params: queryParams,
            signal,
        });

        return data;
    },
};
