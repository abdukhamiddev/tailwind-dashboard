import { useState } from "react";
import MainNav from "../components/MainNav";
import Tools from "../components/Tools";
import Logo from "../public/svg/logo.svg";

export default function Home() {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<>
			<div className="flex h-full">
				<div className="fixed bottom-0 z-10 w-full lg:relative lg:w-auto">
					<div className="relative w-full h-full p-4 bg-blue-900 lg:w-24">
						<a
							href="#"
							className="absolute hidden transition-all duration-100 transform -translate-x-1/2 lg:flex w-14 h-14 rounded-xl top-10 left-1/2 lg:justify-center lg:items-center hover:bg-white hover:bg-opacity-50"
						>
							<Logo className="w-8 h-8 text-white" />
						</a>
						<MainNav />
					</div>
				</div>

				<div className="w-full p-4 lg:p-10 ">
					<Tools />
					<div className="p-2 mt-4 bg-gray-300 rounded-xl lg:hidden">
						<button
							className="block h-10 mx-auto bg-blue-900 w-32h"
							onClick={() => setShowSideBar(!showSideBar)}
						>
							Toggle sidebar
						</button>
					</div>
					<div className="overflow-hidden">
						<div
							className={`transform lg:transform-none  ${
								showSideBar ? "-translate-x-full" : ""
							} transition-all duration-300`}
						>
							<div className="flex mt-4 space-x-4 lg:mt-10 lg:space-x-10">
								<div className="flex-shrink-0 w-full rounded-xl lg:flex-shrink lg:w-3/4">
									<div className="flex space-x-4 lg:space-x-10">
										<div className="w-full bg-gray-300 rounded-xl h-28"></div>
										<div className="w-full bg-gray-300 rounded-xl h-28"></div>
										<div className="w-full bg-gray-300 rounded-xl h-28"></div>
									</div>
									<div className="w-full mt-4 bg-gray-300 rounded-xl h-28 lg:mt-10" />
									<div className="flex mt-4 space-x-4 lg:space-x-10 lg:mt-10">
										<div className="w-full bg-gray-300 rounded-xl h-28"></div>
										<div className="w-full bg-gray-300 rounded-xl h-28"></div>
									</div>
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
