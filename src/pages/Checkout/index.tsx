import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from "@phosphor-icons/react";
import { useState } from "react";

export function Checkout() {
	const [focused, setFocused] = useState(false);

	function onFocus() {
		setFocused(true);
	}

	function onBlur() {
		setFocused(false);
	}

	return (
		<main className="flex mt-10 gap-8">
			<section>
				<h5 className="text-brown-800 font-title font-bold text-lg leading-130%">
					Complete your order
				</h5>
				<form>
					<section className="flex flex-col gap-8 mt-4 p-10 bg-brown-200 rounded-md">
						<div className="flex gap-2 text-yellow-700">
							<MapPinLine size={22} />
							<div className="flex flex-col gap-0.5">
								<p className="text-base leading-130% text-brown-800">
									Delivery Address
								</p>
								<p className="text-sm leading-130% text-brown-700">
									Provide the address where you would like to receive your order
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Zip Code"
								required
								className="p-3 w-50 rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
							/>
							<input
								type="text"
								placeholder="Address Line 1"
								required
								className="p-3 rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
							/>
							<div className="flex gap-3">
								<input
									type="text"
									placeholder="Number"
									required
									className="p-3 w-50 rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
								/>
								<div
									className={`flex justify-between rounded-smmd bg-brown-300 border-brown-400 border-solid border-1 grow ${focused ? "shadow-2px shadow-purple-500" : ""}`}
								>
									<input
										type="text"
										placeholder="Address Line 2"
										className="p-3 grow text-sm leading-130% bg-transparent placeholder:text-brown-600 text-brown-700 focus:shadow-none"
										onFocus={onFocus}
										onBlur={onBlur}
									/>
									<span className="italic text-xs self-center pr-3 text-brown-600">
										Optional
									</span>
								</div>
							</div>
							<div className="flex gap-3">
								<input
									type="text"
									placeholder="Neighborhood/District"
									className="p-3 w-50 rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
								/>
								<input
									type="text"
									placeholder="City"
									className="p-3 grow rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
								/>
								<input
									type="text"
									placeholder="State"
									className="p-3 w-15 rounded-smmd text-sm leading-130% bg-brown-300 placeholder:text-brown-600 text-brown-700 border-brown-400 border-solid border-1"
									maxLength={2}
								/>
							</div>
						</div>
					</section>
					<section className="flex flex-col gap-8 mt-3 p-10 bg-brown-200 rounded-md">
						<div className="flex gap-2 text-purple-500">
							<CurrencyDollar size={22} />
							<div className="flex flex-col gap-0.5">
								<p className="text-base leading-130% text-brown-800">Payment</p>
								<p className="text-sm leading-130% text-brown-700">
									Payment is made upon delivery. Please choose your preferred
									payment method
								</p>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="flex items-center gap-3 uppercase basis-full text-brown-700 p-3 rounded-smmd bg-brown-400 text-xs leading-160% cursor-pointer">
								<CreditCard size={16} className="text-purple-500" />
								Credit Card
							</div>
							<div className="flex items-center gap-3 uppercase basis-full text-brown-700 p-3 rounded-smmd bg-brown-400 text-xs leading-160% cursor-pointer">
								<Bank size={16} className="text-purple-500" />
								Debit Card
							</div>
							<div className="flex items-center gap-3 uppercase basis-full text-brown-700 p-3 rounded-smmd bg-brown-400 text-xs leading-160% cursor-pointer">
								<Money size={16} className="text-purple-500" />
								Cash
							</div>
						</div>
					</section>
				</form>
			</section>
			<section>
				<h5 className="text-brown-800 font-title font-bold text-lg leading-130%">
					Selected Coffees
				</h5>
				<div className="mt-4">
					<p>CoffeeMiniCard</p>
					<p>CoffeeMiniCard</p>
				</div>
				<div>
					<p>Items total</p>
					<p>Delivery</p>
					<p>Total</p>
					<button type="button">Confirm order</button>
				</div>
			</section>
		</main>
	);
}
