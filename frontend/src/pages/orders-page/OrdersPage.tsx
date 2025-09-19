import { useQuery } from "@tanstack/react-query";

import { ordersService } from "../../services/orders-service.ts";

export const OrdersPage = () => {
    const { data, error } = useQuery({
        queryKey: ["orders"],
        queryFn: ordersService.getAll,
    });

    if (error) return <h3>{error.message}</h3>;

    return (
        <>
            <h2>Orders</h2>
            <ul>
                {data?.data.map((order) => (
                    <li key={order._id}>{JSON.stringify(order)}</li>
                ))}
            </ul>
        </>
    );
};
