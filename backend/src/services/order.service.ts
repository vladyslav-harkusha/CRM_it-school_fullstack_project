import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { IOrder, IOrderUpdateDTO } from "../../../shared/interfaces/order.interface";
import { IPaginatedResponse } from "../../../shared/interfaces/paginated-response.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { ApiError } from "../errors/api.error";
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

    public async updateById(orderId: string, updateData: IOrderUpdateDTO): Promise<IOrder> {
        const order = await orderRepository.getById(orderId);

        if (!order) {
            throw new ApiError("Order not found", StatusCodesEnum.NOT_FOUND);
        }

        return await orderRepository.updateById(orderId, updateData);
    }
}

export const orderService = new OrderService();
