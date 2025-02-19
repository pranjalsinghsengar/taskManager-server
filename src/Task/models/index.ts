import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
