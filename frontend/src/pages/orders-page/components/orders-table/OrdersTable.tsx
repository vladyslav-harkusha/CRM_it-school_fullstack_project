import cn from "classnames";
import { useState } from "react";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

type Props = {
    orders: IOrder[];
    isFetching: boolean;
};

export const OrdersTable = ({ orders, isFetching }: Props) => {
    const [openOrderId, setOpenOrderId] = useState<string | null>(null);

    const toggleOrderId = (id: string) =>
        !isFetching && setOpenOrderId(openOrderId === id ? null : id);

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
                                key={column}
                                className="rounded-t-2xl bg-[var(--c-table-head)] px-2 py-1 text-[var(--c-orange)] cursor-pointer"
                            >
                                {column}
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
