import { type FC, useEffect, useState } from "react";
import axios from "axios";
import type { IOrder } from "../../shared/interfaces/order.interface.ts";

export const App: FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    console.log(orders);

    useEffect(() => {
        axios.get(`http://localhost:7000/orders`)
            .then(({data}) => setOrders(data.data));
    }, [])
    
    return (
        <>
            <h1>Hello Vladys</h1>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>{JSON.stringify(order)}</li>
                ))}
            </ul>
        </>
    )
};
