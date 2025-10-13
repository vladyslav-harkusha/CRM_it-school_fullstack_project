import cn from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export const InputMain = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...rest }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full">
                {label && (
                    <label className="text-sm font-semibold text-[var(--c-table-head)]">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    {...rest}
                    className={cn(
                        "px-3 py-2 rounded-lg border-2 outline-none transition-colors duration-300",
                        "bg-[var(--c-table-row1)] text-[var(--c-text)] border-[var(--c-orange)] caret-amber-400",
                        "focus:border-[var(--c-orange-light)] focus:ring-2 focus:ring-[var(--c-orange-light)]",
                        "disabled:opacity-60 disabled:cursor-not-allowed",
                        error && "border-red-500 focus:ring-red-400",
                        className,
                    )}
                />

                {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
            </div>
        );
    },
);

InputMain.displayName = "InputMain";
