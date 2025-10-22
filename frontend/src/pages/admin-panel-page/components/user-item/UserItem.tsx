import { IUser } from "../../../../../../shared/interfaces/user.interface.ts";

type Props = {
    user: IUser;
    number: number;
};

export const UserItem = ({ user, number }: Props) => {
    return (
        <li className="flex items-center gap-5 p-5 border-2 rounded-2xl border-[var(--c-orange)]">
            <div className="text-2xl">{number}.</div>

            <div>
                <p>id: {user._id}</p>
                <p>
                    {user.name} {user.surname}
                </p>
                <p>email: {user.email}</p>
                <p>is active: {String(user.isActive)}</p>
                <p>last login: null</p>
            </div>
        </li>
    );
};
