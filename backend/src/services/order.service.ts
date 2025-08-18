import { IOrder } from "../../../shared/interfaces/order.interface";
import { orderRepository } from "../repositories/order.repository";

class OrderService {
    public getAll(): Promise<IOrder[]> {
        return orderRepository.getAll();
    }
}

export const orderService = new OrderService();
