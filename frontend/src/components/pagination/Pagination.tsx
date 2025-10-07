import { useSearchParams } from "react-router-dom";

import { createPagesArr } from "./createPagesArr.ts";
import { PaginationButton } from "./pagination-button/ButtonPagination.tsx";
import { PaginationInput } from "./pagination-input/PaginationInput.tsx";

type Props = {
    currPage: number;
    pageSize: number;
    totalItems: number;
    isFetching: boolean;
};

export const Pagination = ({ currPage, pageSize, totalItems, isFetching }: Props) => {
    const [, setSearchParams] = useSearchParams();
    const totalPages = Math.ceil(totalItems / pageSize);
    const pagesArr = createPagesArr(totalPages, currPage);

    const onButtonClick = (page: string) => {
        setSearchParams((prev) => {
            if (page === "<") prev.set("page", String(currPage - 1));
            else if (page === ">") prev.set("page", String(currPage + 1));
            else prev.set("page", page);

            return prev;
        });
    };

    return (
        <div className="my-5 flex justify-center items-center gap-10">
            <div className="flex gap-2">
                {pagesArr.map((page, index) => (
                    <PaginationButton
                        key={page === "..." ? `dots-${index}` : page}
                        page={page}
                        currentPage={currPage}
                        onClick={onButtonClick}
                        isFetching={isFetching}
                    />
                ))}
            </div>

            <PaginationInput pageSize={pageSize} totalItems={totalItems} isFetching={isFetching} />
        </div>
    );
};
