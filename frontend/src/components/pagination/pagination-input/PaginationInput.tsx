import debounce from "lodash.debounce";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
    pageSize: number;
    totalItems: number;
    isPending: boolean;
};

export const PaginationInput = ({ pageSize, totalItems, isPending }: Props) => {
    const [localPageSize, setLocalPageSize] = useState(pageSize);
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLocalPageSize(pageSize);
    }, [pageSize]);

    const debouncedSetPageSize = useMemo(
        () =>
            debounce((value: number) => {
                setSearchParams((prev) => {
                    prev.set("pageSize", String(value));
                    prev.set("page", "1");
                    return prev;
                });
            }, 500), // задержка 500мс
        [setSearchParams],
    );

    const handlePerPage = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), 100);
        setLocalPageSize(value);
        debouncedSetPageSize(value);
    };

    return (
        <div className="flex items-center justify-center gap-5 font-bold text-[var(--c-table-head)]">
            <label htmlFor="perPage">
                <span>Page size: </span>
                <input
                    className="
                            w-16 py-[2px] pl-2 border-2 border-[var(--c-orange)] rounded-lg text-[var(--c-table-head)] cursor-pointer
                            disabled:cursor-default disabled:opacity-50 caret-amber-400 outline-none focus:text-[var(--c-header-links)]
                        "
                    min="1"
                    max={totalItems}
                    type="number"
                    id="perPage"
                    value={localPageSize}
                    onChange={handlePerPage}
                    disabled={isPending}
                />
            </label>
        </div>
    );
};
