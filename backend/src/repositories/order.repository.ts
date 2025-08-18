import { IOrder } from "../../../shared/interfaces/order.interface";
import { Order } from "../models/order.model";

class OrderRepository {
    public getAll(): Promise<IOrder[]> {
        return Order.find().sort({ createdAt: -1 });
    }
}

export const orderRepository = new OrderRepository();
