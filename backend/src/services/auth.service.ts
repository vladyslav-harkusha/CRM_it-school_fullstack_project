import { ActionTokenTypeEnum } from "../../../shared/enums/action-token-type-enum";
import { StatusCodesEnum } from "../../../shared/enums/status-codes.enum";
import { ITokenPair } from "../../../shared/interfaces/token.interface";
import { IUser, IUserSignInDTO } from "../../../shared/interfaces/user.interface";
import { config } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";
import { userService } from "./user.service";

class AuthService {
    public async login(dto: IUserSignInDTO): Promise<ITokenPair> {
        const user = await userRepository.getByEmail(dto.email);
        if (!user) {
            throw new ApiError("Email or password invalid", StatusCodesEnum.UNAUTHORIZED);
        }

        const isValidPassword = await passwordService.comparePassword(dto.password, user.password);

        if (!isValidPassword) {
            throw new ApiError("Invalid email or password", StatusCodesEnum.UNAUTHORIZED);
        }

        if (!user.isActive) {
            throw new ApiError("Account is not verified", StatusCodesEnum.UNAUTHORIZED);
        }

        if (user.isBlocked) {
            throw new ApiError("Account was blocked by admin", StatusCodesEnum.FORBIDDEN);
        }

        if (user.isDeleted) {
            throw new ApiError("Account was deleted", StatusCodesEnum.FORBIDDEN);
        }

        const tokens = tokenService.generateTokens({
            userId: user._id,
            role: user.role,
        });
        await tokenRepository.create({ ...tokens, _userId: user._id });

        return tokens;
    }

    public async setPasswordRequest(user: IUser): Promise<string> {
        const token = tokenService.generateActionToken(
            { userId: user._id, role: user.role },
            ActionTokenTypeEnum.ACTIVATE,
        );
        const url = `${config.FRONTEND_URL}/set-password/${token}`;

        return url;
    }

    public async setPassword(token: string, password: string): Promise<IUser> {
        const { userId } = tokenService.verifyToken(token, ActionTokenTypeEnum.ACTIVATE);
        const hashedPassword = await passwordService.hashPassword(password);

        return await userService.updateById(userId, { password: hashedPassword, isActive: true });
    }
}

export const authService = new AuthService();
