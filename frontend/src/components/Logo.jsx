import { Link } from "react-router-dom";
import React from "react";

import LogoImage from "../assets/logo.png";

const Logo = () => {
	return (
		<Link
			to="/"
			className="text-brand uppercase font-kanit font-medium text-medium flex items-center gap-2 hover:text-custom_02 transition-all duration-300"
		>
			<img
				src={LogoImage}
				alt="TaskWise.ai"
				draggable="false"
				loading="lazy"
				className="w-8 h-8"
			/>
			<span className="hidden md:block">TaskWise.ai</span>
		</Link>
	);
};

export default Logo;
