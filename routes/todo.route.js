// const express = require("express");
// const {
//   createTodo,
//   getAllTodos,
//   getTodoById,
//   updateTodo,
//   deleteTodo,
//   getUserTodos,
// } = require("../controllers/todo.controller");

import express from "express";
import {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  getUserTodos,
} from "../controllers/todo.controller.js";
import { portect } from "../middleware/auth.js";

const todoRouter = express.Router();

todoRouter.post("/", portect, createTodo);
todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.patch("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);
todoRouter.get("/user/:id", getUserTodos);

export default todoRouter;
