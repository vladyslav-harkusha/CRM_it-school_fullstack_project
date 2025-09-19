import { IOrder } from "../../../shared/interfaces/order.interface.ts";
import { IPaginatedResponse } from "../../../shared/interfaces/paginated-response.interface.ts";
import { URLS } from "../constants/urls";
import { apiService } from "./api-service";

export const ordersService = {
    async getAll(): Promise<IPaginatedResponse<IOrder>> {
        const { data } = await apiService.get<IPaginatedResponse<IOrder>>(URLS.orders);

        return data;
    },
};
