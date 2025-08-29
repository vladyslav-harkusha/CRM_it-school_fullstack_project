import joi from "joi";

import { QueryOrderEnum } from "../../../shared/enums/query-order.enum";

export class QueryParamsValidator {
    public static query = joi.object({
        pageSize: joi.number().min(1).max(100).default(25),
        page: joi.number().min(1).default(1),
        search: joi.string().trim(),
        order: joi
            .string()
            .valid(
                ...Object.values(QueryOrderEnum),
                ...Object.values(QueryOrderEnum).map((item) => `-${item}`),
            )
            .default({ created_at: -1 }),
    });
}
