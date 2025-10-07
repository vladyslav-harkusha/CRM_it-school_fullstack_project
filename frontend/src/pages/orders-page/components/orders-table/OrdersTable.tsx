import cn from "classnames";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

type Props = {
    orders: IOrder[];
    isFetching: boolean;
};

export const OrdersTable = ({ orders, isFetching }: Props) => {
    const [openOrderId, setOpenOrderId] = useState<string | null>(null);
    const [, setSearchParams] = useSearchParams();
    const [sortField, setSortField] = useState<keyof IOrder | `-${keyof IOrder}`>("-created_at");

    const toggleOrderId = (id: string) =>
        !isFetching && setOpenOrderId(openOrderId === id ? null : id);

    const toggleSortBy = (sortBy: keyof IOrder) => {
        const value: keyof IOrder | `-${keyof IOrder}` =
            sortBy === sortField ? `-${sortBy}` : sortBy;

        setSortField(value);
        setSearchParams((prev) => {
            prev.set("order", value);
            return prev;
        });
    };

    return (
        <div
            className={cn(
                "w-full overflow-y-auto border-2 border-[var(--c-orange)]",
                isFetching && "opacity-50",
            )}
        >
            <table className="w-full bg-[var(--c-orange)] ">
                <thead>
                    <tr>
                        {tableColumns.map((column) => (
                            <th
                                onClick={() => {
                                    toggleSortBy(column);
                                }}
                                key={column}
                                className={cn(
                                    sortField.includes(column)
                                        ? "bg-[var(--c-header-links)]"
                                        : "bg-[var(--c-table-head)]",
                                    "rounded-t-2xl  px-2 py-1 text-[var(--c-orange)] cursor-pointer",
                                    "hover:bg-[var(--c-header-links)] duration-300",
                                )}
                            >
                                {column}
                                {sortField === column && " ▲"}
                                {sortField === `-${column}` && " ▼"}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <OrderItem
                            key={order._id}
                            order={order}
                            tableColumns={tableColumns}
                            openOrderId={openOrderId}
                            toggleOrderId={toggleOrderId}
                            rowIndex={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
