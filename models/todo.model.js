// const mongoose = require("mongoose");
import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
    },
    status: {
      type: String,
      enum: ["todo", "inProgress", "completed"],
      default: "todo",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", todoSchema);
export default TodoModel;
