import { useState } from "react";
import MainNav from "../components/MainNav";
import Tools from "../components/Tools";
import Logo from "../public/svg/logo.svg";
import Icon from "../public/svg/icon.svg";
import OrdersIcon from "../public/svg/orders.svg";
import Percentage from "../public/svg/percentage.svg";
import Blog from "../components/Blog";
import Statistics from "../components/Statistics";

export default function Home() {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<>
			<div className="flex h-full">
				<div className="fixed bottom-0 z-10 w-full lg:static lg:w-24 lg:h-full">
					<div className="relative w-full h-full p-4 bg-blue-900 lg:w-24 lg:fixed">
						<a
							href="#"
							className="absolute hidden transition-all duration-100 transform -translate-x-1/2 lg:flex w-14 h-14 rounded-xl top-10 left-1/2 lg:justify-center lg:items-center hover:bg-white hover:bg-opacity-50"
						>
							<Logo className="w-8 h-8 text-white" />
						</a>
						<MainNav />
					</div>
				</div>

				<div className="w-full p-4 lg:p-10">
					<Tools />
					<div className="p-2 mt-4 bg-gray-300 rounded-xl lg:hidden">
						<button
							className="block h-10 mx-auto bg-blue-900 w-32h"
							onClick={() => setShowSideBar(!showSideBar)}
						>
							Toggle sidebar
						</button>
					</div>
					<div className="pb-24 overflow-hidden lg:overflow-visible lg:pb-0">
						<div
							className={`transform lg:transform-none  ${
								showSideBar ? "-translate-x-full" : ""
							} transition-all duration-300`}
						>
							<div className="flex mt-4 space-x-4 lg:mt-10 lg:space-x-10">
								<div className="flex-shrink-0 w-full rounded-xl lg:flex-shrink lg:w-3/4">
									<div className="flex space-x-4 lg:space-x-10 ">
										<div className="flex flex-col items-center w-1/3 px-3 py-5 space-x-0 bg-white border border-gray-100 shadow-lg lg:space-x-5 lg:p-5 lg:flex-row rounded-xl">
											<div className="w-full p-2 text-blue-700 rounded-lg bg-indigo-50 lg:w-auto">
												<Icon className="w-8 mx-auto" />
											</div>
											<div>
												<span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
													Visitors
												</span>
												<span className="text-xl font-semibold lg:text-2xl">
													10,320
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center w-1/3 px-3 py-5 bg-white border border-gray-100 shadow-lg lg:space-x-5 lg:p-5 lg:flex-row rounded-xl">
											<div className="w-full p-2 text-blue-700 rounded-lg bg-indigo-50 lg:w-auto ">
												<Percentage className="w-8 mx-auto" />
											</div>
											<div>
												<span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
													Customers
												</span>
												<span className="text-xl font-semibold lg:text-2xl">
													9,978
												</span>
											</div>
										</div>
										<div className="flex flex-col items-center w-1/3 px-3 py-5 bg-red-500 border border-red-500 shadow-lg lg:space-x-5 lg:p-5 lg:flex-row rounded-xl">
											<div className="w-full p-2 text-white bg-red-700 rounded-lg lg:w-auto">
												<OrdersIcon className="w-8 mx-auto" />
											</div>
											<div>
												<span className="block text-xs font-semibold tracking-wider text-gray-400 uppercase">
													Orders
												</span>
												<span className="text-xl font-semibold text-white lg:text-2xl">
													2,529
												</span>
											</div>
										</div>
									</div>
									<Statistics />
									<Blog />
								</div>

								<div className="flex-shrink-0 w-full bg-gray-300 lg:flex-shrink lg:w-1/4 rounded-xl h-52">
									sidebar
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
