import React from "react";

import { SwitchTheme, Logo, NavLinks, SocialLinks } from "./index";

const Footer = () => {
	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex items-center justify-between mt-auto mb-4">
			<Logo />
			<div className="hidden md:block">
				<NavLinks />
			</div>
			<div className="flex items-center gap-3">
				<SocialLinks />
				<div className="mx-2 w-[1px] h-[20px] bg-tertiary" />
				<SwitchTheme />
			</div>
		</div>
	);
};

export default Footer;
