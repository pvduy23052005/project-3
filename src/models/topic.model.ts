import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  description: String,
  status: {
    type: String,
    default: "active",
  },
  slug: {
    type: String,
    unique: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: Date,
}, {
  timestamps: true,
})

const Topic = mongoose.model("Topic", topicSchema, "topic");

export default Topic; 