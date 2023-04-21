import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs";

import User from "./models/User.js";
import Post from "./models/Post.js";

import fileDirName from "./file-dir-name.js";

const { __dirname, __filename } = fileDirName(import.meta);

dotenv.config();

const salt = bcrypt.genSaltSync(10);
const secret = "someRandomString";
const uploadMiddleware = multer({ dest: "uploads/" });

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static("uploads"));
app.use("/uploads", express.static(__dirname + "/uploads"));

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
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("Wrong username/password!");
  }
  //   res.json(checkedPassword);
});

// check if user is logged in
app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, secret, {}, (error, loginInfo) => {
    if (error) throw error;
    res.json(loginInfo);
  });
});

// Logout
app.post("/logout", (req, res) => {
  res.cookie("token", "", {}).json({ message: "ok" });
});

// create post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const fileParts = originalname.split(".");
  const ext = fileParts[fileParts.length - 1];
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (error, loginInfo) => {
    if (error) throw error;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: loginInfo.id,
    });
    res.json(postDoc);
  });
});

// get post
app.get("/post", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(posts);
});

app.listen(8800, () => {
  console.log("Server running");
});
