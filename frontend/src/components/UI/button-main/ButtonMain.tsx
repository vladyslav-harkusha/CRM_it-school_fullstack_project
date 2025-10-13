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
                "shadow-[2px_2px_4px_var(--c-orange)] hover:shadow-[4px_4px_8px_var(--c-orange)]",
                "active:shadow-[0_2px_4px_var(--c-orange)] active:translate-y-[1px]",
                'disabled:cursor-default disabled:hover:bg-[var(--c-table-row2)] disabled:hover:shadow-none",',
                disabled
                    ? "bg-[var(--c-table-row2)] text-[var(--c-text)] border-[var(--c-orange)] "
                    : "bg-[var(--c-orange)] text-[var(--c-text)] border-[var(--c-table-head)] hover:bg-[var(--c-orange-light)] font-bold",
            )}
        >
            {text.toUpperCase()}
        </button>
    );
};
