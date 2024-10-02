import Post from "../models/Post.mjs";

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send({ message: "Post not found" });

    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    ).lean();
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const { feedback } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.feedback = post.feedback || [];
    post.feedback.push(feedback);
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getPost,
  updateFeedback,
};
