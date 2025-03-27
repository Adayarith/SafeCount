import Location from "../models/Location.js";
import { sendNotification } from "../utils/emailService.js";
import mongoose from 'mongoose';

// Function to query the history by month
export const getHistoryByMonth = async (req, res) => {
  const { locationId, month, year } = req.params; // e.g. month: 3, year: 2025 (for March 2025)

  try {
    const location = await Location.findById(locationId);

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    // Perform aggregation query to group by month and year
    const historyByMonth = await Location.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(locationId),
        },
      },
      {
        $unwind: '$history',
      },
      {
        $match: {
          'history.timestamp': {
            $gte: new Date(year, month - 1, 1), // start of the month (month is 1-based)
            $lt: new Date(year, month, 1), // start of the next month
          },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$history.timestamp' },
            year: { $year: '$history.timestamp' },
          },
          actions: {
            $push: {
              action: '$history.action',
              timestamp: '$history.timestamp',
            },
          },
        },
      },
    ]);

    if (historyByMonth.length === 0) {
      return res.status(404).json({ message: 'No history found for this month' });
    }

    res.json(historyByMonth);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error querying history by month' });
  }
};


// Get status of a location
export const getStatus = async (req, res) => {
  const { locationId } = req.params;
  const location = await Location.findById(locationId);
  if (!location) return res.status(404).json({ message: "Location not found" });

  res.json(location);
};

// Get history of a location
export const getHistory = async (req, res) => {
  const { locationId } = req.params;
  const location = await Location.findById(locationId);
  if (!location) return res.status(404).json({ message: "Location not found" });

  res.json(location.history);
};

// Create a new location
export const createLocation = async (req, res) => {
  const { name, maxCapacity } = req.body;

  if (!name || !maxCapacity || maxCapacity < 1) {
    return res.status(400).json({ message: "Invalid location data" });
  }

  const existingLocation = await Location.findOne({ name });
  if (existingLocation) return res.status(400).json({ message: "Location already exists" });

  const newLocation = new Location({ name, maxCapacity });
  await newLocation.save();
  res.status(201).json(newLocation);
};

// Person enters a location
export const enterPerson = async (req, res) => {
  const { locationId } = req.params;
  const location = await Location.findById(locationId);

  if (!location) return res.status(404).json({ message: "Location not found" });

  if (location.currentCount < location.maxCapacity) {
    location.currentCount += 1;
    location.history.push({ action: "enter", timestamp: new Date() });
    await location.save();
    sendNotification(location.currentCount, location.maxCapacity);
    res.json({ message: "Person entered", count: location.currentCount });
  } else {
    res.status(403).json({ message: "Max capacity reached!" });
  }
};

// Person exits a location
export const exitPerson = async (req, res) => {
  const { locationId } = req.params;
  const location = await Location.findById(locationId);

  if (!location) return res.status(404).json({ message: "Location not found" });

  if (location.currentCount > 0) {
    location.currentCount -= 1;
    location.history.push({ action: "exit", timestamp: new Date() });
    await location.save();
    res.json({ message: "Person exited", count: location.currentCount });
  } else {
    res.status(400).json({ message: "No people inside!" });
  }
};

// Update max capacity for a location
export const updateMaxCapacity = async (req, res) => {
  const { locationId } = req.params;
  const { maxCapacity } = req.body;

  if (!maxCapacity || maxCapacity < 1) {
    return res.status(400).json({ message: "Invalid max capacity" });
  }

  const location = await Location.findById(locationId);
  if (!location) return res.status(404).json({ message: "Location not found" });

  location.maxCapacity = maxCapacity;
  await location.save();
  res.json({ message: "Max capacity updated", maxCapacity });
};
