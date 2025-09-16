import axios from "axios";
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
