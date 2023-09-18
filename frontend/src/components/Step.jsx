import React from "react";

const Step = ({ step }) => {
	const { title, description, icon } = step;

	return (
		<div className="group backdrop-blur-xl bg-[rgba(191,178,178,0.5)] dark:bg-[rgba(1,11,15,0.5)] border border-hovery flex flex-col items-center p-4 pt-8 rounded-lg relative select-none">
			<span
				className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-b from-background border border-hovery group-hover:border-brand 
				via-[rgba(191,178,178,1)] to-[rgba(191,178,178,0.5)] 
				dark:via-[rgba(1,11,15,1)] dark:to-[rgba(1,11,15,0.5)] 
				p-2 rounded-[100px] group-hover:text-brand transition-all duration-300"
			>
				{icon}
			</span>
			<h1 className="text-large group-hover:text-brand transition-all duration-300">
				{title}
			</h1>
			<p className="text-center text-tertiary">{description}</p>
		</div>
	);
};

export default Step;
