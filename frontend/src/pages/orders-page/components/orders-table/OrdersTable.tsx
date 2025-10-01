import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

type Props = {
    orders: IOrder[];
};

export const OrdersTable = ({ orders }: Props) => {
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
                <tbody>
                    {orders.map((order) => (
                        <OrderItem key={order._id} order={order} tableColumns={tableColumns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
