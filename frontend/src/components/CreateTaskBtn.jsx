import React, { useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";
import { Loader } from "./index";

const CreateTaskBtn = ({ styles = "", setCreatedTask, setCreated }) => {
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState("");

	const { user } = useAuthContext();

	const createNewTask = async (e) => {
		e.preventDefault();

		if (!user) return;

		try {
			setLoading(true);
			const data = await axios.post(
				"https://taskwise-ai-backend.vercel.app/gpt",
				{ title: prompt },
				{
					headers: { Authorization: `Bearer ${user.token}` },
				}
			);
			const json = await JSON.parse(data.data.task);
			setCreatedTask(json);
			setPrompt("");
			setLoading(false);
			setCreated(true);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	return (
		<div className={`${styles}`}>
			<form
				className="border border-hovery rounded-[100px] bg-hovery backdrop-blur-md flex items-center justify-between"
				onSubmit={createNewTask}
			>
				<input
					type="text"
					name="prompt"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					placeholder="Type your task..."
					className="py-1 pl-4 bg-[transparent] w-full rounded-l-[100px] outline-none caret-brand placeholder:text-text placeholder:opacity-60"
				/>
				<button
					className="py-1 px-4 rounded-[100px] bg-brand text-background hover:bg-custom_02 transition-all dark:text-text disabled:cursor-not-allowed flex items-center gap-2"
					type="submit"
					disabled={
						prompt.split("").filter((l) => l != " ").length < 1 ||
						prompt.length < 3 ||
						loading
					}
				>
					{loading && <Loader />}
					{loading ? "Creating..." : "Create"}
				</button>
			</form>
		</div>
	);
};

export default CreateTaskBtn;
