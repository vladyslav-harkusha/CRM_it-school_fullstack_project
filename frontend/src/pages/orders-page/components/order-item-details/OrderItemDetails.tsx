import cn from "classnames";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";

type Props = {
    order: IOrder;
    tableColumnsCount: number;
    isEven: boolean;
}

export const OrderItemDetails = ({ order, tableColumnsCount, isEven }: Props) => {
    return (
        <tr
            className={cn(
                "h-20",
                isEven ? "bg-[var(--c-table-row1)]" : "bg-[var(--c-table-row2)]",
            )}
        >
            <td colSpan={tableColumnsCount}>
                <p>{order.utm || "null"}</p>
                <p>{order.msg || "null"}</p>
            </td>
        </tr>
    );
};
