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

        const pagesArr = totalPages ? Array.from({ length: totalPages }, (_, i) => i + 1) : [];

        const onButtonClick = (page: number) => {
            setSearchParams((prev) => {
                prev.set("page", page.toString());
                return prev;
            });
        };

        const handlePerPage = (event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Math.max(Number(event.target.value), 1), totalItems ?? 1);

            setSearchParams((prev) => {
                prev.set("pageSize", String(value));
                prev.set("page", "1");
                return prev;
            });
        };

        return (
            <div className="my-5 flex flex-col items-center">
                <div className="flex gap-2 mt-4">
                    {pagesArr.map((page) => (
                        <button
                            key={page}
                            onClick={() => onButtonClick(page)}
                            disabled={isPending}
                            className={`px-3 py-1 rounded-md border
                            ${
                                currPage === page
                                    ? "bg-amber-400 text-white border-amber-500"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                            }
                            `}
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
