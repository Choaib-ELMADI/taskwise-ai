import express from "express";

import {
	createTask,
	getTasks,
	getTask,
	editTask,
	deleteTask,
} from "../controllers/tasksController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

export default router;
