import { RoleEnum } from "@shared/enums/role.enum";
import { IUser } from "@shared/interfaces/user.interface";
import { model, Schema } from "mongoose";
import path from "path";

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, default: "pass" },
        role: {
            enum: RoleEnum,
            type: String,
            required: true,
            default: RoleEnum.MANAGER,
        },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        avatar: { type: String, default: "" },
        isActive: { type: Boolean, default: false },
        isBlocked: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
                if (ret.avatar) {
                    ret.avatar = `/media/${path.basename(ret.avatar)}`;
                }

                return ret;
            },
        },
    },
);

export const User = model<IUser>("user", userSchema);
