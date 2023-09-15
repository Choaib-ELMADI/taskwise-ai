import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import React from "react";

const socialLinks = [
	{
		label: "Instagram",
		icon: <FiInstagram size={20} />,
		link: "https://www.instagram.com/choaib_elmadi",
	},
	{
		label: "Github",
		icon: <FiGithub size={20} />,
		link: "https://github.com/Choaib-ELMADI",
	},
	{
		label: "Linkedin",
		icon: <FiLinkedin size={20} />,
		link: "https://www.linkedin.com/in/choaib-elmadi/",
	},
	{
		label: "LeetCode",
		icon: <SiLeetcode size={20} />,
		link: "https://leetcode.com/Choaib-ELMADI/",
	},
];

const SocialLinks = () => {
	return (
		<div className="flex items-center gap-3">
			{socialLinks.map(({ link, icon, label }) => (
				<a href={link} key={label} target="_blank">
					{icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
