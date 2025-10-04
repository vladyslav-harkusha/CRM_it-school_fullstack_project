import cn from "classnames";

type Props = {
    page: string;
    onClick: (page: string) => void;
    isPending: boolean;
    currentPage: number;
};

export const ButtonPagination = ({ page, onClick, isPending, currentPage }: Props) => {
    return (
        <button
            onClick={() => onClick(page)}
            disabled={isPending || page === "..."}
            className={cn(
                "w-10 h-9 rounded-xl border-2 cursor-pointer duration-300",
                "disabled:cursor-default disabled:hover:bg-[var(--c-table-row2)]",
                currentPage === +page
                    ? "bg-[var(--c-orange)] text-[var(--c-text)] border-[var(--c-table-head)] font-bold"
                    : "bg-[var(--c-table-row2)] text-[var(--c-text)] border-[var(--c-orange)] hover:bg-[var(--c-orange-light)]",
            )}
        >
            {page}
        </button>
    );
};
