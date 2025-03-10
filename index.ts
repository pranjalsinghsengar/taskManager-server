import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { MongooseConnect } from "./src/db";
import userRouter from "./src/User/router";
import dotenv from "dotenv";
import taskRouter from "./src/Task/router";
import cors from "cors"
// import Task from "./Task/models";

const app = express();
dotenv.config();

MongooseConnect()
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));


app.get("/", (req: Request, res: Response) => {
  res.json({message:"working"});
});


app.use("/user", userRouter)
app.use("/task", taskRouter)


app.listen(PORT, async () => {
      console.log(`Server is running on PORT http://localhost:${PORT}`);
});
