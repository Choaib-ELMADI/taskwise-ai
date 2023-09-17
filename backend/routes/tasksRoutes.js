import express from "express";

import { requireAuth } from "../middleware/requireAuth.js";
import {
	createTask,
	deleteTask,
	editTask,
	getTasks,
	getTask,
} from "../controllers/tasksController.js";

const router = express.Router();
router.use(requireAuth);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

export default router;
