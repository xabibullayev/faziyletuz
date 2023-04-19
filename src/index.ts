import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter";
import categoryRouter from "./routes/categoryRouter";
import postRouter from "./routes/postRouter";
import imageRouter from "./routes/imageRouter";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/public", express.static("public"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//connecting mongoose
let mongoUrl = process.env.MONGO_URL;

try {
  mongoose.set("strictQuery", false);
  if (!mongoUrl) {
    throw new Error("Connection string is required!");
  }
  mongoose.connect(mongoUrl);
  console.log("MongoDB connected...");
} catch (err) {
  const message = err instanceof Error ? err.message : "Unknown error!";
  console.log(message);
}

// routes
app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/posts", postRouter);
app.use("/images", imageRouter);

//listen specific port
app.listen(5000, () =>
  console.log("Server is running on port http://localhost:5000...")
);
