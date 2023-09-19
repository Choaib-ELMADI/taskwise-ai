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
			className={`absolute z-50 right-4 md:static md:z-auto
				rounded-sm md:rounded-[0px] 
				p-[2px] md:p-0
				flex items-center flex-col gap-0 bg-hovery backdrop-blur-sm
				border border-hovery md:border-0
				md:flex-row md:gap-4 md:bg-[transparent] md:backdrop-blur-none
				md:opacity-100 md:visible
				${viewMenu && "opacity-100 visible top-[56px] transition-effect"} 
				${!viewMenu && "opacity-0 invisible top-[60px]"}
            `}
		>
			{links.map(({ link, label }) => (
				<NavLink
					to={link}
					key={label}
					className="w-full opacity-80 hover:opacity-100 rounded-sm md:rounded-[0px] hover:bg-hovery hover:md:bg-[transparent] px-6 py-2 md:p-0 transition-all md:transition-none"
					onClick={() => setViewMenu(false)}
				>
					{label}
				</NavLink>
			))}
		</div>
	);
};

export default NavLinks;
