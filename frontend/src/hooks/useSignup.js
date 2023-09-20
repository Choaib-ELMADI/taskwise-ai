import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { SignUpModelContext } from "../context/SignUpModelContext";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
	const { toggleModel } = useContext(SignUpModelContext);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const signup = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch(
			"https://task-wise-ai-backend.vercel.app/user/signup",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.message);
		}

		if (response.ok) {
			localStorage.setItem("user", JSON.stringify(json));
			dispatch({ type: "LOGIN", payload: json });
			setIsLoading(false);
			navigate("/tasks");
			toggleModel();
		}
	};

	return {
		signupError: error,
		isSignupLoading: isLoading,

		signup,
		setSignupError: setError,
		setIsSignupLoading: setIsLoading,
	};
};
