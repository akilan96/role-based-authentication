import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import { userRouter } from "./router/user.router.js";
 
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter)

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Your server running on ${process.env.PORT}`);
});
