import React, { useContext } from "react";

import { SignUpModelContext } from "../context/SignUpModelContext";

const SignUp = () => {
	const { toggleModel } = useContext(SignUpModelContext);

	return (
		<button
			className="bg-brand text-background dark:text-text whitespace-nowrap px-4 py-1 rounded-[100px] hover:bg-custom_02 transition-all duration-300"
			onClick={() => toggleModel()}
		>
			Sign Up
		</button>
	);
};

export default SignUp;
