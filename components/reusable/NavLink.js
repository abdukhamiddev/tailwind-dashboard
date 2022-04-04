import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ href, children }) => {
	const router = useRouter();
	return (
		<>
			<a href={href} className="group">
				<div className="flex items-center justify-center w-10 h-10 text-white duration-300 transform -translate-y-8 opacity-50 lg:w-14 lg:h-14 group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 group-hover:translate-x-8 lg:-translate-y-0 group-hover:shadow-xl rounded-xl">
					{children}
				</div>
			</a>
		</>
	);
};

export default NavLink;
