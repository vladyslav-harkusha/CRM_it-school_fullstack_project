import { Router } from "express";

import { orderController } from "../controllers/order.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { QueryParamsValidator } from "../validators/query-params.validator";

export const orderRouter = Router();

orderRouter.get(
    "/",
    authMiddleware.checkAccessToken,
    commonMiddleware.query(QueryParamsValidator.query),
    orderController.getAll,
);
