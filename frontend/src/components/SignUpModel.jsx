import React, { useContext, useState } from "react";
import { motion } from "framer-motion";

import { SignUpModelContext } from "../context/SignUpModelContext";

const SignUpModel = () => {
	const [userData, setUserData] = useState({ email: "", password: "" });
	const [actionType, setActionType] = useState("signup");
	const { toggleModel } = useContext(SignUpModelContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div
			className="z-50 fixed top-0 left-0 w-full h-full overflow-y-auto py-8 backdrop-blur-[1px] bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer custom-scrollbar"
			onClick={() => toggleModel()}
		>
			<motion.div
				className="rounded-lg bg-hovery backdrop-blur-sm border border-hovery w-[calc(100%-1rem)] max-w-[500px] cursor-default relative p-4"
				onClick={(e) => e.stopPropagation()}
				initial={{ rotateZ: -10, opacity: 0, y: "0rem" }}
				animate={{ rotateZ: 0, opacity: 1 }}
			>
				<div
					className={`w-full border-b border-hovery flex items-center justify-center mb-6 relative after:absolute after:bottom-[-1px] after:w-[100px] after:h-[1px] after:bg-brand after:transition-all after:-translate-x-[50%] ${
						actionType === "signup"
							? "after:left-[calc(50%-50px)]"
							: "after:left-[calc(50%+50px)]"
					}`}
				>
					<button
						onClick={() => setActionType("signup")}
						className={`${
							actionType === "signup" ? "text-brand" : ""
						} pb-2 w-[100px] text-center`}
					>
						Sign Up
					</button>
					<button
						onClick={() => setActionType("login")}
						className={` ${
							actionType === "login" ? "text-brand" : ""
						} pb-2 w-[100px] text-center`}
					>
						Log In
					</button>
				</div>
				<form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="border border-hovery outline-none py-1 pl-4 bg-[transparent] rounded-md placeholder:text-text placeholder:opacity-60"
						value={userData.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="border border-hovery outline-none py-1 pl-4 bg-[transparent] rounded-md placeholder:text-text placeholder:opacity-60 mt-2"
						value={userData.password}
						onChange={handleChange}
					/>
					<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 mt-4">
						<div
							onClick={() => toggleModel()}
							className="text-center rounded-md backdrop-blur-[0.1px] border border-hovery py-1 cursor-pointer hover:bg-hovery transition-all select-none"
						>
							Cancel
						</div>
						<button
							type="submit"
							className="text-center rounded-md bg-brand py-1 text-background dark:text-text hover:bg-custom_02 transition-all duration-300 select-none"
						>
							{actionType === "signup" ? "Sign Up" : "Log In"}
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default SignUpModel;
