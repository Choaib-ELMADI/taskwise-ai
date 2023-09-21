import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import tasksRoutes from "./routes/tasksRoutes.js";
import openaiRoute from "./routes/openaiRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const { MONGODB_URI, PORT } = process.env;

const app = express();

app.use(express.json());
/*
app.use(
	cors({
		origin: ["https://taskwise-ai.vercel.app"],
		methods: ["POST", "GET", "DELETE", "PUT"],
		credentials: true,
	})
);
*/

app.get("/", (request, response) => {
	return response.status(200).send("Hello, From Server");
});

app.use("/tasks", tasksRoutes);
app.use("/user", userRoutes);
app.use("/gpt", openaiRoute);

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("Connected to db");
		app.listen(PORT, () => {
			console.log(`App listening at port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
