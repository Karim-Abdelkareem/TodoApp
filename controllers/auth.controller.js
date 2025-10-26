import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const { username, email, password, age } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "You must provide username, email and password",
    });
  }
  let user = await UserModel.create({
    username,
    email,
    password,
    age,
  });
  res.status(201).json({
    message: "success",
    user,
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  let user = await UserModel.findOne({ email });
  let match = await bcrypt.compare(password, user.password);
  if (!user || !match) {
    return res.status(404).json({
      message: "invalid credetials",
    });
  }

  let token = await jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.JWTSECRETKEY,
    {
      expiresIn: "30d",
    }
  );
  //===> 123456 =>safafadf5adf4asd.sgbshggklsfgsfgsskl
  res.status(200).json({
    message: "success",
    token,
  });
}
