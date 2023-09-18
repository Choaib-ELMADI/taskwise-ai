import React from "react";

const CreateTaskBtn = ({ styles = "" }) => {
	return (
		<div className={`${styles}`}>
			<form className="border border-hovery rounded-[100px] bg-hovery backdrop-blur-md flex items-center justify-between">
				<input
					type="text"
					name="task"
					placeholder="Type your task..."
					className="py-1 pl-4 bg-[transparent] w-full rounded-[100px] outline-none caret-brand placeholder:text-text placeholder:opacity-60"
				/>
				<button className="py-1 px-4 rounded-[100px] bg-brand text-background dark:text-text">
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateTaskBtn;
