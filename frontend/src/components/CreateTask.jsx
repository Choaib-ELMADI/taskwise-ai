import React from "react";
import { CreateTaskBtn } from "./index";

const CreateTask = ({ setCreated, setCreatedTask }) => {
	return (
		<div className="w-full p-4 py-8 my-8 flex flex-col gap-4 items-center rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full bg-[rgba(189,173,173,0.6)] dark:bg-[rgba(0,0,0,0.4)] clip-path-custom-path -z-10"></div>
			<h1 className="text-xlarge text-center leading-[50px]">
				Create New AI Task
			</h1>
			<CreateTaskBtn
				styles="md:w-[450px]"
				setCreated={setCreated}
				setCreatedTask={setCreatedTask}
			/>
		</div>
	);
};

export default CreateTask;
