import React from "react";
import SearchIcon from "../public/svg/search-icon.svg";

const SearchForm = () => {
	return (
		<form action="/" method="POST">
			<div className="relative flex">
				<div className="absolute w-4 text-blue-800 top-3 left-3">
					<SearchIcon />
				</div>
				<input
					type="text"
					className="w-full h-10 pl-10 text-indigo-900 rounded-md outline-none bg-indigo-50 focus:ring-2 focus:ring-blue-600"
				/>
			</div>
		</form>
	);
};

export default SearchForm;
