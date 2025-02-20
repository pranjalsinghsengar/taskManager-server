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

export const MaskUpdateTaskController: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;
  try {
    const userId = await TokenDecoder(token);
    if (!userId) {
      res.status(401).json({ success: false, message: "Invalid token" });
      return;
    }

    const { taskId, status } = req.body;
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: taskId, author: userId.id },
      { status },
      { new: true }
    );

    if (!updatedTask) {
      res.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    res.json({
      success: true,
      message: "Task status updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error in MaskUpdateTaskController:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error });
  }
};

export const UpdateTaskController: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;
  try {
    const userId = await TokenDecoder(token);
    if (!userId) {
      res.status(401).json({ success: false, message: "Invalid token" });
      return;
    }

    const { taskId, title, description, status } = req.body;
    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: taskId, author: userId.id },
      { title, description, status },
      { new: true }
    );

    if (!updatedTask) {
      res.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    res.json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error in UpdateTaskController:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error });
  }
};

export const DeleteTaskController: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1] || req.body.token;
  try {
    const userId = await TokenDecoder(token);
    if (!userId) {
      res.status(401).json({ success: false, message: "Invalid token" });
      return;
    }

    const { taskId } = req.body;
    const deletedTask = await TaskModel.findOneAndDelete({
      _id: taskId,
      author: userId.id,
    });

    if (!deletedTask) {
      res.status(404).json({ success: false, message: "Task not found" });
      return;
    }

    res.json({
      success: true,
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    console.error("Error in DeleteTaskController:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error });
  }
};


