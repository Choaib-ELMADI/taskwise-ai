import { Link } from "react-router-dom";
import React from "react";

const Logo = () => {
	return (
		<Link
			to="/"
			className="text-brand uppercase font-kanit font-medium text-medium hover:opacity-80 transition-all"
		>
			TaskWise.ai
		</Link>
	);
};

export default Logo;
