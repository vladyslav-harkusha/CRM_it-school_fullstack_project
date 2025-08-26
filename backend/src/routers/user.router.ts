import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

export const userRouter = Router();

userRouter.get("/", authMiddleware.checkAccessToken, authMiddleware.isAdmin, userController.getAll);

userRouter.get(
    "/:id",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    commonMiddleware.isIdValid("id"),
    userController.getById,
);

userRouter.post(
    "/",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    commonMiddleware.validateBody(UserValidator.create),
    userController.create,
);

userRouter.patch(
    "/:id/block",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    commonMiddleware.isIdValid("id"),
    userController.blockUser,
);

userRouter.patch(
    "/:id/unblock",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    commonMiddleware.isIdValid("id"),
    userController.unBlockUser,
);
