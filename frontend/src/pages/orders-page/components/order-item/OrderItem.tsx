import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";

type Props = {
    tableColumns: (keyof IOrder)[];
    order: IOrder;
};

export const OrderItem = ({ tableColumns, order }: Props) => {
    return (
        <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-amber-400 duration-300 cursor-pointer">
            {tableColumns.map((column) => (
                <td className="max-w-[200px] overflow-x-auto pl-[10px]" key={column}>
                    {column === "_id"
                        ? parseInt(String(order[column]).slice(-3), 16)
                        : String(order[column]) || "null"}
                </td>
            ))}
        </tr>
    );
};
