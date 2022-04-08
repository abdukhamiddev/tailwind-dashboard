import React from "react";
import PlusIcon from "../public/svg/plus.svg";
import TruckIcon from "../public/svg/truck.svg";
import TvIcon from "../public/svg/tv.svg";
import ShoppingCartIcon from "../public/svg/shopping-cart.svg";

const Transactions = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold text-gray-700 ">Transactions</h3>
				<a href="#" className="w-6 h-6 text-white bg-red-500 rounded-lg">
					<PlusIcon />
				</a>
			</div>
			<div className="mt-6 space-y-5">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="flex items-center justify-center w-8 h-8 mr-4 text-red-500 bg-white rounded-xl">
							<TruckIcon />
						</div>

						<div>
							<span className="block leading-3">Taxi</span>
							<span className="text-xs text-gray-400">01:21 PM</span>
						</div>
					</div>

					<div>-$9.20</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="flex items-center justify-center w-8 h-8 mr-4 text-red-500 bg-white rounded-xl">
							<TvIcon />
						</div>

						<div>
							<span className="block leading-3">Netflix</span>
							<span className="text-xs text-gray-400">11:15 PM</span>
						</div>
					</div>

					<div>-$24.99</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="flex items-center justify-center w-8 h-8 mr-4 text-red-500 bg-white rounded-xl">
							<ShoppingCartIcon />
						</div>

						<div>
							<span className="block leading-3">Shopping</span>
							<span className="text-xs text-gray-400">Jan 10, 2020</span>
						</div>
					</div>

					<div>-$142.00</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
