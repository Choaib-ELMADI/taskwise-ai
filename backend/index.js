import mongoose from "mongoose";
import express from "express";

import tasksRoutes from "./routes/tasksRoutes.js";
import { PORT, MONGODB_URL } from "./config.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
	return response.status(200).send("Hello, From Server");
});

app.use("/tasks", tasksRoutes);

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
