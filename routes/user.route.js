// const express = require("express");
// const fs = require("fs");
// const {
//   getAllUsers,
//   createUser,
//   getUserById,
//   updateUser,
//   deleteUser,
// } = require("../controllers/user.controller");

import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/", createUser);

userRouter.get("/:id", getUserById);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
