import React from "react";
import DotsIcon from "../public/svg/dots.svg";
import VisaIcon from "../public/svg/visa.svg";

const Cards = () => {
	return (
		<div>
			<div className="flex justify-between">
				<h3 className="text-lg font-semibold text-gray-700"> My Cards</h3>
				<a href="#" className="inline-block text-gray-800 w- 6">
					<DotsIcon className="w-6" />
				</a>
			</div>
			<div className="mx-auto mt-4 md:w-1/2 lg:w-full">
				<div className="relative w-full overflow-hidden bg-blue-800 rounded-lg pt-3/5">
					<div className="absolute top-0 w-full transform bg-blue-200 pt-3/5 -right-1/2 -rotate-12 rounded-3xl"></div>
					<div className="absolute left-0 w-full transform rotate-45 bg-yellow-300 top-3/4 pt-3/5 rounded-3xl"></div>
					<div className="absolute inset-0 flex flex-col justify-between px-4 py-6 lg:py-1 lg:px-2">
						<div className="flex items-center justify-between ">
							<div className="block w-12 h-8 bg-white rounded bg-opacity-80 "></div>
							<div className="w-12 text-white">
								<VisaIcon />
							</div>
						</div>
						<div className="flex items-center justify-between space-x-5">
							<div className="w-1/4 h-2 bg-white rounded-full bg-opacity-80"></div>
							<div className="w-1/4 h-2 bg-white rounded-full bg-opacity-80"></div>
							<div className="w-1/4 h-2 bg-white rounded-full bg-opacity-80"></div>

							<div className="w-1/4 text-lg tracking-widest text-center text-white">
								6945
							</div>
						</div>
						<div className="flex justify-between pb-2 font-semibold text-white">
							<span>John Smith </span>
							<span>05/24</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
