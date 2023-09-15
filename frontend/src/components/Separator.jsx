import React from "react";

const Separator = ({ hiding }) => {
	return (
		<div
			className={`${
				hiding ? "hidden md:block" : ""
			} mx-2 w-[1px] h-[20px] bg-tertiary`}
		/>
	);
};

export default Separator;
