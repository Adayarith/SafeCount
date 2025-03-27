import express from "express";
import {
  getStatus,
  getHistory,
  enterPerson,
  exitPerson,
  updateMaxCapacity,
} from "../controllers/counterController.js";

const router = express.Router();

router.get("/status", getStatus);
router.get("/history", getHistory);
router.post("/enter", enterPerson);
router.post("/exit", exitPerson);
router.put("/config", updateMaxCapacity);

export default router;
