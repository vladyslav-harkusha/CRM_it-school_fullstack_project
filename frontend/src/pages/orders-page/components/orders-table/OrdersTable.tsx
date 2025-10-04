import { useState } from "react";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

type Props = {
    orders: IOrder[];
};

export const OrdersTable = ({ orders }: Props) => {
    const [openOrderId, setOpenOrderId] = useState<string | null>(null);

    const toggleOrderId = (id: string) => {
        setOpenOrderId(openOrderId === id ? null : id);
    };

    return (
        <div className="w-full overflow-y-auto border-2 border-[var(--c-orange)]">
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
                <tbody className="[&>tr.data-row:nth-child(odd)]:bg-[var(--c-table-row1)] [&>tr.data-row:nth-child(even)]:bg-[var(--c-table-row2)]">
                    {orders.map((order) => (
                        <OrderItem
                            key={order._id}
                            order={order}
                            tableColumns={tableColumns}
                            openOrderId={openOrderId}
                            toggleOrderId={toggleOrderId}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
