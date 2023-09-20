import express from "express";

import { createNewAiTask } from "../controllers/openaiController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();
// router.use(requireAuth);

router.post("/", createNewAiTask);

export default router;
