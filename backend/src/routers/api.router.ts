import { Router } from "express";

import { orderRouter } from "./order.router";
import { userRouter } from "./user.router";

export const apiRouter = Router();

apiRouter.use("/orders", orderRouter);
apiRouter.use("/users", userRouter);
