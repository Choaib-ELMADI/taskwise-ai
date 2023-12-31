import { AiOutlineSave, AiFillPlusCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";

const Skeleton02 = ({ styles = "" }) => {
	return (
		<div
			className={`w-full xs:max-w-[300px] h-[140px] rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery pointer-events-none select-none p-4 
            ${styles} flex flex-col`}
		>
			<div className="flex gap-2 items-center justify-between mb-2">
				<div className="flex gap-2">
					<span className="bg-hovery rounded-[100px] border border-hovery px-1 text-tiny">
						Backend
					</span>
					<span className="bg-hovery rounded-[100px] border border-hovery px-1 text-tiny">
						API
					</span>
				</div>
				<BiDotsVerticalRounded size={24} />
			</div>
			<p className="flex items-center gap-1 text-tiny text-tertiary mb-1">
				<AiOutlineSave size={20} /> 10/09/2023
			</p>
			<h1>User Search</h1>
			<div className="flex gap-2 items-center justify-between mt-auto">
				<span className="text-orange font-[400] text-tiny">LOW</span>
				<AiFillPlusCircle size={19} fill="var(--purple)" />
			</div>
		</div>
	);
};

export default Skeleton02;
