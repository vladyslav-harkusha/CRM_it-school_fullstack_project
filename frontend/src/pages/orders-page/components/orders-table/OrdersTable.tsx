import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

type Props = {
    orders: IOrder[];
};

export const OrdersTable = ({ orders }: Props) => {
    return (
        <table className="w-full overflow-y-auto bg-[var(--c-orange)] border-2 border-[var(--c-orange)]">
            <thead>
                <tr>
                    {tableColumns.map((column) => (
                        <th
                            key={column}
                            className="border-2 border-[var(--c-orange)] rounded-t-3xl bg-[var(--c-table-head)] px-2 py-1 text-[var(--c-orange)] cursor-pointer"
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
