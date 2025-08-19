import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { ITokenPayload } from "../../../shared/interfaces/token.interface";
import { ApiError } from "../errors/api.error";
import { userService } from "../services/user.service";

class UserController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await userService.getAll();
            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const data = await userService.getById(id);
            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }

    public async blockUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } = req.params;
            const { userId: myId } = req.res.locals.tokenPayload as ITokenPayload;
            if (userId === myId) {
                throw new ApiError("Not permitted", StatusCodesEnum.FORBIDDEN);
            }

            const blockedUser = await userService.blockUser(userId);
            res.status(StatusCodesEnum.OK).json(blockedUser);
        } catch (e) {
            next(e);
        }
    }

    public async unBlockUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id: userId } = req.params;
            const { userId: myId } = req.res.locals.tokenPayload as ITokenPayload;
            if (userId === myId) {
                throw new ApiError("Not permitted", StatusCodesEnum.FORBIDDEN);
            }

            const unBlockedUser = await userService.unBlockUser(userId);
            res.status(StatusCodesEnum.OK).json(unBlockedUser);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
