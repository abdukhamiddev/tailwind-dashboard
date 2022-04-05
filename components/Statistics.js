import React, { useState } from "react";
import Arrow from "../public/svg/arrow-down.svg";
const Statistics = () => {
	const candles = [
		{
			id: 1,
			thinHeight: "80%",
			thinTop: "10%",
			wideHeight: "50%",
			wideTop: "20%",
		},
		{
			id: 2,
			thinHeight: "60%",
			thinTop: "15%",
			wideHeight: "60%",
			wideTop: "10%",
		},
		{
			id: 3,
			thinHeight: "65%",
			thinTop: "5%",
			wideHeight: "20%",
			wideTop: "25%",
		},
		{
			id: 4,
			thinHeight: "70%",
			thinTop: "5%",
			wideHeight: "40%",
			wideTop: "15%",
		},
		{
			id: 5,
			thinHeight: "50%",
			thinTop: "25%",
			wideHeight: "30%",
			wideTop: "20%",
		},
		{
			id: 6,
			thinHeight: "70%",
			thinTop: "27%",
			wideHeight: "42%",
			wideTop: "31%",
		},
		{
			id: 7,
			thinHeight: "60%",
			thinTop: "12%",
			wideHeight: "44%",
			wideTop: "21%",
		},
		{
			id: 8,
			thinHeight: "80%",
			thinTop: "5%",
			wideHeight: "60%",
			wideTop: "10%",
		},
		{
			id: 9,
			thinHeight: "65%",
			thinTop: "10%",
			wideHeight: "50%",
			wideTop: "25%",
		},
		{
			id: 10,
			thinHeight: "70%",
			thinTop: "5%",
			wideHeight: "40%",
			wideTop: "15%",
		},
		{
			id: 11,
			thinHeight: "80%",
			thinTop: "5%",
			wideHeight: "60%",
			wideTop: "10%",
		},
		{
			id: 12,
			thinHeight: "45%",
			thinTop: "25%",
			wideHeight: "20%",
			wideTop: "25%",
		},
		{
			id: 13,
			thinHeight: "70%",
			thinTop: "15%",
			wideHeight: "40%",
			wideTop: "15%",
		},
		{
			id: 14,
			thinHeight: "80%",
			thinTop: "5%",
			wideHeight: "60%",
			wideTop: "10%",
		},
		{
			id: 15,
			thinHeight: "75%",
			thinTop: "17%",
			wideHeight: "30%",
			wideTop: "25%",
		},
		{
			id: 16,
			thinHeight: "70%",
			thinTop: "25%",
			wideHeight: "40%",
			wideTop: "15%",
		},
		{
			id: 17,
			thinHeight: "80%",
			thinTop: "15%",
			wideHeight: "60%",
			wideTop: "10%",
		},
		{
			id: 18,
			thinHeight: "75%",
			thinTop: "12%",
			wideHeight: "50%",
			wideTop: "25%",
		},
	];
	return (
		<div className="mt-4 lg:mt-10">
			<div className="p-4 bg-indigo-50 rounded-xl lg:p-10">
				<div className="flex items-center justify-between mb-10 ">
					<h3 className="text-lg font-semibold text-gray-700 ">Statistics</h3>
					<div>
						<button className="flex items-center px-4 py-2 space-x-3 font-semibold text-blue-800 bg-white rounded-full focus:outline-none">
							<span>2021</span>
							<span className="block w-4 pt-1">
								<Arrow />
							</span>
						</button>
					</div>
				</div>
				<div className="relative w-full h-72">
					<div className="absolute left-0 flex flex-col items-end justify-between w-4 h-full pb-6 text-gray-400">
						<span>4k</span>
						<span>3k</span>
						<span>2k</span>
						<span>1k</span>
						<span>0</span>
					</div>
					<div className="relative h-full ml-6 overflow-x-auto overflow-y-hidden">
						<div className="relative flex justify-between h-full pb-8 w-max md:w-auto">
							{candles.map((candle) => (
								<div className="relative inline-block w-10" key={candle.id}>
									<div
										className="absolute inline-block border border-indigo-200 left-1/2"
										style={{ height: candle.thinHeight, top: candle.thinTop }}
									>
										<div className="relative w-full h-full">
											<div
												className="absolute w-2 transform -translate-x-1/2 bg-blue-800 rounded-full"
												style={{
													height: candle.wideHeight,
													top: candle.wideTop,
												}}
											></div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="absolute bottom-0 flex justify-between w-full text-gray-400">
							<span>Jan</span>
							<span>Feb</span>
							<span>Mar</span>
							<span>Apr</span>
							<span>May</span>
							<span>Jun</span>
							<span>Jul</span>
							<span>Aug</span>
							<span>Sep</span>
							<span>Oct</span>
							<span>Nov</span>
							<span>Dec</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
