import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({

  steps: {
    type: Number,
    required: true,
  },

  calories: {
    type: Number,
    required: true,
  },

  heartRate: {
    type: Number,
    required: true,
  },

  workout: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

}, {
  timestamps: true,
});

export default mongoose.model(
  "Activity",
  activitySchema
);