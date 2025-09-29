import { useQuery } from "@tanstack/react-query";

import { ApiError } from "../../../../services/api-service.ts";
import { ordersService } from "../../../../services/orders-service.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

export const OrdersTable = () => {
    const { data, error, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: ordersService.getAll,
    });

    if (isError && error instanceof ApiError) {
        return (
            <p style={{ color: "red" }}>
                {error.status}: {error.message}
            </p>
        );
    }

    const orders = data?.data;
    if (!orders || orders.length === 0) {
        return <p>No orders to show</p>;
    }

    return (
        <table className="border w-full">
            <thead>
                <tr>
                    {tableColumns.map((column) => (
                        <th
                            key={column}
                            className="border-2 border-amber-400 bg-gray-500 px-2 py-1 text-amber-400 cursor-pointer"
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <OrderItem key={order._id} order={order} tableColumns={tableColumns} />
                ))}
            </tbody>
        </table>
    );
};
