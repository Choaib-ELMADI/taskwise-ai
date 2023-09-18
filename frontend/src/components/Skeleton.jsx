import React from "react";

import Skeleton01 from "./Skeleton01";
import Skeleton02 from "./Skeleton02";

const Skeleton = () => {
	return (
		<div className="relative flex flex-col md:flex-row md:items-end dm:justify-end gap-2 h-max">
			<Skeleton01 />
			<Skeleton02 styles="dm:absolute dm:left-0 dm:translate-x-[-30%] dm:bottom-0 dm:translate-y-[60%] mx-auto md:mx-0 xs:translate-y-[-60px] md:translate-y-0" />
		</div>
	);
};

export default Skeleton;
