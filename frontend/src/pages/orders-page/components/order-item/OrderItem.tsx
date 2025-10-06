import cn from "classnames";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItemDetails } from "../order-item-details/OrderItemDetails.tsx";

type Props = {
    tableColumns: (keyof IOrder)[];
    order: IOrder;
    openOrderId: string | null;
    toggleOrderId: (id: string) => void;
    rowIndex: number;
};

export const OrderItem = ({ tableColumns, order, openOrderId, toggleOrderId, rowIndex }: Props) => {
    const isEven = rowIndex % 2 === 0;

    return (
        <>
            <tr
                onClick={() => toggleOrderId(order._id)}
                className={cn(
                    "cursor-pointer duration-300",
                    openOrderId !== order._id && "hover:bg-[var(--c-orange)]",
                    isEven ? "bg-[var(--c-table-row1)]" : "bg-[var(--c-table-row2)]",
                )}
            >
                {tableColumns.map((column) => (
                    <td className="max-w-[220px] truncate pl-[10px]" key={column}>
                        {column === "_id"
                            ? parseInt(String(order[column]).slice(-3), 16)
                            : String(order[column]) || "null"}
                    </td>
                ))}
            </tr>
            {openOrderId === order._id && (
                <OrderItemDetails
                    order={order}
                    tableColumnsCount={tableColumns.length}
                    isEven={isEven}
                />
            )}
        </>
    );
};
