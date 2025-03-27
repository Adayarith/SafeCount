import Counter from "../models/Counter.js";
import { sendNotification } from "../utils/emailService.js";

export const getStatus = async (req, res) => {
  const counter = await Counter.findOne();
  res.json(counter || { currentCount: 0, maxCapacity: 100, history: [] });
};

export const getHistory = async (req, res) => {
  const counter = await Counter.findOne();
  res.json(counter ? counter.history : []);
};

export const enterPerson = async (req, res) => {
  let counter = await Counter.findOne();
  if (!counter) counter = new Counter();

  if (counter.currentCount < counter.maxCapacity) {
    counter.currentCount += 1;
    counter.history.push({ action: "enter", timestamp: new Date() });
    await counter.save();
    sendNotification(counter.currentCount, counter.maxCapacity);
    res.json({ message: "Person entered", count: counter.currentCount });
  } else {
    res.status(403).json({ message: "Max capacity reached!" });
  }
};

export const exitPerson = async (req, res) => {
  let counter = await Counter.findOne();
  if (!counter) counter = new Counter();

  if (counter.currentCount > 0) {
    counter.currentCount -= 1;
    counter.history.push({ action: "exit", timestamp: new Date() });
    await counter.save();
    res.json({ message: "Person exited", count: counter.currentCount });
  } else {
    res.status(400).json({ message: "No people inside!" });
  }
};

export const updateMaxCapacity = async (req, res) => {
  const { maxCapacity } = req.body;
  if (!maxCapacity || maxCapacity < 1) {
    return res.status(400).json({ message: "Invalid max capacity" });
  }

  let counter = await Counter.findOne();
  if (!counter) counter = new Counter();

  counter.maxCapacity = maxCapacity;
  await counter.save();
  res.json({ message: "Max capacity updated", maxCapacity });
};
