import { RequestHandler } from "express";
import TaskModel from "../models";
import { TokenDecoder } from "../helper/tokenDecoder";

export const CreateTaskController: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;
  try {
    const { title, description, status } = req.body;

    const userId = await TokenDecoder(token);
    if (!userId) {
      res.status(401).json({ success: false, message: "Invalid token" });
      return;
    }

    const newTask = new TaskModel({
      title,
      description,
      status,
      author:userId.id
    });
    await newTask.save();
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Error in CreateTaskController:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error });
  }
};

export const TaskListController: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;
  try {
    const userId = await TokenDecoder(token);
    if (!userId) {
      res.status(401).json({ success: false, message: "Invalid token" });
      return;
    }
    const matchedTasks = await TaskModel.find({ author: userId.id });
    res.json({ success: true, tasks: matchedTasks });
  } catch (error) {
    console.error("Error in CreateTaskController:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error });
  }
};
