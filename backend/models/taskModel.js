import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		category: { type: String, required: true },
		priority: { type: String, required: true },
		tags: { type: [String], required: true },
		notes: { type: String, required: true },
		user: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

export const Task = mongoose.model("Task", taskSchema);
