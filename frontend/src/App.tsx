import axios from "axios";
import { type FC, useEffect, useState } from "react";

import type { IOrder } from "../../shared/interfaces/order.interface.ts";

export const App: FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/orders`)
            .then(({ data }) => setOrders(data.data));
    }, []);

    return (
        <>
            <h1>Hello Vladys</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>{JSON.stringify(order)}</li>
                ))}
            </ul>
        </>
    );
};
