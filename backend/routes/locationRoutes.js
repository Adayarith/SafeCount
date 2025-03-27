import express from "express";
import {
  getStatus,
  getHistory,
  createLocation,
  enterPerson,
  exitPerson,
  updateMaxCapacity,
  getHistoryByMonth
} from "../controllers/locationController.js";

const router = express.Router();

router.post("/location", createLocation); // Create a new location
router.get("/location/:locationId/status", getStatus); // Get status of a location
router.get("/location/:locationId/history", getHistory); // Get history of a location
router.post("/location/:locationId/enter", enterPerson); // Register an entry
router.post("/location/:locationId/exit", exitPerson); // Register an exit
router.put("/location/:locationId/config", updateMaxCapacity); // Update max capacity
router.get('/location/:locationId/history/:month/:year', getHistoryByMonth);


export default router;
