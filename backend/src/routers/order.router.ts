import { Router } from "express";

import { orderController } from "../controllers/order.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const orderRouter = Router();

orderRouter.get("/", authMiddleware.checkAccessToken, orderController.getAll);
