import joi from "joi";

import { RegexEnum } from "../../../shared/enums/regex.enum";

export class UserValidator {
    private static email = joi.string().email().trim();
    private static name = joi.string().pattern(RegexEnum.NAME);
    private static surname = joi.string().pattern(RegexEnum.NAME);

    public static create = joi.object({
        email: this.email.required(),
        name: this.name.required(),
        surname: this.surname.required(),
    });
}
