import React, { useContext } from "react";

import { SignUpModelContext } from "../context/SignUpModelContext";

const SignUp = ({ text = "Sign Up" }) => {
	const { toggleModel } = useContext(SignUpModelContext);

	return (
		<button
			className="bg-brand text-background dark:text-text whitespace-nowrap px-4 py-1 rounded-[100px] hover:bg-custom_02 transition-all duration-300"
			onClick={() => toggleModel()}
		>
			{text}
		</button>
	);
};

export default SignUp;
