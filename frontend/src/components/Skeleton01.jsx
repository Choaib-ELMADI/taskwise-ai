import { MdOutlineManageHistory } from "react-icons/md";
import React from "react";

const Skeleton01 = () => {
	return (
		<div className="w-full max-w-[600px] h-[300px] rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery pointer-events-none select-none p-4 flex flex-col">
			<div className="flex gap-2 items-center justify-between border-b border-hovery pb-2">
				<div className="flex gap-2">
					<span className="bg-hovery rounded-[100px] border border-hovery px-1 text-tiny">
						Website
					</span>
					<span className="bg-hovery rounded-[100px] border border-hovery px-1 text-tiny">
						UI/UX
					</span>
				</div>
				<button className="bg-brand rounded-[100px] py-1 px-3 flex items-center gap-1 text-background dark:text-text whitespace-nowrap">
					<MdOutlineManageHistory size={18} />
					Manage tasks
				</button>
			</div>
			<div className="mt-2 mb-4">
				<h1>Home Page</h1>
				<div className="grid grid-cols-2 dm:grid-cols-3 mt-2">
					<div className="flex flex-col gap-1 font-300">
						<p className="text-tertiary text-tiny">Assigned To</p>
						<p className="text-tertiary text-tiny">Status</p>
						<p className="text-tertiary text-tiny">Due</p>
					</div>
					<div className="flex flex-col gap-1 font-300">
						<p className="text-tertiary text-tiny">Choaib ELMADI</p>
						<p className="bg-[#e78c24] text-background dark:text-text text-tiny w-max rounded-[100px] px-2">
							PENDING
						</p>
						<p className="text-[#f93535] text-tiny">17 Sept 2023</p>
					</div>
				</div>
			</div>
			<div className="w-full h-full border border-hovery rounded-lg py-1 pl-2 text-tertiary">
				Add tasks, type notes and edit...
			</div>
		</div>
	);
};

export default Skeleton01;
