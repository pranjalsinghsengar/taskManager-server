import { Router } from "express";
import { LoginController, RegisterController } from "../controller";
import { ValidateToken } from "../controller/validate";

const userRouter = Router();

userRouter.post("/login", LoginController);
userRouter.post("/register", RegisterController);
userRouter.post("/verifyToken", ValidateToken);

export default userRouter;
