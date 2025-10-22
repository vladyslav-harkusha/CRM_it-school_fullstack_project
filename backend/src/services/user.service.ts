import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { IPaginatedResponse } from "../../../shared/interfaces/paginated-response.interface";
import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { IUser, IUserCreateDTO } from "../../../shared/interfaces/user.interface";
import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";

class UserService {
    public async getAll(query: IQueryParams): Promise<IPaginatedResponse<IUser>> {
        const [data, totalItems] = await userRepository.getAll(query);

        const totalPages = Math.ceil(totalItems / query.pageSize);

        return {
            totalItems,
            totalPages,
            prevPage: !!(query.page - 1),
            nextPage: query.page < totalPages,
            data,
        };
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

    public deleteUser(userId: string): Promise<IUser> {
        return userRepository.deleteUser(userId);
    }

    public async getByEmail(email: string): Promise<IUser> {
        const user = await userRepository.getByEmail(email);

        if (!user) {
            throw new ApiError("User not found", StatusCodesEnum.NOT_FOUND);
        }

        return user;
    }
}

export const userService = new UserService();
