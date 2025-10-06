import cn from "classnames";

import { IOrder } from "../../../../../../shared/interfaces/order.interface.ts";
import { ButtonMain } from "../../../../components/UI/button-main/ButtonMain.tsx";

type Props = {
    order: IOrder;
    tableColumnsCount: number;
    isEven: boolean;
};

export const OrderItemDetails = ({ order, tableColumnsCount, isEven }: Props) => {
    return (
        <tr
            className={cn("h-20", isEven ? "bg-[var(--c-table-row1)]" : "bg-[var(--c-table-row2)]")}
        >
            <td colSpan={tableColumnsCount}>
                <div className="py-5 px-10 flex justify-between">
                    <div
                        className={cn(
                            "flex flex-col justify-around h-20 px-5 py-2 rounded-xl",
                            "[&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-[var(--c-orange)]",
                            isEven ? "bg-[var(--c-table-row2)]" : "bg-[var(--c-table-row1)]",
                        )}
                    >
                        <p>Message: {order.msg || "null"}</p>
                        <p>UTM: {order.utm || "null"}</p>
                    </div>

                    <div className="flex gap-10">
                        <div className="w-[700px]">
                            <ul
                                className={cn(
                                    "mb-3 px-5 py-2 rounded-xl",
                                    "[&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-[var(--c-orange)]",
                                    isEven
                                        ? "bg-[var(--c-table-row2)]"
                                        : "bg-[var(--c-table-row1)]",
                                )}
                            >
                                {order.comments.map((comment, i) => (
                                    <li key={i} className="flex justify-between">
                                        <p>{comment}</p>
                                        <div className="flex gap-3">
                                            <p>{order.manager || "manager"}</p>
                                            <p>{Date.now().toString()}</p>
                                        </div>
                                    </li>
                                ))}
                                <li className="flex justify-between">
                                    <p>Comment 1 asdfasfasdgfa</p>
                                    <div className="flex gap-3">
                                        <p>{order.manager || "manager"}</p>
                                        <p>{Date.now().toString()}</p>
                                    </div>
                                </li>
                                <li className="flex justify-between">
                                    <p>Comment 1 asdfasfasdgfa</p>
                                    <div className="flex gap-3">
                                        <p>{order.manager || "manager"}</p>
                                        <p>{Date.now().toString()}</p>
                                    </div>
                                </li>
                                <li className="flex justify-between">
                                    <p>Comment 1 asdfasfasdgfa</p>
                                    <div className="flex gap-3">
                                        <p>{order.manager || "manager"}</p>
                                        <p>{Date.now().toString()}</p>
                                    </div>
                                </li>
                            </ul>

                            <form className="flex gap-5">
                                <input
                                    className={cn(
                                        "w-full px-5 caret-amber-400 outline-none border-2 rounded-xl",
                                        "focus:border-[var(--c-table-head)] focus:bg-slate-100",
                                        isEven
                                            ? "border-[var(--c-table-row2)] bg-[var(--c-table-row2)]"
                                            : "border-[var(--c-table-row1)] bg-[var(--c-table-row1)]",
                                    )}
                                    type="text"
                                    placeholder="New comment"
                                />
                                <ButtonMain text={"Submit"} />
                            </form>
                        </div>

                        <ButtonMain text={"Edit order"} />
                    </div>
                </div>
            </td>
        </tr>
    );
};
