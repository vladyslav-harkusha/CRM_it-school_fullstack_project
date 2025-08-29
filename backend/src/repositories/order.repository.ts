import { FilterQuery } from "mongoose";

import { QuerySearchEnum } from "../../../shared/enums/query-search.enum";
import { IOrder } from "../../../shared/interfaces/order.interface";
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
}

export const orderRepository = new OrderRepository();
