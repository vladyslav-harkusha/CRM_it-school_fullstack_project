interface IQueryParams {
    pageSize: number;
    page: number;
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    age?: number;
    order?: string;
}

export type { IQueryParams };