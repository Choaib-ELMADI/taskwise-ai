import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
	return (
		<div className="w-full flex items-center justify-center gap-8">
			<Link to="/">Home</Link>
			<Link to="/tasks">Tasks</Link>
		</div>
	);
};

export default Navbar;
