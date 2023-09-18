import { IoCreateOutline, IoTimerOutline } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import React from "react";

import { Step } from "./index";

const steps = [
	{
		title: "Step 1",
		description: "Type a task into the text box.",
		icon: <IoCreateOutline size={26} />,
	},
	{
		title: "Step 2",
		description:
			"Watch TaskWise.ai whip up an incredibly intelligent solution.",
		icon: <IoTimerOutline size={26} />,
	},
	{
		title: "Step 3",
		description: "Complete the task and get back to your day.",
		icon: <GoVerified size={26} />,
	},
];

const TaskSteps = () => {
	return (
		<div className="mt-12 xs:mt-1 md:mt-16 dm:mt-4 flex flex-col items-center mb-24">
			<h1 className="text-xlarge relative after:absolute after:right-0 after:bottom-[4px] after:content-[''] after:w-16 after:h-1 after:rounded-r-sm after:bg-gradient-to-r from-[transparent] via-custom_02 to-brand mb-8">
				Easy to use
			</h1>
			<div className="grid gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 dm:grid-cols-3 w-full">
				{steps.map((step) => (
					<Step step={step} key={step.title} />
				))}
			</div>
		</div>
	);
};

export default TaskSteps;
