import cn from "classnames";

import { IUser } from "../../../../../../shared/interfaces/user.interface.ts";
import { UserItem } from "../user-item/UserItem.tsx";

type Props = {
    users: IUser[];
    isFetching: boolean;
};

export const UsersList = ({ users, isFetching }: Props) => {
    return (
        <ul
            className={cn("overflow-y-auto w-full flex flex-col gap-5", isFetching && "opacity-50")}
        >
            {users.map((user, i) => (
                <UserItem key={user._id} user={user} number={users.length - i} />
            ))}
        </ul>
    );
};
