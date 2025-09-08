import type { IBase } from "./base.interface";
import { CourseNameEnum } from "../enums/course-name.enum";
import { CourseFormatEnum } from "../enums/course-format.enum";
import { CourseTypeEnum } from "../enums/course-type.enum";
import { OrderStatusEnum } from "../enums/order-status.enum";

interface IOrder extends IBase {
    _id: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    age: number;
    course: CourseNameEnum;
    course_format: CourseFormatEnum;
    course_type: CourseTypeEnum;
    status: OrderStatusEnum;
    sum: number;
    already_paid: number;
    group: string;
    manager: string;
    utm: string;
    msg: string;
    comments: string[];
}

type IOrderUpdateDTO = Pick<IOrder, "name" | "surname" | "email" | "phone" | "age" | "course" | "course_format" | "course_type" | "already_paid" | "sum" | "status" | "group">;

export type { IOrder, IOrderUpdateDTO };