import React from "react";

const Features = () => {
	return (
		<div>
			<h1 className="text-xlarge leading-[50px] mb-4 mn:mb-0">
				Why You&#x2019;ll <span className="text-brand">Love It</span>!
			</h1>
			<div
				className="grid 
                    grid-cols-1 grid-rows-4
                    md:grid-cols-3 md:grid-rows-4
                    mn:grid-cols-4 mn:grid-rows-3
                "
			>
				<div
					className="border border-hovery p-4 flex items-center justify-center 
                    rounded-tl-[20px] rounded-br-[20px]
                    col-start-1 col-end-2 row-start-1 row-end-2

                    md:rounded-[0] md:rounded-tr-lg md:rounded-l-lg

                    mn:col-start-4 mn:col-end-5
                    mn:rounded-[0] mn:rounded-tl-lg mn:rounded-r-lg 
                    "
				>
					<p className="text-center w-[90%] max-w-[300px]">
						TaskWise.ai helps you accomplish more in less time!
					</p>
				</div>
				<div
					className="border border-hovery p-4 flex items-center justify-center 
                    rounded-bl-[20px] rounded-tr-[20px]
                    col-start-1 col-end-2 row-start-2 row-end-3

                    md:rounded-[0] md:rounded-tr-lg
                    md:col-start-2 md:col-end-3

                    mn:rounded-[0] mn:rounded-br-lg mn:rounded-tl-lg 
                    mn:col-start-3 mn:col-end-4
                    "
				>
					<p className="text-center w-[90%] max-w-[300px]">
						Absolutely FREE <br /> forever!
					</p>
				</div>
				<div
					className="border border-hovery p-4 flex items-center justify-center 
                    rounded-tl-[20px] rounded-br-[20px]
                    col-start-1 col-end-2 row-start-3 row-end-4

                    md:rounded-[0] md:rounded-bl-lg
                    md:col-start-2 md:col-end-3

                    mn:rounded-[0] mn:rounded-l-lg mn:rounded-tr-lg
                    mn:col-start-1 mn:col-end-2 mn:row-start-2 mn:row-end-3
                    "
				>
					<p className="text-center w-[90%] max-w-[300px]">
						Simplifies complex tasks by providing short, manageable steps!
					</p>
				</div>
				<div
					className="border border-hovery p-4 flex items-center justify-center 
                    rounded-tr-[20px] rounded-bl-[20px]
                    col-start-1 col-end-2 row-start-4 row-end-5

                    md:rounded-[0] md:rounded-r-lg md:rounded-bl-lg
                    md:col-start-3 md:col-end-4

                    mn:col-start-2 mn:col-end-3 mn:row-start-3 mn:row-end-4
                    mn:rounded-[0] mn:rounded-b-lg
                    "
				>
					<p className="text-center w-[90%] max-w-[300px]">
						Zero fees! <br /> Zero downloads!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
