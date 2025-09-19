import axios, { AxiosError } from "axios";
import { AxiosResponse } from "axios";

import { authService } from "./auth-service.ts";

export type ApiResponseType<T> = Promise<AxiosResponse<T>>;

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
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    },
);
