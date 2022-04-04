import { useState } from "react";
import MainNav from "../components/MainNav";

export default function Home() {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<>
			<div className="flex h-full">
				<div className="fixed bottom-0 w-full lg:relative lg:w-auto z-10">
					<div className="relative w-full lg:w-24 h-full bg-blue-900 p-4">
						<a
							href="#"
							className="hidden lg:block w-14 h-14 bg-yellow-300 rounded-xl absolute top-10 left-1/2 transform -translate-x-1/2"
						/>
						<MainNav />
					</div>
				</div>

				<div className="w-full p-4 lg:p-10 ">
					<div className="bg-gray-300 rounded-xl h-14 ">search</div>
					<div className="bg-gray-300 rounded-xl lg:hidden mt-4 p-2">
						<button
							className="block w-32h h-10 bg-blue-900 mx-auto"
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
							<div className="flex mt-4 lg:mt-10 space-x-4 lg:space-x-10">
								<div className="rounded-xl   flex-shrink-0  lg:flex-shrink w-full lg:w-3/4">
									<div className="flex space-x-4 lg:space-x-10">
										<div className="bg-gray-300 rounded-xl h-28 w-full"></div>
										<div className="bg-gray-300 rounded-xl h-28 w-full"></div>
										<div className="bg-gray-300 rounded-xl h-28 w-full"></div>
									</div>
									<div className="bg-gray-300 rounded-xl h-28  mt-4 lg:mt-10 w-full" />
									<div className="flex lg:space-x-10  space-x-4 mt-4  lg:mt-10">
										<div className="bg-gray-300 rounded-xl h-28 w-full"></div>
										<div className="bg-gray-300 rounded-xl h-28 w-full"></div>
									</div>
								</div>

								<div className="flex-shrink-0 lg:flex-shrink w-full lg:w-1/4 bg-gray-300 rounded-xl h-52">
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
