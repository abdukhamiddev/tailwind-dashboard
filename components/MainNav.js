import React from "react";
import HomeIcon from "../public/svg/home-icon.svg";
import MessageIcon from "../public/svg/message-icon.svg";
import PercentageIcon from "../public/svg/percentage-icon.svg";
import ToolsIcon from "../public/svg/tools-icon.svg";

const MainNav = () => {
	return (
		<div className="flex items-center justify-center h-full space-x-4 lg:flex-col lg:space-y-4 lg:space-x-0 lg:py-4">
			<a href="#" className="group">
				<div className="flex items-center justify-center w-10 h-10 text-red-500 duration-300 transform bg-white opacity-100 drop-shadow-xl lg:translate-x-8 lg:w-14 lg:h-14 lg:-translate-y-0 rounded-xl">
					<HomeIcon className="w-6 h-6" />
				</div>
			</a>
			<a href="#" className="group">
				<div className="flex items-center justify-center w-10 h-10 text-white duration-300 transform opacity-50 lg:w-14 lg:h-14 group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 lg:group-hover:translate-x-8 group-hover:shadow-xl rounded-xl">
					<PercentageIcon className="w-6 h-6" />
				</div>
			</a>
			<a href="#" className="group">
				<div className="flex items-center justify-center w-10 h-10 text-white duration-300 transform opacity-50 lg:w-14 lg:h-14 group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 lg:group-hover:translate-x-8 group-hover:shadow-xl rounded-xl">
					<MessageIcon className="w-6 h-6" />
				</div>
			</a>
			<a href="#" className="group">
				<div className="flex items-center justify-center w-10 h-10 text-white duration-300 transform opacity-50 lg:w-14 lg:h-14 group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 lg:group-hover:translate-x-8 group-hover:shadow-xl rounded-xl">
					<ToolsIcon className="w-6 h-6" />
				</div>
			</a>
		</div>
	);
};

export default MainNav;
