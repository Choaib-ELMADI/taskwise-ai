import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const Tasks = () => {
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get("http://localhost:5555/tasks")
			.then((res) => {
				setTasks(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log("Error fetching data: ", err.message);
				setLoading(false);
			});
	}, []);

	const renderContent = () => {
		if (loading) return <p>Loading...</p>;

		if (tasks.length < 1) return <p>No tasks yet</p>;

		return tasks.map((task) => (
			<div key={task._id} className="mb-2">
				<h1 className="font-bold">{task.title}</h1>
				<p>{task.description}</p>
			</div>
		));
	};

	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px]">
			<h1>Tasks</h1>
			{renderContent()}
		</div>
	);
};

export default Tasks;
