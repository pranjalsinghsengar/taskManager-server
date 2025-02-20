import { Router } from "express";
import { LoginController, RegisterController } from "../controller";
import { ValidateToken } from "../controller/validate";
import { validateLogin, validateRegister } from "../middleware/joiValidation";

const userRouter = Router();

userRouter.post("/login", validateLogin, LoginController);
userRouter.post("/register",validateRegister, RegisterController);
userRouter.post("/verifyToken", ValidateToken);

export default userRouter;