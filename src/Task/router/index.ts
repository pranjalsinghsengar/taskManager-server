import { Router } from "express";
import { CreateTaskController, TaskListController } from "../controller";
import { JWT_Validation } from "../../middleware/jwtValidation";

const taskRouter = Router()

taskRouter.post("/create", JWT_Validation, CreateTaskController)
taskRouter.get("/list", JWT_Validation, TaskListController)


export default taskRouter