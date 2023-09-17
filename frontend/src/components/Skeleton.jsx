import React from "react";

import Skeleton01 from "./Skeleton01";
import Skeleton02 from "./Skeleton02";

const Skeleton = () => {
	return (
		<div className="relative flex flex-col md:flex-row md:items-end dm:justify-end gap-2 h-max">
			<Skeleton01 />
			<Skeleton02 />
		</div>
	);
};

export default Skeleton;
