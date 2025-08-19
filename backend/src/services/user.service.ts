import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { IUser, IUserCreateDTO } from "../../../shared/interfaces/user.interface";
import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";

class UserService {
    public getAll(): Promise<IUser[]> {
        return userRepository.getAll();
    }

    public async create(user: IUserCreateDTO): Promise<IUser> {
        await userService.isEmailUnique(user.email);
        return await userRepository.create(user);
    }

    public async getById(userId: string): Promise<IUser> {
        const user = await userRepository.getById(userId);

        if (!user) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }

        return user;
    }

    public async updateById(userId: string, updateData: Partial<IUser>): Promise<IUser> {
        const user = await userRepository.getById(userId);

        if (!user) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }

        return await userRepository.updateById(userId, updateData);
    }

    public async isEmailUnique(email: string): Promise<void> {
        const user = await userRepository.getByEmail(email);

        if (user) {
            throw new ApiError("User is already exists", StatusCodesEnum.BAD_REQUEST);
        }
    }

    public blockUser(userId: string): Promise<IUser> {
        return userRepository.blockUser(userId);
    }

    public unBlockUser(userId: string): Promise<IUser> {
        return userRepository.unbBlockUser(userId);
    }

    public getByEmail(email: string): Promise<IUser> {
        return userRepository.getByEmail(email);
    }
}

export const userService = new UserService();
