import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  res.json({ requestData: { username, email, password } });
});

app.listen(8800);
