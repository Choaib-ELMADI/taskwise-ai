import React from "react";

import { SignUp, Skeleton } from "../components/index";

const Hero = () => {
	return (
		<div className="grid grid-cols-1 dm:grid-cols-2 gap-12 dm:gap-4 min-h-[500px] pt-12 dm:pt-20">
			<div>
				<div className="bg-gradient-to-r from-[transparent] to-hovery rounded-[100px] h-[30px] w-[160px] relative">
					<span className="absolute top-[50%] translate-y-[-50%] right-[3px] rounded-[100px] h-[26px] w-[calc(100%-3px)] bg-background">
						More Life. Less Work.
					</span>
				</div>
				<h1 className="max-w-[500px] text-xlarge leading-[50px]">
					Innovate AI Tool That Helps{" "}
					<span className="text-brand">Mange Tasks</span> So You Can Enjoy More
					Life!
				</h1>
				<div className="flex items-center gap-2 mt-4">
					<SignUp text="Sign Up Now!" />
					<span className="select-none cursor-default">Free to Join...</span>
				</div>
			</div>
			<Skeleton />
		</div>
	);
};

export default Hero;
