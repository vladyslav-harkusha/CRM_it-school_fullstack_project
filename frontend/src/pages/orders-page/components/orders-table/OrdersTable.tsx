import { useQuery } from "@tanstack/react-query";

import { ErrorInfo } from "../../../../components/UI/error-info/ErrorInfo.tsx";
import { Loader } from "../../../../components/UI/loader/Loader.tsx";
import { ordersService } from "../../../../services/orders-service.ts";
import { OrderItem } from "../order-item/OrderItem.tsx";
import { tableColumns } from "./table-columns.constant.ts";

export const OrdersTable = () => {
    const { data, error, isError, isPending } = useQuery({
        queryKey: ["orders"],
        queryFn: ordersService.getAll,
        retry: 1,
    });

    if (isError) return <ErrorInfo error={error} dataName="orders" />;

    if (isPending) return <Loader />;

    return (
        <table className="w-full bg-[var(--c-orange)] border-2 border-[var(--c-orange)]">
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
                {data.data.map((order) => (
                    <OrderItem key={order._id} order={order} tableColumns={tableColumns} />
                ))}
            </tbody>
        </table>
    );
};
