import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";
import { Loader, TaskItem } from "./index";

const TasksList = () => {
	const [reFetching, setRefetching] = useState(false);
	const [loading, setLoading] = useState(true);
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
	}, [user, reFetching]);

	const renderContent = () => {
		if (loading)
			return (
				<div className="flex flex-col items-center gap-4">
					<div className="scale-150">
						<Loader />
					</div>
					<p className="text-medium text-secondary">Loading...</p>
				</div>
			);

		if (tasks.length < 1)
			return <p className="text-medium text-secondary">No tasks yet</p>;

		return (
			<div className="grid grid-cols-1 gap-2 mn:grid-cols-2 dm:grid-cols-3">
				{tasks.map((task) => (
					<TaskItem key={task._id} task={task} setRefetching={setRefetching} />
				))}
			</div>
		);
	};

	return (
		<div className="mb-4">
			<h1 className="text-large mb-4">Task List</h1>
			{renderContent()}
		</div>
	);
};

export default TasksList;
