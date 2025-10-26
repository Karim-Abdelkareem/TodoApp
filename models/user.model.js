// const mongoose = require("mongoose");
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [3, "Username must be longer than 3 char"],
    // required: true,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (value) {
        return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value);
      },
      message: function () {
        return "Enter Valid Email";
      },
    },
  },
  password: String,
  age: Number,
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
