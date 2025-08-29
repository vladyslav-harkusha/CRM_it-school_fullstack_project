import joi from "joi";

import { CourseFormatEnum } from "../../../shared/enums/course-format.enum";
import { CourseNameEnum } from "../../../shared/enums/course-name.enum";
import { CourseTypeEnum } from "../../../shared/enums/course-type.enum";
import { OrderStatusEnum } from "../../../shared/enums/order-status.enum";
import { RegexEnum } from "../../../shared/enums/regex.enum";

export class OrderValidator {
    public static update = joi.object({
        name: joi.string().pattern(RegexEnum.NAME),
        surname: joi.string().pattern(RegexEnum.NAME),
        email: joi.string().email().trim(),
        phone: joi.string().trim().pattern(RegexEnum.PHONE),
        age: joi.number().min(1).max(200),
        course: joi.string().valid(...Object.values(CourseNameEnum)),
        course_format: joi.string().valid(...Object.values(CourseFormatEnum)),
        course_type: joi.string().valid(...Object.values(CourseTypeEnum)),
        already_paid: joi.number().min(1),
        sum: joi.number().min(1),
        status: joi.string().valid(...Object.values(OrderStatusEnum)),
        group: joi.string().trim(),
    });
}
