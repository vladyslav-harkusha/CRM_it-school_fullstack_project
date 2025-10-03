import cn from "classnames";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

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
                    <button
                        key={page}
                        onClick={() => onButtonClick(page)}
                        disabled={isPending || page === "..."}
                        className={cn(
                            "w-10 h-9 rounded-xl border-2 cursor-pointer duration-300",
                            "disabled:cursor-default disabled:hover:bg-[var(--c-table-row2)]",
                            currPage === +page
                                ? "bg-[var(--c-orange)] text-[var(--c-text)] border-[var(--c-table-head)] font-bold"
                                : "bg-[var(--c-table-row2)] text-[var(--c-text)] border-[var(--c-orange)] hover:bg-[var(--c-orange-light)]",
                        )}
                    >
                        {page}
                    </button>
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
