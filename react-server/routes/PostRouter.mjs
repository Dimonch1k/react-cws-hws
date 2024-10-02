import express from "express";
import PostController from "../controllers/PostControllers.mjs";

const postRouter = express.Router();

postRouter.get("/", PostController.getAllPosts);
postRouter.get("/:id", PostController.getPost);
postRouter.post("/", PostController.createPost);
postRouter.delete("/:id", PostController.deletePost);
postRouter.put("/:id", PostController.updatePost);
postRouter.put("/:id/feedback", PostController.updateFeedback);

export default postRouter;
