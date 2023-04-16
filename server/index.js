import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "./models/User.js";

dotenv.config();

const salt = bcrypt.genSaltSync(10);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.listen(8800);
