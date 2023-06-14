import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { USER_ROLES } from "../models/User";

dotenv.config()

export interface TokenPayloadSignup {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
}


export class TokenManagerUser {
    public createTokenSignup = (payload: TokenPayloadSignup) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
        return token
    }

    public createTokenLogin = (payload: TokenPayloadSignup) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
        return token
    }
}