import mongoose from "mongoose";

const UserChoiceSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserChoice", UserChoiceSchema);