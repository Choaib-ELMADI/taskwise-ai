import React from "react";

import { CreateTaskBtn, Skeleton02 } from "./index";

const HowItWorks = () => {
	return (
		<div className="mb-12 grid gap-4 grid-cols-1 mn:grid-cols-[340px_auto] dm:grid-cols-2">
			<div className="relative select-none pointer-events-none max-w-[300px] h-max mb-8 mn:mb-0">
				<Skeleton02 />
				<CreateTaskBtn styles="absolute bottom-0 translate-y-[100%] xs:-bottom-6 xs:translate-y-[0] left-0 xs:left-5" />
			</div>
			<div>
				<h1 className="text-xlarge leading-[50px]">
					See How It <span className="text-brand">Works</span>
				</h1>
				<p className="max-w-[600px] text-secondary opacity-80">
					Do You Need To Wash You Car? TaskWise.ai Will Quickly Show You How!
					Just Enter "Wash Car" In The Text Box.
				</p>
				<p className="max-w-[600px] text-tertiary mt-2">
					Then, click "Create" and let TaskWise.ai get to work. In seconds,
					you'll receive step by step detailled instructions on how to complete
					the task. No more getting overwhelmed at the process of doing a chore
					or activity. TaskWise.ai gives you simple and concise steps to get the
					job done.
				</p>
			</div>
		</div>
	);
};

export default HowItWorks;
