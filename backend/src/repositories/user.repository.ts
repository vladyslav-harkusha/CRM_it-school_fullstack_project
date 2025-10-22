import { IQueryParams } from "../../../shared/interfaces/query-params.interface";
import { IUser, IUserCreateDTO } from "../../../shared/interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
    public getAll(query: IQueryParams): Promise<[IUser[], number]> {
        const skip = query.pageSize * (query.page - 1);

        return Promise.all([
            User.find({ isDeleted: false })
                .limit(query.pageSize)
                .skip(skip)
                .sort({ createdAt: -1 }),
            User.find({ isDeleted: false }).countDocuments(),
        ]);
    }

    public create(user: IUserCreateDTO): Promise<IUser> {
        return User.create(user);
    }

    public getById(userId: string): Promise<IUser> {
        return User.findById(userId);
    }

    public updateById(userId: string, newUser: Partial<IUser>): Promise<IUser> {
        return User.findByIdAndUpdate(userId, newUser, { new: true });
    }

    public getByEmail(email: string): Promise<IUser> {
        return User.findOne({ email });
    }

    public blockUser(userId: string): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });
    }

    public unbBlockUser(userId: string): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isBlocked: false }, { new: true });
    }

    public deleteUser(userId: string): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
    }
}

export const userRepository = new UserRepository();
