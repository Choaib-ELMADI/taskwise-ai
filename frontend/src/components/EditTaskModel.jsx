import React, { useState, useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";
import { Loader } from "./index";
const priorities = ["LOW", "MEDIUM", "HIGH"];

const EditTaskModel = ({ _id, setViewEditModel, setRefetching }) => {
	const [priority, setPriority] = useState(null);
	const [isUpdating, setIsUpdating] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isDone, setIsDone] = useState(false);
	const [task, setTask] = useState(null);
	const [notes, setNotes] = useState("");

	const { user } = useAuthContext();

	const handleTaskDone = async () => {
		try {
			setIsDone(true);
			await axios.delete(`http://localhost:5555/tasks/${_id}`, {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			setIsDone(false);
			setViewEditModel(false);
			setRefetching((ref) => !ref);
		} catch (err) {
			console.log(err);
			setIsDone(false);
		}
	};

	const handleEditTask = async () => {
		if (!user) return;

		try {
			setIsUpdating(true);
			await axios.put(
				`http://localhost:5555/tasks/${_id}`,
				{ ...task, notes, priority },
				{ headers: { Authorization: `Bearer ${user.token}` } }
			);
			setIsUpdating(false);
			setViewEditModel(false);
			setRefetching((ref) => !ref);
		} catch (err) {
			console.log(err);
			setIsUpdating(false);
		}
	};

	useEffect(() => {
		const fetchTask = async () => {
			try {
				setLoading(true);
				const data = await axios.get(`http://localhost:5555/tasks/${_id}`, {
					headers: { Authorization: `Bearer ${user.token}` },
				});
				setTask(data.data);
				setNotes(data.data.notes);
				setPriority(data.data.priority);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		};

		fetchTask();
	}, []);

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

		if (!task)
			return (
				<p className="text-medium text-secondary text-center">Task Not Found</p>
			);

		return (
			<>
				<div className="flex items-center gap-2 justify-between pb-2 border-b border-hovery">
					<div className="flex gap-2">
						{task.tags.map((tag) => (
							<span
								key={tag}
								className="bg-hovery rounded-[100px] border border-hovery px-2"
							>
								{tag}
							</span>
						))}
					</div>
					<button
						className="bg-brand rounded-[100px] py-1 px-3 flex items-center gap-1 text-background dark:text-text whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 hover:bg-custom_02 transition-all"
						disabled={isDone || isUpdating}
						onClick={handleTaskDone}
					>
						{isDone ? <Loader /> : <MdOutlineDone size={20} />}
						<span className="hidden xs:block">
							{isDone ? "Done..." : "Mark As Done"}
						</span>
					</button>
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
				<div className="w-full flex items-center justify-end gap-2 mt-4">
					<button
						className={`rounded-[100px] backdrop-blur-[0.1px] border border-hovery py-1 px-4 hover:bg-hovery transition-all select-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
						disabled={isDone || isUpdating}
						onClick={() => setViewEditModel(false)}
					>
						Cancel
					</button>
					<button
						className={`rounded-[100px] py-1 px-4 hover:bg-custom_02 transition-all select-none flex items-center justify-center gap-2 bg-brand text-background dark:text-text disabled:opacity-50 disabled:cursor-not-allowed`}
						disabled={isDone || isUpdating}
						onClick={handleEditTask}
					>
						{isUpdating && <Loader />}
						{isUpdating ? "Submit..." : "Submit"}
					</button>
				</div>
			</>
		);
	};

	return (
		<div
			className={`z-[99] fixed top-0 left-0 w-full h-screen overflow-y-auto p-2 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)] custom-scrollbar grid place-items-center ${
				isDone || isUpdating ? "cursor-not-allowed" : "cursor-pointer"
			}`}
			onClick={() => {
				if (isDone || isUpdating) return;
				setViewEditModel(false);
			}}
		>
			<div
				className="border border-hovery w-full max-w-[600px] p-4 rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] cursor-default"
				onClick={(e) => e.stopPropagation()}
			>
				{renderContent()}
			</div>
		</div>
	);
};

export default EditTaskModel;
