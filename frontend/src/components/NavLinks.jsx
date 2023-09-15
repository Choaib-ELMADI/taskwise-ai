import { NavLink } from "react-router-dom";
import React from "react";

const links = [
	{
		link: "/",
		label: "Home",
	},
	{
		link: "/tasks",
		label: "Tasks",
	},
];

const NavLinks = ({ viewMenu, setViewMenu }) => {
	return (
		<div
			className={`absolute right-4 md:static rounded-sm md:rounded-[0px] px-4 py-2 md:p-0
            flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-text text-background md:bg-background md:text-text 
            md:opacity-100 md:visible
            ${
							viewMenu
								? "opacity-100 visible top-[56px] transition-effect"
								: "opacity-0 invisible top-[60px]"
						} 
            `}
		>
			{links.map(({ link, label }) => (
				<NavLink
					to={link}
					key={label}
					className="opacity-80 hover:opacity-100 transition-all"
					onClick={() => setViewMenu(false)}
				>
					{label}
				</NavLink>
			))}
		</div>
	);
};

export default NavLinks;
