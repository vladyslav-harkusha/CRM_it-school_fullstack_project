import { ApiError } from "../../../services/api-service.ts";

type Props = {
    error: Error;
    dataName: string;
};

export const ErrorInfo = ({ error, dataName }: Props) => {
    const err = error as ApiError;
    return (
        <div className="w-fit mx-auto mt-40 p-10 rounded-xl text-rose-600 font-bold text-center bg-rose-200">
            <p>Loading {dataName} error:</p>
            <p>
                Status {err.status} - {err.message}
            </p>
        </div>
    );
};
