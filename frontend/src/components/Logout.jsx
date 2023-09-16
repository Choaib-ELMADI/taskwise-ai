import React from "react";

import { useLogout } from "../hooks/useLogout";

const Logout = ({ setviewProfile }) => {
	const { logout } = useLogout();

	return (
		<button
			className="bg-[#fa3838] text-background dark:text-text whitespace-nowrap px-4 py-1 rounded-sm hover:opacity-80 transition-all duration-300"
			onClick={() => {
				logout();
				setviewProfile(false);
			}}
		>
			Logout
		</button>
	);
};

export default Logout;
