import { Task } from "../models/taskModel.js";

export const createTask = async (request, response) => {
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
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};

export const getTasks = async (request, response) => {
	try {
		const tasks = await Task.find({});
		return response.status(200).json({
			count: tasks.length,
			data: tasks,
		});
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};

export const getTask = async (request, response) => {
	try {
		const { id } = request.params;

		const task = await Task.findById(id);
		return response.status(200).json(task);
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};

export const editTask = async (request, response) => {
	try {
		const {
			body: { title, description, priority, user },
			params: { id },
		} = request;

		if (!title || !description || !priority || !user) {
			return response.status(400).send({ message: "Missing required data" });
		}

		const updatedTask = await Task.findByIdAndUpdate(id, request.body);
		if (!updatedTask) {
			return response.status(404).json({ message: "Task to update not found" });
		}

		return response.status(200).send({ message: "Task updated successfully" });
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};

export const deleteTask = async (request, response) => {
	try {
		const { id } = request.params;

		const taskToDelete = await Task.findByIdAndDelete(id);
		if (!taskToDelete) {
			return response.status(404).json({ message: "Task to delete not found" });
		}
		return response.status(200).json({ message: "Task deleted successfully" });
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};
