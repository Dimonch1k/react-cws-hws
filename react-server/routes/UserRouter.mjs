import express from "express";
import UserController from "../controllers/UserController.mjs";
import auth from "../middleware/auth.mjs";

const userRouter = express.Router();

userRouter.post("/api/register", UserController.register);
userRouter.post("/api/login", UserController.login);

userRouter.get("/api/auth-user", auth, UserController.getAuthUser);

export default userRouter;
