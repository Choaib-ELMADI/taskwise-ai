import { BiUserCircle } from "react-icons/bi";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { useAuthContext } from "../hooks/useAuthContext";
import Logout from "./Logout";

const UserProfile = ({ viewProfile, setviewProfile, setViewMenu }) => {
	const { user } = useAuthContext();

	return (
		<div>
			<BiUserCircle
				onClick={() => {
					setviewProfile(!viewProfile);
					setViewMenu(false);
				}}
				size={24}
				className="cursor-pointer"
			/>
			{viewProfile && (
				<motion.div
					className="absolute z-50 right-4 top-0 rounded-sm p-1 flex flex-col gap-2 bg-hovery backdrop-blur-sm border border-hovery w-36"
					initial={{ opacity: 0, y: "60px" }}
					animate={{ opacity: 1, y: "56px" }}
				>
					<BiUserCircle size={48} />
					<p className="white-space-nowrap truncate select-none">
						{user.email.split("@")[0]}
					</p>
					<Logout setviewProfile={setviewProfile} />
				</motion.div>
			)}
		</div>
	);
};

export default UserProfile;
