import { Link } from "react-router-dom";
import React from "react";

const Logo = () => {
	return (
		<Link
			to="/"
			className="text-brand uppercase font-kanit font-medium text-medium hover:text-custom_02 transition-all duration-300"
		>
			TaskWise.ai
		</Link>
	);
};

export default Logo;
