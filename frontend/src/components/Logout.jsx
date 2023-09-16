import React from "react";

import { useLogout } from "../hooks/useLogout";

const Logout = () => {
	const { logout } = useLogout();

	return (
		<button
			className="bg-[#fa3838] text-background dark:text-text whitespace-nowrap px-4 py-1 rounded-[100px] hover:opacity-80 transition-all duration-300"
			onClick={() => logout()}
		>
			Logout
		</button>
	);
};

export default Logout;
