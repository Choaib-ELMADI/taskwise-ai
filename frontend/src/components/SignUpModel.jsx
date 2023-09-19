import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { motion } from "framer-motion";

import { SignUpModelContext } from "../context/SignUpModelContext";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import { Loader } from "./index";

const SignUpModel = () => {
	const [userData, setUserData] = useState({ email: "", password: "" });
	const [inputType, setInputType] = useState("password");
	const [actionType, setActionType] = useState("signup");

	const { toggleModel } = useContext(SignUpModelContext);
	const {
		signupError,
		isSignupLoading,

		signup,
		setSignupError,
		setIsSignupLoading,
	} = useSignup();
	const {
		loginError,
		isLoginLoading,

		login,
		setLoginError,
		setIsLoginLoading,
	} = useLogin();

	const handleActionType = (type) => {
		if (type === "signup") {
			setIsLoginLoading(false);
			setLoginError(null);
		} else {
			setIsSignupLoading(false);
			setSignupError(null);
		}

		setActionType(type);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (actionType === "signup") {
			await signup(userData.email, userData.password);
		} else {
			await login(userData.email, userData.password);
		}
	};

	return (
		<div
			className={`z-[999] fixed top-0 left-0 w-full h-screen overflow-y-auto py-8 bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)] flex items-center justify-center custom-scrollbar 
			${isSignupLoading || isLoginLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
			onClick={() => {
				if (isSignupLoading || isLoginLoading) return;
				toggleModel();
			}}
		>
			<motion.div
				className="rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery w-[calc(100%-1rem)] max-w-[500px] cursor-default relative p-4"
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
						onClick={() => handleActionType("signup")}
						className={`${
							actionType === "signup" ? "text-brand" : ""
						} pb-2 w-[100px] text-center select-none`}
					>
						Sign Up
					</button>
					<button
						onClick={() => handleActionType("login")}
						className={` ${
							actionType === "login" ? "text-brand" : ""
						} pb-2 w-[100px] text-center select-none`}
					>
						Log In
					</button>
				</div>

				<form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						required
						placeholder="Email"
						className="border border-hovery outline-none py-1 pl-4 bg-[transparent] rounded-md placeholder:text-text placeholder:opacity-60"
						value={userData.email}
						onChange={handleChange}
					/>
					<div className="w-full relative">
						<input
							type={inputType}
							name="password"
							required
							placeholder="Password"
							className="w-full border border-hovery outline-none py-1 pl-4 bg-[transparent] rounded-md placeholder:text-text placeholder:opacity-60 mt-2"
							value={userData.password}
							onChange={handleChange}
						/>
						<span
							className="absolute top-[50%] translate-y-[-5px] right-3 cursor-pointer"
							onClick={() =>
								setInputType(inputType === "password" ? "text" : "password")
							}
						>
							{inputType === "password" ? (
								<FiEye size={18} />
							) : (
								<FiEyeOff size={18} />
							)}
						</span>
					</div>
					{(signupError || loginError) && (
						<p className="text-[#ff4141] font-kanit">
							* {signupError ? signupError : loginError}
						</p>
					)}

					<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 mt-4">
						<div
							onClick={() => {
								if (isSignupLoading || isLoginLoading) return;
								toggleModel();
							}}
							className={`rounded-md backdrop-blur-[0.1px] border border-hovery py-1 hover:bg-hovery transition-all select-none flex items-center justify-center
							${
								isSignupLoading || isLoginLoading
									? "opacity-80 cursor-not-allowed bg-hovery"
									: "cursor-pointer"
							}
							`}
						>
							Cancel
						</div>
						<button
							type="submit"
							className="rounded-md bg-brand py-1 text-background dark:text-text hover:bg-custom_02 transition-all duration-300 select-none flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-80"
							disabled={isSignupLoading || isLoginLoading}
						>
							{isSignupLoading || (isLoginLoading && <Loader />)}
							{actionType === "signup" ? "Sign Up" : "Log In"}
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default SignUpModel;
