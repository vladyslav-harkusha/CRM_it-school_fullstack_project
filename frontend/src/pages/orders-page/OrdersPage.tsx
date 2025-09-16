import axios from "axios";
import { useEffect, useState } from "react";

import type { IOrder } from "../../../../shared/interfaces/order.interface.ts";

export const OrdersPage = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/orders`)
            .then(({ data }) => setOrders(data.data));
    }, []);

    return (
        <>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>{JSON.stringify(order)}</li>
                ))}
            </ul>
        </>
    );
};
