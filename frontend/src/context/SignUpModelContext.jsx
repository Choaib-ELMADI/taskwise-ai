import { createContext, useState } from "react";

export const SignUpModelContext = createContext({
	isModelOpen: false,
	toggleModel: () => {},
});

export const SignUpModelContextProvider = ({ children }) => {
	const [isModelOpen, setIsModelOpen] = useState(false);

	const toggleModel = () => {
		setIsModelOpen(!isModelOpen);
	};

	return (
		<SignUpModelContext.Provider value={{ isModelOpen, toggleModel }}>
			{children}
		</SignUpModelContext.Provider>
	);
};
