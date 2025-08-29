import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { IOrderUpdateDTO } from "../../../shared/interfaces/order.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { orderService } from "../services/order.service";

class OrderController {
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const query = res.locals.query as IQueryParams;
            const data = await orderService.getAll(query);
            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }

    public async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const { orderId } = req.params;
            const updateData = req.body as IOrderUpdateDTO;
            const data = await orderService.updateById(orderId, updateData);
            res.status(StatusCodesEnum.OK).json(data);
        } catch (e) {
            next(e);
        }
    }
}

export const orderController = new OrderController();
