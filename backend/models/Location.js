import mongoose from "mongoose";

const accessLogSchema = new mongoose.Schema({
  action: { type: String, enum: ["enter", "exit"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  currentCount: { type: Number, default: 0 },
  maxCapacity: { type: Number, default: 100 },
  history: [accessLogSchema],
});

const Place = mongoose.model("Location", placeSchema);

export default Place;
