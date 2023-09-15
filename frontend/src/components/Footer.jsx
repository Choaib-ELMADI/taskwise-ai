import React from "react";

import { SwitchTheme, Logo, NavLinks, SocialLinks, Separator } from "./index";

const Footer = () => {
	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex items-center justify-between mt-auto mb-4">
			<Logo />
			<div className="hidden md:block">
				<NavLinks />
			</div>
			<div className="flex items-center gap-3">
				<SocialLinks />
				<Separator hiding={false} />
				<SwitchTheme />
			</div>
		</div>
	);
};

export default Footer;
