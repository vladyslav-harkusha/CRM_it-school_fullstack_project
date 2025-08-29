import { FilterQuery } from "mongoose";

import { IOrder } from "../../../shared/interfaces/order.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { Order } from "../models/order.model";

class OrderRepository {
    public getAll(query: IQueryParams): Promise<[IOrder[], number]> {
        const skip = query.pageSize * (query.page - 1);
        const filterObject: FilterQuery<IOrder> = {};

        if (query.search) {
            filterObject.$or = [
                { name: { $regex: query.search, $options: "i" } },
                { surname: { $regex: query.search, $options: "i" } },
                { email: { $regex: query.search, $options: "i" } },
                { phone: { $regex: query.search, $options: "i" } },
                { age: { $regex: query.search, $options: "i" } },
                { course: { $regex: query.search, $options: "i" } },
                { course_format: { $regex: query.search, $options: "i" } },
                { course_type: { $regex: query.search, $options: "i" } },
                { status: { $regex: query.search, $options: "i" } },
                { sum: { $regex: query.search, $options: "i" } },
                { already_paid: { $regex: query.search, $options: "i" } },
                { group: { $regex: query.search, $options: "i" } },
                { created_at: { $regex: query.search, $options: "i" } },
                { manager: { $regex: query.search, $options: "i" } },
            ];
        }

        return Promise.all([
            Order.find(filterObject).limit(query.pageSize).skip(skip).sort(query.order),
            Order.find(filterObject).countDocuments(),
        ]);
    }
}

export const orderRepository = new OrderRepository();
