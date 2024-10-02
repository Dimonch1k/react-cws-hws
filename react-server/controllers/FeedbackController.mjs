import Feedback from "../models/Feedback.mjs";

const getAllFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({});
  res.send(feedbacks);
};

const createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    res.send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { getAllFeedbacks, createFeedback, deleteFeedback };
