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
			className={`absolute right-4 md:static rounded-sm md:rounded-[0px] p-[2px] md:p-0
            flex flex-col md:flex-row items-center gap-0 md:gap-4 bg-text text-background md:bg-background md:text-text 
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
					className="w-full opacity-80 hover:opacity-100 rounded-sm md:rounded-[0px] hover:bg-hovery hover:md:bg-background px-6 py-2 md:p-0 transition-all md:transition-none"
					onClick={() => setViewMenu(false)}
				>
					{label}
				</NavLink>
			))}
		</div>
	);
};

export default NavLinks;
