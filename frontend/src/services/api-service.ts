import axios, { AxiosError } from "axios";

import { authService } from "./auth-service.ts";

export class ApiError extends Error {
    status: number;
    data?: unknown;

    constructor(status: number, message: string, data?: unknown) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

export const apiService = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

apiService.interceptors.request.use((req) => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
});

apiService.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data as { status?: number; message?: string };

            throw new ApiError(status, data?.message ?? "Unknown error", data);
        }

        throw new ApiError(0, error.message);
    },
);
