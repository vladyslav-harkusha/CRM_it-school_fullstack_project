import axios from "axios";
import { AxiosResponse } from "axios";

export type ApiResponseType<T> = Promise<AxiosResponse<T>>;

export const apiService = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});
