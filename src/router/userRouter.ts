import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../database/UserDatabase"
import { IdGenerator } from "../services/idGenerator"
import { TokenManagerUser } from "../services/TokenManager"

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new TokenManagerUser()
    )
)

userRouter.get("/", userController.getUsers)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)