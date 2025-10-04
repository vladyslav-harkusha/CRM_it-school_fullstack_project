import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { ButtonPagination } from "../UI/button-pagination/ButtonPagination.tsx";
import { createPagesArr } from "./createPagesArr.ts";

type Props = {
    currPage: number;
    pageSize: number;
    totalItems: number | undefined;
    totalPages: number | undefined;
    isPending: boolean;
};

export const Pagination = ({ currPage, pageSize, totalItems, totalPages, isPending }: Props) => {
    const [, setSearchParams] = useSearchParams();
    const pagesArr = createPagesArr(totalPages, currPage);

    const onButtonClick = (page: string) => {
        setSearchParams((prev) => {
            if (page === "<") {
                prev.set("page", String(currPage - 1));
            } else if (page === ">") {
                prev.set("page", String(currPage + 1));
            } else {
                prev.set("page", page);
            }
            return prev;
        });
    };

    const handlePerPage = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), 100);

        setSearchParams((prev) => {
            prev.set("pageSize", String(value));
            prev.set("page", "1");
            return prev;
        });
    };

    return (
        <div className="my-5 flex justify-center items-center gap-10">
            <div className="flex gap-2">
                {pagesArr.map((page) => (
                    <ButtonPagination
                        key={page}
                        page={page}
                        onClick={onButtonClick}
                        isPending={isPending}
                        currentPage={currPage}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center gap-5 font-bold text-[var(--c-table-head)]">
                <label htmlFor="perPage">
                    <span>Page size: </span>
                    <input
                        min="1"
                        max={totalItems}
                        className="w-12 p-[2px] border-2 border-[var(--c-orange)] rounded-lg text-[var(--c-header-links)] cursor-pointer"
                        type="number"
                        id="perPage"
                        value={pageSize}
                        onChange={handlePerPage}
                        disabled={isPending}
                    />
                </label>
            </div>
        </div>
    );
};
