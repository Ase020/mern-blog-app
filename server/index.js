import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "./models/User.js";

dotenv.config();

const salt = bcrypt.genSaltSync(10);
const secret = "someRandomString";

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await User.findOne({ username: username });
  const checkedPassword = bcrypt.compareSync(password, userDoc.password);

  if (checkedPassword) {
    // User logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (error, token) => {
      if (error) throw error;
      res.cookie("token", token).json("OK");
    });
  } else {
    res.status(400).json("Wrong username/password!");
  }
  //   res.json(checkedPassword);
});

// check if user is logged in
app.get("/profile", (req, res) => {
  res.json(req.cookies);
});

app.listen(8800);
