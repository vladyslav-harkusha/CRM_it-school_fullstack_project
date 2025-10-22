import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "../../components/pagination/Pagination.tsx";
import { ErrorInfo } from "../../components/UI/error-info/ErrorInfo.tsx";
import { Loader } from "../../components/UI/loader/Loader.tsx";
import { usersService } from "../../services/users-service.ts";
import { UsersList } from "./components/users-list/UsersList.tsx";

export const AdminPanelPage = () => {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;

    const { data, error, isError, isPending, isFetching } = useQuery({
        queryKey: ["users", { page, pageSize }],
        queryFn: ({ signal }) => usersService.getAll({ page, pageSize }, signal),
        retry: 1,
        placeholderData: keepPreviousData,
    });

    if (isError) return <ErrorInfo error={error} dataName="Admin Panel Page" />;

    return (
        <div className="h-[93vh] flex flex-col items-center justify-between">
            <h2>Admin Panel Page</h2>
            {isPending ? <Loader /> : <UsersList users={data.data} isFetching={isFetching} />}
            <Pagination
                currPage={page}
                pageSize={pageSize}
                totalItems={data?.totalItems || 10}
                isFetching={isFetching}
            />
        </div>
    );
};
