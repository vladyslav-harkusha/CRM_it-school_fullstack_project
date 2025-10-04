import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";

type Props = {
    tableColumns: (keyof IOrder)[];
    order: IOrder;
    openOrderId: string | null;
    toggleOrderId: (id: string) => void;
};

export const OrderItem = ({ tableColumns, order, openOrderId, toggleOrderId }: Props) => {
    return (
        <>
            <tr
                onClick={() => toggleOrderId(order._id)}
                className="odd:bg-[var(--c-table-row1)] even:bg-[var(--c-table-row2)] hover:bg-[var(--c-orange)] duration-300 cursor-pointer"
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
                <div className="w-full h-20 bg-rose-500">
                    <p>{order.utm || "null"}</p>
                    <p>{order.msg || "null"}</p>
                </div>
            )}
        </>
    );
};
