import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { ITokenPayload } from "../../../shared/interfaces/token.interface";
import { IUserSignInDTO } from "../../../shared/interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { authService } from "../services/auth.service";
import { tokenService } from "../services/token.service";
import { userService } from "../services/user.service";

class AuthController {
    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = req.body as IUserSignInDTO;
            const data = await authService.login(dto);

            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }

    public async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const tokenPayload = res.locals.tokenPayload as ITokenPayload;
            if (!tokenPayload) {
                return res.status(StatusCodesEnum.UNAUTHORIZED).json("Invalid token payload");
            }

            await tokenRepository.deleteByUserId(tokenPayload.userId);

            res.sendStatus(StatusCodesEnum.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    }

    public async me(req: Request, res: Response, next: NextFunction) {
        try {
            const tokenPayload = res.locals.tokenPayload as ITokenPayload;
            const { userId } = tokenPayload;
            const user = await userService.getById(userId);

            res.status(StatusCodesEnum.OK).json(user);
        } catch (e) {
            next(e);
        }
    }

    public async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, role } = req.res.locals.tokenPayload as ITokenPayload;
            const newTokens = tokenService.generateTokens({ userId, role });
            await tokenRepository.create({ ...newTokens, _userId: userId });

            res.status(StatusCodesEnum.OK).json({ tokens: newTokens });
        } catch (e) {
            next(e);
        }
    }

    public async setPasswordRequest(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = await userService.getByEmail(email);
            const url = await authService.setPasswordRequest(user);

            res.status(StatusCodesEnum.OK).json({ url });
        } catch (e) {
            next(e);
        }
    }

    public async setPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.params;
            const { password } = req.body;
            const user = await authService.setPassword(token, password);

            res.status(StatusCodesEnum.OK).json(user);
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();
