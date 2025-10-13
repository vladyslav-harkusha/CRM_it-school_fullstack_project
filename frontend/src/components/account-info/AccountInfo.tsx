import { useAuth } from "../../hooks/useAuth.tsx";

export const AccountInfo = () => {
    const { user } = useAuth();

    return (
        <div className="flex items-center justify-center gap-5 text-[var(--c-text)]">
            <div className="text-center">
                <p className="font-bold">
                    {user?.name} {user?.surname}
                </p>
                <p>role: {user?.role}</p>
            </div>
            <div
                className="
                    w-[6vh] h-[6vh] border-2 border-[var(--c-table-head)] rounded-[50%]
                    flex items-center justify-center font-bold bg-[var(--c-table-row2)]
                "
            >
                {user?.avatar ? <img src={user.avatar} alt="ava" /> : <p>AVA</p>}
            </div>
        </div>
    );
};
