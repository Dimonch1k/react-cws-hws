import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: { type: String, required: true },
  feedback: [],
});

const Post = mongoose.model("Post", schema);
export default Post;
