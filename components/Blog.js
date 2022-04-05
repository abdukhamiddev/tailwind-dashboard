/* eslint-disable @next/next/no-img-element */
import React from "react";
import VideoIcon from "../public/svg/video.svg";
import ClockIcon from "../public/svg/clock.svg";
import StarIcon from "../public/svg/star.svg";
import RightIcon from "../public/svg/right-arrow.svg";

const Blog = () => {
	return (
		<>
			<div className="mt-4 space-y-5 md:flex md:space-x-5 lg:space-x-10 lg:mt-10 md:space-y-0">
				<div className="w-full p-5 space-y-4 bg-white border border-gray-100 shadow-lg lg:w-1/2 rounded-xl">
					<div className="flex items-center space-y-5">
						<div className="flex items-center">
							<div className="w-10 h-10 mr-3 overflow-hidden rounded-full">
								<img
									src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
									alt=""
									className="object-cover w-10 h-10"
								/>
							</div>
							<div className="flex flex-col">
								<span className="block leading-3">Emily Burns</span>
								<span className="text-xs text-gray-400">Business trainer</span>
							</div>
						</div>
					</div>
					<h3 className="text-lg font-semibold ">
						<a href="#" className="hover:text-blue-700">
							How to properly manage your personal budget?
						</a>
					</h3>
					<div></div>
					<div className="flex space-x-10">
						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<VideoIcon />
							</div>

							<span className="text-sm text-gray-600">Video</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<ClockIcon className="text-gray-500" />
							</div>

							<span className="text-sm text-gray-600">10 min</span>
						</div>

						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<StarIcon className="text-red-600" />
							</div>

							<span className="text-sm text-gray-600">222 likes</span>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="font-semibold text-gray-600">2 days ago</div>
						<a
							href="#"
							className="flex items-center px-4 py-3 space-x-3 text-white transition-all duration-200 bg-blue-800 rounded-full hover:bg-red-500"
						>
							<span>Connect</span>
							<div className="w-4 h-4">
								<RightIcon className="text-white" />
							</div>
						</a>
					</div>
				</div>
				<div className="w-full p-5 space-y-4 bg-white border border-gray-100 shadow-lg lg:w-1/2 rounded-xl">
					<div className="flex items-center space-y-5">
						<div className="flex items-center">
							<div className="w-10 h-10 mr-3 overflow-hidden rounded-full">
								<img
									src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
									alt=""
									className="object-cover w-10 h-10"
								/>
							</div>
							<div className="flex flex-col">
								<span className="block leading-3">Emily Burns</span>
								<span className="text-xs text-gray-400">Business trainer</span>
							</div>
						</div>
					</div>
					<h3 className="text-lg font-semibold ">
						<a href="#" className="hover:text-blue-700">
							How to properly manage your personal budget?
						</a>
					</h3>

					<div className="flex space-x-10">
						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<VideoIcon />
							</div>

							<span className="text-sm text-gray-600">Video</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<ClockIcon className="text-gray-500" />
							</div>

							<span className="text-sm text-gray-600">10 min</span>
						</div>

						<div className="flex items-center space-x-2">
							<div className="w-6 text-blue-800">
								<StarIcon className="text-red-600" />
							</div>

							<span className="text-sm text-gray-600">222 likes</span>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="font-semibold text-gray-600">2 days ago</div>
						<a
							href="#"
							className="flex items-center px-4 py-3 space-x-3 text-white transition-all duration-200 bg-blue-800 rounded-full hover:bg-red-500"
						>
							<span>Connect</span>
							<div className="w-4 h-4">
								<RightIcon className="text-white" />
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
