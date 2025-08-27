import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { AuthValidator } from "../validators/auth.validator";

export const authRouter = Router();

authRouter.post("/login", authController.login);

authRouter.post("/logout", authMiddleware.checkAccessToken, authController.logout);

authRouter.get("/me", authMiddleware.checkAccessToken, authController.me);

authRouter.post(
    "/refresh",
    commonMiddleware.validateBody(AuthValidator.refreshToken),
    authMiddleware.checkRefreshToken,
    authController.refresh,
);

authRouter.post(
    "/set-password",
    commonMiddleware.validateBody(AuthValidator.recoveryEmail),
    authController.setPasswordRequest,
);

authRouter.post(
    "/set-password/:token",
    commonMiddleware.validateBody(AuthValidator.validatePassword),
    authController.setPassword,
);
