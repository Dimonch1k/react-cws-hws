import express from "express";
import cors from "cors";

import postRouter from "./routes/PostRouter.mjs";
import feedbackRouter from "./routes/FeedbackRouter.mjs";
import dbConnection from "./db/index.mjs";
import userRouter from "./routes/UserRouter.mjs";

dbConnection.on("error", () => console.log("MongoDB connection error"));
dbConnection.on("connected", () => console.log("MongoDB connection success"));

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/api/posts", postRouter);
app.use("/api/feedbacks", feedbackRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Start Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
