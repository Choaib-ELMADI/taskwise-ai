import mongoose from "mongoose";
import express from "express";

import { PORT, MONGODB_URL } from "./config.js";
import { Task } from "./models/taskModel.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
	return response.status(200).send("Hello, From Server");
});

app.post("/tasks", async (request, response) => {
	try {
		const {
			body: { title, description, priority, user },
		} = request;

		if (!title || !description || !priority || !user) {
			return response.status(400).send({ message: "Missing required data" });
		}

		const newTask = { title, description, priority, user };
		const task = await Task.create(newTask);
		return response.status(201).send(task);
	} catch (err) {
		console.log(err.message);
		return response.status(500).send({ message: err.message });
	}
});

mongoose
	.connect(MONGODB_URL)
	.then(() => {
		console.log("Connected to db");
		app.listen(PORT, () => {
			console.log(`App listening at port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
