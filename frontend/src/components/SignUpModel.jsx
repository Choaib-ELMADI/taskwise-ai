import React, { useContext } from "react";
import { motion } from "framer-motion";

import { SignUpModelContext } from "../context/SignUpModelContext";

const SignUpModel = () => {
	const { toggleModel } = useContext(SignUpModelContext);

	return (
		<div
			className="z-50 fixed top-0 left-0 w-full h-full overflow-y-auto py-8 backdrop-blur-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer custom-scrollbar"
			onClick={() => toggleModel()}
		>
			<motion.div
				className="rounded-lg bg-hovery backdrop-blur-sm border border-hovery w-[calc(100%-1rem)] max-w-[500px] cursor-default relative"
				onClick={(e) => e.stopPropagation()}
				initial={{ rotateZ: -10, opacity: 0, y: "0rem" }}
				animate={{ rotateZ: 0, opacity: 1 }}
			>
				<button onClick={() => toggleModel()}>Cancel</button>
			</motion.div>
		</div>
	);
};

export default SignUpModel;
