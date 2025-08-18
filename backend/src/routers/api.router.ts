import { Router } from "express";

import { orderRouter } from "./order.router";

const router = Router();

export const apiRouter = router;

router.use("/orders", orderRouter);
