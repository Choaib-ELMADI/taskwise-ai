import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { SwitchTheme, Logo, SignUp, NavLinks } from "./index";

const Navbar = () => {
	const [viewMenu, setViewMenu] = useState(false);

	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between">
			<Logo />
			<div className="flex items-center gap-6">
				<NavLinks viewMenu={viewMenu} setViewMenu={setViewMenu} />
				<div className="hidden md:block mx-2 w-[1px] h-[20px] bg-tertiary" />
				<SignUp />
				<SwitchTheme />
				<button
					className="block md:hidden"
					onClick={() => setViewMenu(!viewMenu)}
				>
					<FiMenu size={24} />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
