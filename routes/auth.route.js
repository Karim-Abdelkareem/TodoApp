import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;

