// const fs = require("fs");
// const UserModel = require("../models/user.model");
import UserModel from "../models/user.model.js";
async function getAllUsers(req, res) {
  //   res.send("Hello Express 1");
  //
  let users = await UserModel.find();
  res.status(200).json({
    message: "success",
    users,
  });
}

async function createUser(req, res) {
  //   const { username, email, password } = req.body;
  //   fs.readFile("./users.json", "utf-8", (err, data) => {
  //     data = JSON.parse(data);
  //     data.push({ id: data.length + 1, ...req.body });
  //     fs.writeFile("./users.json", JSON.stringify(data), () => {
  //       res.status(201).json({
  //         message: "success",
  //         data,
  //       });
  //     });
  //   });
  try {
    let user = await UserModel.create(req.body);
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: "fail",
      error: err.message,
    });
  }
}

async function getUserById(req, res) {
  //   console.log(req.params.id);
  let id = req.params.id;
  //   fs.readFile("./users.json", "utf-8", (err, data) => {
  //     data = JSON.parse(data);
  //     let user = data.find((user) => {
  //       return user.id == id;
  //     });
  //     res.json({
  //       user,
  //     });
  //   });
  let user = await UserModel.findById(id);
  res.status(200).json({
    message: "success",
    user,
  });
}

async function updateUser(req, res) {
  let id = req.params.id;
  //   const { email, username, password } = req.body;
  //   fs.readFile("./users.json", "utf-8", (err, data) => {
  //     data = JSON.parse(data);
  //     let user = data.find((user) => {
  //       return user.id == id;
  //     });
  //     user.password = password;
  //     console.log(data);
  //     fs.writeFile("./users.json", JSON.stringify(data), () => {
  //       res.json({
  //         data,
  //       });
  //     });
  //   });
  let newUser = await UserModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "success",
    user: newUser,
  });
}

async function deleteUser(req, res) {
  let id = req.params.id;
  //   fs.readFile("./users.json", "utf-8", (err, data) => {
  //     data = JSON.parse(data);
  //     data = data.filter((user) => {
  //       return user.id != id;
  //     });
  //     fs.writeFile("./users.json", JSON.stringify(data), () => {
  //       res.status(204).json({
  //         message: "Deleted",
  //         data,
  //       });
  //     });
  //   });
  await UserModel.findByIdAndDelete(id);
  res.status(204).json({});
}

export { getAllUsers, createUser, getUserById, updateUser, deleteUser };
