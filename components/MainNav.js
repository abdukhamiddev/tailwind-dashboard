import React from "react";
import HomeIcon from "../public/svg/home-icon.svg";

const MainNav = () => {
	return (
		<div className="flex lg:flex-col items-center  h-full justify-center lg:space-y-4 space-x-4 lg:space-x-0">
			<a href="#" className="group">
				<div className="flex  items-center justify-center w-14 h-14 text-white opacity-50 group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform group-hover:translate-x-8 duration-300 group-hover:shadow-xl rounded-xl">
					<HomeIcon className="w-6 h-6" />
				</div>
			</a>
			<a href="#" className="block w-14 h-14 bg-white rounded-xl" />
			<a href="#" className="block w-14 h-14 bg-white rounded-xl" />
			<a href="#" className="block w-14 h-14 bg-white rounded-xl" />
		</div>
	);
};

export default MainNav;
