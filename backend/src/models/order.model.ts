import { model, Schema } from "mongoose";

import { CourseFormatEnum } from "../../../shared/enums/course_format.enum";
import { CourseNameEnum } from "../../../shared/enums/course_name.enum";
import { CourseTypeEnum } from "../../../shared/enums/course_type.enum";
import { OrderStatusEnum } from "../../../shared/enums/order_status.enum";
import { IOrder } from "../../../shared/interfaces/order.interface";

const orderSchema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: Number, required: true },
        age: { type: Number, required: true },
        course: { enum: CourseNameEnum, type: String, required: true },
        course_format: { enum: CourseFormatEnum, type: String, required: true },
        course_type: { enum: CourseTypeEnum, type: String, required: true },
        status: {
            enum: OrderStatusEnum,
            type: String,
            required: true,
            default: OrderStatusEnum.NEW,
        },
        sum: { type: Number, default: 0 },
        alreadyPaid: { type: Number, default: 0 },
        manager: { type: String, default: "" },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const Order = model<IOrder>("order", orderSchema);
