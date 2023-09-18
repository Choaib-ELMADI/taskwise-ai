import React from "react";
import SignUp from "./SignUpBtn";

const SignupFooter = () => {
	return (
		<div className="w-full p-4 my-16 flex flex-col gap-4 items-center rounded-lg backdrop-blur-xl bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(0,0,0,0.2)] border border-hovery">
			<h1 className="text-xlarge leading-[50px] text-center">
				Sign Up For <span className="text-brand">Free!</span>
			</h1>
			<p className="text-center text-secondary max-w-[800px]">
				AI Powered TaskWise.ai Is An Incredibly Easy Tool To Simplify Your Life.
				Quickly Receive Intelligent Action Steps To Perform Any Task. No More
				Wondering How To Get Stuff Done. TaskWise.ai Is Your Partner In
				Productivity.
			</p>
			<SignUp text="Sign Up Now!" />
		</div>
	);
};

export default SignupFooter;
