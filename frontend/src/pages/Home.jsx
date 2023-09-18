import React from "react";

import { Hero, HowItWorks, SignupFooter, StepsTask } from "../components/index";

const Home = () => {
	return (
		<div className="w-[calc(100%-2rem)] max-w-[1300px] flex-1 min-h-[300px]">
			<Hero />
			<StepsTask />
			<HowItWorks />
			<SignupFooter />
		</div>
	);
};

export default Home;
