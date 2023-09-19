import React from "react";

import { CreateTask, TasksList } from "../components/index";

const Tasks = () => {
	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex-1 min-h-[300px]">
			<CreateTask />
			<TasksList />
		</div>
	);
};

export default Tasks;
