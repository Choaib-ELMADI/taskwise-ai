import React, { useState } from "react";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";
import { Loader } from "./index";
const priorities = ["LOW", "MEDIUM", "HIGH"];

const CreatedTaskModel = ({ task, setCreated, setRefetching }) => {
	const [priority, setPriority] = useState(task.priority);
	const [isSaving, setIsSaving] = useState(false);
	const [notes, setNotes] = useState(task.notes);
	const [error, setError] = useState(null);

	const { user } = useAuthContext();

	const handleSaveTask = async () => {
		if (!user) return;
		setError(null);

		try {
			setIsSaving(true);
			await axios.post(
				"https://taskwise-ai-backend.vercel.app/tasks",
				{ ...task, notes, priority },
				{
					headers: { Authorization: `Bearer ${user.token}` },
				}
			);
			setIsSaving(false);
			setCreated(false);
			setRefetching((ref) => !ref);
		} catch (err) {
			console.log(err);
			setError(err);
			setIsSaving(false);
		}
	};

	return (
		<div
			className={`z-[99] fixed top-0 left-0 w-full h-screen overflow-y-auto p-2 bg-[rgba(215,204,204,0.95)] dark:bg-[rgba(26,25,25,0.95)] custom-scrollbar grid place-items-center`}
		>
			<div className="border border-hovery w-full max-w-[600px] p-4 rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] cursor-default">
				<div className="flex gap-2 pb-2 border-b border-hovery">
					{task.tags.map((tag) => (
						<span
							key={tag}
							className="bg-hovery rounded-[100px] border border-hovery px-2"
						>
							{tag}
						</span>
					))}
				</div>
				<h1 className="my-4 text-large font-[400]">{task.title}</h1>
				<p className="text-secondary">Description</p>
				<p className="text-tertiary ml-4 mb-4">- {task.description}</p>
				<p className="text-secondary">Priority</p>
				<div className="mb-4 flex items-center gap-2">
					{priorities.map((p) => (
						<button
							onClick={() => setPriority(p)}
							className={`uppercase text-background dark:text-text py-[2px] px-2 rounded-[100px] text-tiny max-w-max ${
								p.toUpperCase() === "LOW"
									? "bg-orange"
									: p.toUpperCase() === "MEDIUM"
									? "bg-green"
									: "bg-red"
							} ${p === priority ? "opacity-100" : "opacity-30"}`}
						>
							{p}
						</button>
					))}
				</div>
				<p className="text-secondary">Category</p>
				<p className="bg-hovery rounded-[100px] border border-hovery py-[2px] px-2 max-w-max mb-4">
					{task.category}
				</p>
				<p className="text-secondary text-medium mt-2">Notes</p>
				<textarea
					name="notes"
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
					className="outline-none border border-hovery bg-hovery backdrop-blur-lg rounded-lg pl-4 py-2 w-full h-[80px] resize-none placeholder:text-text placeholder:opacity-60 custom-scrollbar"
					placeholder="Type Notes For The Task..."
				/>
				{error && <p className="text-red mt-2">* {error}</p>}
				<div className="w-full flex items-center justify-end gap-2 mt-4">
					<button
						className={`rounded-[100px] backdrop-blur-[0.1px] border border-hovery py-1 px-4 hover:bg-hovery transition-all select-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
						disabled={isSaving}
						onClick={() => setCreated(false)}
					>
						Cancel
					</button>
					<button
						className={`rounded-[100px] py-1 px-4 hover:bg-custom_02 transition-all select-none flex items-center justify-center gap-2 bg-brand text-background dark:text-text disabled:opacity-50 disabled:cursor-not-allowed`}
						disabled={isSaving}
						onClick={() => handleSaveTask()}
					>
						{isSaving && <Loader />}
						{isSaving ? "Saving..." : "Save"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreatedTaskModel;
