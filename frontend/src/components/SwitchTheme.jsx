import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import React from "react";

const SwitchTheme = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{resolvedTheme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
		</button>
	);
};

export default SwitchTheme;
