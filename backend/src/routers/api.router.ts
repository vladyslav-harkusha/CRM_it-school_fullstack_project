import { Router } from "express";

import { authRouter } from "./auth.router";
import { orderRouter } from "./order.router";
import { userRouter } from "./user.router";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/orders", orderRouter);
