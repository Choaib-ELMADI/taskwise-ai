import { AiOutlineSave, AiFillPlusCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";

const Skeleton02 = () => {
	return (
		<div
			className="w-full xs:max-w-[300px] h-[140px] rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery pointer-events-none select-none p-4 
                dm:absolute dm:left-0 dm:translate-x-[-30%] dm:bottom-0 dm:translate-y-[60%] mx-auto md:mx-0 translate-y-[-60px] md:translate-y-0 flex flex-col"
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
				<span className="text-[#e78c24] font-[400] text-tiny">LOW</span>
				<AiFillPlusCircle size={18} fill="#9a0eb3" />
			</div>
		</div>
	);
};

export default Skeleton02;
