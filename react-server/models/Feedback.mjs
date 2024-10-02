import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rate: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const Feedback = mongoose.model("Feedback", schema);
export default Feedback;
