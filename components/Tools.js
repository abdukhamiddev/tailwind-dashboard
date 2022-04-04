/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Bell from "../public/svg/bell.svg";
import Logo from "../public/svg/logo.svg";

const Tools = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex lg:space-x-10">
			<div className="hidden lg:block lg:w-1/2">
				<SearchForm />
			</div>
			<div className="w-full lg:w-1/2">
				<div className="flex justify-between">
					<div className="">
						<a
							href="#"
							className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-xl"
						>
							<Logo className="w-8 h-8 text-blue-800" />
						</a>
					</div>
					<div className="items-center hidden h-10 space-x-6 font-semibold lg:flex ">
						<div className="cursor-pointer hover:text-blue-800">Feedback</div>
						<div className="cursor-pointer hover:text-blue-800">Contacts</div>
						<div className="cursor-pointer hover:text-blue-800">Help</div>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="#"
							className="relative flex items-center justify-center w-10 h-10 text-gray-300 hover:text-gray-700"
						>
							<Bell className="w-6 " />

							<div className="absolute w-2 h-2 bg-red-500 border border-white rounded-full top-2 right-2"></div>
						</a>
						<div className="lg:relative">
							<button
								className="w-10 h-10 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 "
								onClick={() => setIsOpen(!isOpen)}
							>
								<img
									src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
									alt=""
									className="object-cover w-10 h-10"
								/>
							</button>
							{isOpen && (
								<button
									onClick={() => setIsOpen(false)}
									className="fixed inset-0 z-30 w-full h-full cursor-default"
									tabIndex="-1"
								></button>
							)}
							<transition
								enter-active-class="transition ease-out duration-100 transform"
								enter-from-class="opacity-0 scale-95"
								enter-to-class="opacity-100 scale-100"
								leave-active-class="transition ease-in duration-75 transform"
								leave-from-class="opacity-100 scale-100"
								leave-to-class="opacity-0 scale-95"
							></transition>
							{isOpen && (
								<div className="absolute right-0 z-40 w-full mt-2 transition-all duration-300 lg:w-48 ">
									<div className="py-1 mx-4 bg-white rounded-md shadow-lg lg:mx-0 ring-1 ring-black ring-opacity-5">
										<div className="p-3 lg:hidden">
											<SearchForm />
										</div>
										<div className="border-b lg:hidden ">
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Feedback
											</a>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Contact
											</a>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Help
											</a>
										</div>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Profile
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Settings
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Log Out
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tools;
