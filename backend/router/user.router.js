import express from "express"
import {  login, logout, profile, about,register } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/isAdmin.js";
import { refreshToken } from "../utils/refreshToken.js";

export const userRouter = express.Router();

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/about",authMiddleware,about)
userRouter.get("/profile",authMiddleware,isAdmin,profile)
userRouter.get("/refresh-token",refreshToken)
userRouter.get("/logout",logout)