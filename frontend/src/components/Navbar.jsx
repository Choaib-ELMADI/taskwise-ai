import { Link } from "react-router-dom";
import React from "react";

import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
	return (
		<div className="w-full flex items-center justify-between">
			<div className="flex gap-8">
				<Link to="/">Home</Link>
				<Link to="/tasks">Tasks</Link>
			</div>
			<SwitchTheme />
		</div>
	);
};

export default Navbar;
