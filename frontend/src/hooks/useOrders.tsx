import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { ordersService } from "../services/orders-service.ts";
import { useAuth } from "./useAuth.tsx";

export const useOrders = () => {
    const { isAuth } = useAuth();
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 25;
    const order = searchParams.get("order") || "-created_at";

    const { data, error, isError, isPending, isFetching } = useQuery({
        queryKey: ["orders", { page, pageSize, order }],
        queryFn: ({ signal }) => ordersService.getAll({ page, pageSize, order }, signal),
        retry: 1,
        placeholderData: keepPreviousData,
        enabled: isAuth,
    });

    return {
        params: { page, pageSize, order },
        data,
        error,
        isError,
        isPending,
        isFetching,
    };
};
