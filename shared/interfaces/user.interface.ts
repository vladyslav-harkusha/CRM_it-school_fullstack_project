import { RoleEnum } from "../enums/role.enum";
import type { IBase } from "./base.interface";

interface IUser extends IBase {
    _id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    role: RoleEnum;
    avatar: string;
    isActive: boolean;
    isBlocked: boolean;
    isDeleted: boolean;
}

type IUserCreateDTO = Pick<IUser, "email" | "name" | "surname">;
type IUserSignInDTO = Pick<IUser, "email" | "password">;

export type { IUser, IUserCreateDTO, IUserSignInDTO };