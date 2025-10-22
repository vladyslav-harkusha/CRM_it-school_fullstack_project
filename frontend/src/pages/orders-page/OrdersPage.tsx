import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "../../components/pagination/Pagination.tsx";
import { ErrorInfo } from "../../components/UI/error-info/ErrorInfo.tsx";
import { Loader } from "../../components/UI/loader/Loader.tsx";
import { ordersService } from "../../services/orders-service.ts";
import { OrdersTable } from "./components/orders-table/OrdersTable.tsx";

export const OrdersPage = () => {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 25;
    const order = searchParams.get("order") || "-created_at";

    const { data, error, isError, isPending, isFetching } = useQuery({
        queryKey: ["orders", { page, pageSize, order }],
        queryFn: ({ signal }) => ordersService.getAll({ page, pageSize, order }, signal),
        retry: 1,
        placeholderData: keepPreviousData,
    });

    if (isError) return <ErrorInfo error={error} dataName="Orders Page" />;

    return (
        <div className="h-[93vh] flex flex-col items-center justify-between">
            {isPending ? <Loader /> : <OrdersTable orders={data.data} isFetching={isFetching} />}

            <Pagination
                totalItems={data?.totalItems || 500}
                currPage={page}
                pageSize={pageSize}
                isFetching={isFetching}
            />
        </div>
    );
};
