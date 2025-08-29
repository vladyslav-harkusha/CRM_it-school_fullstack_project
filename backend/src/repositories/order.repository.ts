import { FilterQuery } from "mongoose";

import { QuerySearchEnum } from "../../../shared/enums/query-search.enum";
import { IOrder, IOrderUpdateDTO } from "../../../shared/interfaces/order.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { Order } from "../models/order.model";

class OrderRepository {
    public getAll(query: IQueryParams): Promise<[IOrder[], number]> {
        const skip = query.pageSize * (query.page - 1);

        const orConditions: FilterQuery<IOrder>[] = Object.values(QuerySearchEnum)
            .filter((field) => query[field])
            .map((field) => {
                if (field === "age") return { age: Number(query.age) };

                return { [field]: { $regex: query[field], $options: "i" } };
            });

        const filterObject = orConditions.length > 0 ? { $or: orConditions } : {};

        return Promise.all([
            Order.find(filterObject).limit(query.pageSize).skip(skip).sort(query.order),
            Order.find(filterObject).countDocuments(),
        ]);
    }

    public getById(orderId: string): Promise<IOrder> {
        return Order.findById(orderId);
    }

    public updateById(orderId: string, updateData: IOrderUpdateDTO): Promise<IOrder> {
        return Order.findByIdAndUpdate(orderId, updateData, { new: true });
    }
}

export const orderRepository = new OrderRepository();
