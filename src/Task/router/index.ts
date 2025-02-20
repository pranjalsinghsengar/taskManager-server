import { Router } from "express";
import {
  CreateTaskController,
  TaskListController,
  DeleteTaskController,
  UpdateTaskController,
  MaskUpdateTaskController,
} from "../controller";
import { JWT_Validation } from "../../middleware/jwtValidation";

const taskRouter = Router();

taskRouter.post("/create", JWT_Validation, CreateTaskController);
taskRouter.get("/list", JWT_Validation, TaskListController);
taskRouter.get("/update/status", JWT_Validation, MaskUpdateTaskController);
taskRouter.get("/update", JWT_Validation, UpdateTaskController);
taskRouter.get("/update", JWT_Validation, DeleteTaskController);

export default taskRouter;
