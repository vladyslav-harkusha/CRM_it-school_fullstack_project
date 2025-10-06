import { model, Schema } from "mongoose";

import { CourseFormatEnum } from "../../../shared/enums/course-format.enum";
import { CourseNameEnum } from "../../../shared/enums/course-name.enum";
import { CourseTypeEnum } from "../../../shared/enums/course-type.enum";
import { OrderStatusEnum } from "../../../shared/enums/order-status.enum";
import { IOrder } from "../../../shared/interfaces/order.interface";

const orderSchema = new Schema(
    {
        name: { type: String, required: true, default: null },
        surname: { type: String, required: true, default: null },
        email: { type: String, required: true, default: null },
        phone: { type: String, required: true, default: null },
        age: { type: Number, required: true, default: null },
        course: { enum: CourseNameEnum, type: String, required: true },
        course_format: { enum: CourseFormatEnum, type: String, required: true },
        course_type: { enum: CourseTypeEnum, type: String, required: true },
        status: {
            enum: OrderStatusEnum,
            type: String,
            required: true,
            default: OrderStatusEnum.NEW,
        },
        sum: { type: Number, default: null },
        already_paid: { type: Number, default: null },
        group: { type: String, default: null },
        manager: { type: String, default: null },
        utm: { type: String, default: null },
        msg: { type: String, default: null },
        comments: { type: [String], default: [] },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const Order = model<IOrder>("order", orderSchema);
