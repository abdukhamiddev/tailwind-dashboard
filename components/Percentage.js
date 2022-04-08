import React from "react";
import Edit from "../public/svg/edit.svg";
import Rounded from "../public/svg/rounded.svg";

const Percentage = () => {
	return (
		<div>
			<div className="w-full mb-6 text-right">
				<a
					href="#"
					className="inline-block w-6 text-gray-400 hover:text-gray-800"
				>
					<Edit />
				</a>
			</div>

			<div className="relative">
				<div className="relative flex items-center justify-center w-32 h-32 mx-auto bg-white rounded-full ">
					<div className="flex items-center justify-center w-20 h-20 text-blue-800 rounded-full shadow-lg bg-gray-50">
						<div>
							<span className="text-2xl font-black">72</span>
							<span className="font-bold">%</span>
						</div>
					</div>

					<div className="absolute w-32 text-blue-800" style={{ scale: 1.15 }}>
						<Rounded />
					</div>
				</div>

				<div className="absolute top-0 right-0 w-auto px-3 py-2 text-sm text-white bg-blue-800 rounded shadow-lg lg:-right-10">
					$10,600
				</div>
			</div>
		</div>
	);
};

export default Percentage;
