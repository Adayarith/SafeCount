import mongoose from "mongoose";

const accessLogSchema = new mongoose.Schema({
  action: { type: String, enum: ["enter", "exit"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const counterSchema = new mongoose.Schema({
  currentCount: { type: Number, default: 0 },
  maxCapacity: { type: Number, default: 100 },
  history: [accessLogSchema],
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
