import { ChangeEvent, FC, memo } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
    currPage: number;
    pageSize: number;
    totalItems: number | undefined;
    totalPages: number | undefined;
    isPending: boolean;
};

export const Pagination: FC<Props> = memo(
    ({ currPage, pageSize, totalItems, totalPages, isPending }) => {
        const [, setSearchParams] = useSearchParams();

        const handlePrevPage = () => {
            const prevPage = currPage > 1 ? currPage - 1 : currPage;
            setSearchParams((prev) => {
                prev.set("page", prevPage.toString());
                return prev;
            });
        };

        const handleNextPage = () => {
            const nextPage = Number(totalPages) > currPage ? currPage + 1 : currPage;
            setSearchParams((prev) => {
                prev.set("page", nextPage.toString());
                return prev;
            });
        };

        const handlePerPage = (event: ChangeEvent<HTMLInputElement>) => {
            setSearchParams((prev) => {
                prev.set("pageSize", String(event.target.value));
                prev.set("page", "1");
                return prev;
            });
        };

        return (
            <div className="my-5 flex flex-col items-center">
                <div className="flex gap-5">
                    <button onClick={handlePrevPage} disabled={isPending}>
                        {`<< Prev ${pageSize}`}
                    </button>

                    <button onClick={handleNextPage} disabled={isPending}>
                        {`Next ${pageSize} >>`}
                    </button>
                </div>

                <div className="flex items-center justify-center gap-5 font-bold text-[var(--c-table-head)]">
                    <p>Page: {currPage}</p>
                    <p>Total pages: {totalPages}</p>
                    <label htmlFor="perPage">
                        <span>Page size: </span>
                        <input
                            min="1"
                            max={totalItems}
                            className="w-12 p-[2px] border-2 border-[var(--c-orange)] rounded-lg text-[var(--c-header-links)]"
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
    },
);
