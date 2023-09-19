import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { useAuthContext } from "../hooks/useAuthContext";
import {
	SwitchTheme,
	UserProfile,
	Separator,
	NavLinks,
	SignUp,
	Logo,
} from "./index";

const Navbar = () => {
	const [viewProfile, setviewProfile] = useState(false);
	const [viewMenu, setViewMenu] = useState(false);
	const { user } = useAuthContext();

	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between relative">
			<Logo />
			<div className="flex items-center gap-4">
				<NavLinks viewMenu={viewMenu} setViewMenu={setViewMenu} />
				<Separator hiding={true} />
				{user ? (
					<UserProfile
						viewProfile={viewProfile}
						setviewProfile={setviewProfile}
						setViewMenu={setViewMenu}
					/>
				) : (
					<SignUp />
				)}
				<SwitchTheme />
				<button
					className="block md:hidden"
					onClick={() => {
						setViewMenu(!viewMenu);
						setviewProfile(false);
					}}
				>
					<FiMenu size={24} />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
