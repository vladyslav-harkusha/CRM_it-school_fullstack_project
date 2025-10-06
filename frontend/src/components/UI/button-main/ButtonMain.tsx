import cn from "classnames";

type Props = {
    onClick?: () => void;
    text: string;
    isPending?: boolean;
    disabled?: boolean;
};

export const ButtonMain = ({ onClick, isPending, disabled, text }: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={isPending || disabled}
            className={cn(
                "w-fit h-9 px-2 rounded-xl border-2 cursor-pointer duration-300",
                "disabled:cursor-default disabled:hover:bg-[var(--c-table-row2)]",
                disabled
                    ? "bg-[var(--c-table-row2)] text-[var(--c-text)] border-[var(--c-orange)] "
                    : "bg-[var(--c-orange)] text-[var(--c-text)] border-[var(--c-table-head)] hover:bg-[var(--c-orange-light)] font-bold",
            )}
        >
            {text.toUpperCase()}
        </button>
    );
};
