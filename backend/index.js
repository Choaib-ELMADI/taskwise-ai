import mongoose from "mongoose";
import express from "express";

import { PORT, MONGODB_URL } from "./config.js";

const app = express();

app.get("/", (request, response) => {
	return response.status(200).send("Hello, From Server");
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
