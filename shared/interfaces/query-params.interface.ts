interface IQueryParams {
    pageSize: number;
    page: number;
    search?: string;
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    age?: string;
    order?: string;
}

export type { IQueryParams };