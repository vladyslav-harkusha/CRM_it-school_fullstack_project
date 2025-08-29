import { IOrder } from "../../../shared/interfaces/order.interface";
import { IPaginatedResponse } from "../../../shared/interfaces/paginated-response.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { orderRepository } from "../repositories/order.repository";

class OrderService {
    public async getAll(query: IQueryParams): Promise<IPaginatedResponse<IOrder>> {
        const [data, totalItems] = await orderRepository.getAll(query);

        const totalPages = Math.ceil(totalItems / query.pageSize);

        return {
            totalItems,
            totalPages,
            prevPage: !!(query.page - 1),
            nextPage: query.page < totalPages,
            data,
        };
    }
}

export const orderService = new OrderService();
