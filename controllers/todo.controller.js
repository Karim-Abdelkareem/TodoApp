// const TodoModel = require("../models/todo.model");
import TodoModel from "../models/todo.model.js";

async function createTodo(req, res) {
  try {
    console.log(req.user);

    let { name, status } = req.body;

    let todo = await TodoModel.create({
      name,
      status,
      user: req.user.id,
    });
    res.status(201).json({
      message: "success",
      todo,
    });
  } catch (err) {
    res.status(500).json({
      message: "fail",
      error: err.message,
    });
  }
}

async function getAllTodos(req, res) {
  let todos = await TodoModel.find().populate(
    "user",
    "-password -_id -__v -age"
  );
  res.status(200).json({
    message: "success",
    todos,
  });
}

async function getTodoById(req, res) {
  let id = req.params.id;
  let todo = await TodoModel.findById(id).populate(
    "user",
    "-_id -password -__v"
  );
  res.status(200).json({
    message: "success",
    todo,
  });
}

async function updateTodo(req, res) {
  let id = req.params.id;
  let newTodo = await TodoModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "success",
    todo: newTodo,
  });
}

async function deleteTodo(req, res) {
  let id = req.params.id;
  await TodoModel.findByIdAndDelete(id);
  res.status(204).json({});
}

async function getUserTodos(req, res) {
  let userId = req.params.id;
  let todos = await TodoModel.find({ user: userId }).populate("user");
  res.status(200).json({
    message: "success",
    todos,
  });
}

export {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  getUserTodos,
};
