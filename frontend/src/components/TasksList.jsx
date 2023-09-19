import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

const TasksList = () => {
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState([]);
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchTasks = () => {
			setLoading(true);
			axios
				.get("http://localhost:5555/tasks", {
					headers: { Authorization: `Bearer ${user.token}` },
				})
				.then((res) => {
					setTasks(res.data.data);
					setLoading(false);
				})
				.catch((err) => {
					console.log("Error fetching data: ", err.message);
					setLoading(false);
				});
		};

		if (user) {
			fetchTasks();
		}
	}, [user]);

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
		<>
			<h1>Tasks</h1>
			{renderContent()}
		</>
	);
};

export default TasksList;
