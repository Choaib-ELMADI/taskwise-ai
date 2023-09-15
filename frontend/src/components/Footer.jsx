import React from "react";

import SwitchTheme from "./SwitchTheme";

const Footer = () => {
	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex gap-8">
			<h1>Footer</h1>
			<SwitchTheme />
		</div>
	);
};

export default Footer;
