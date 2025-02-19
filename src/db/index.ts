import mongoose from "mongoose";

export const MongooseConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://pranjalsinghsengar:pranjalsinghsengar@cluster0.yoqhi.mongodb.net/Task-Manager?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};