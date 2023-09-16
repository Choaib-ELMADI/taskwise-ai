import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { useAuthContext } from "../hooks/useAuthContext";
import {
	SwitchTheme,
	Separator,
	NavLinks,
	SignUp,
	Logout,
	Logo,
} from "./index";

const Navbar = () => {
	const [viewMenu, setViewMenu] = useState(false);
	const { user } = useAuthContext();

	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between">
			<Logo />
			<div className="flex items-center gap-4">
				<NavLinks viewMenu={viewMenu} setViewMenu={setViewMenu} />
				<Separator hiding={true} />
				{user ? <Logout /> : <SignUp />}
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
