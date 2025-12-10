import { Pagination } from "../../components/pagination/Pagination.tsx";
import { ErrorInfo } from "../../components/UI/error-info/ErrorInfo.tsx";
import { Loader } from "../../components/UI/loader/Loader.tsx";
import { useOrders } from "../../hooks/useOrders.tsx";
import { OrdersTable } from "./components/orders-table/OrdersTable.tsx";

export const OrdersPage = () => {
    const { data, isPending, isFetching, isError, error, params } = useOrders();

    if (isError) return <ErrorInfo error={error} dataName="Orders Page" />;

    return (
        <div className="h-[93vh] flex flex-col items-center justify-between">
            {isPending || !data ? (
                <Loader margin_t={35} />
            ) : (
                <OrdersTable orders={data.data} isFetching={isFetching} />
            )}

            <Pagination
                totalItems={data?.totalItems || 500}
                currPage={params.page}
                pageSize={params.pageSize}
                isFetching={isFetching}
            />
        </div>
    );
};
