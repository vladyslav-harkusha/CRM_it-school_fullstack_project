import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";

type Props = {
    tableColumns: (keyof IOrder)[];
    order: IOrder;
};

export const OrderItem = ({ tableColumns, order }: Props) => {
    return (
        <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-amber-400 duration-300 cursor-pointer">
            {tableColumns.map((column) => (
                <td className="max-w-[150px] overflow-x-auto pl-[10px]" key={column}>
                    {String(order[column]) || "null"}
                </td>
            ))}
        </tr>
    );
};
