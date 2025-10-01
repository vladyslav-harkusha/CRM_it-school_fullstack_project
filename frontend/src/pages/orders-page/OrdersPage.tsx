import { Loader } from "../../components/UI/loader/Loader.tsx";
import { OrdersTable } from "./components/orders-table/OrdersTable.tsx";

export const OrdersPage = () => {
    return (
        <>
            <OrdersTable />
            <Loader />
        </>
    );
};
