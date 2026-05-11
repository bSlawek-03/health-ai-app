import express from "express";

import {
  createActivity,
  getActivities,
  deleteActivity,
} from "../controllers/activityController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  createActivity
);

router.get(
  "/",
  authMiddleware,
  getActivities
);

router.delete(
  "/:id",
  authMiddleware,
  deleteActivity
);

export default router;