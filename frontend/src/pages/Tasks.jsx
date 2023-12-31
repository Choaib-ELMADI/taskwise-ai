import React, { useState, useEffect } from "react";

import { CreateTask, CreatedTaskModel, TasksList } from "../components/index";

const Tasks = () => {
	const [createdTask, setCreatedTask] = useState(null);
	const [reFetching, setRefetching] = useState(false);
	const [created, setCreated] = useState(false);

	useEffect(() => {
		if (created) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [created]);

	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex-1 min-h-[300px]">
			<CreateTask setCreated={setCreated} setCreatedTask={setCreatedTask} />
			<TasksList reFetching={reFetching} setRefetching={setRefetching} />

			{created && (
				<CreatedTaskModel
					task={createdTask}
					setCreated={setCreated}
					setRefetching={setRefetching}
				/>
			)}
		</div>
	);
};

export default Tasks;
