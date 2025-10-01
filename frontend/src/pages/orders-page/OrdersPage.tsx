import { useQuery } from "@tanstack/react-query";
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

    const { data, error, isError, isPending } = useQuery({
        queryKey: ["orders", page, pageSize],
        queryFn: () => ordersService.getAll({ page, pageSize }),
        retry: 1,
    });

    if (isError) return <ErrorInfo error={error} dataName="orders" />;

    return (
        <div className="h-[93vh] flex flex-col items-center justify-between">
            {isPending ? <Loader /> : <OrdersTable orders={data.data} />}

            <Pagination
                totalItems={data?.totalItems}
                totalPages={data?.totalPages}
                currPage={page}
                pageSize={pageSize}
                isPending={isPending}
            />
        </div>
    );
};
