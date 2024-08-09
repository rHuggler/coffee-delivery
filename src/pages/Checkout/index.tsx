import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Minus,
	Money,
	Plus,
	Trash,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Checkout() {
	const [focused, setFocused] = useState(false);
	const [amount, setAmount] = useState(1);
	const navigate = useNavigate();

	function handleConfirm() {
		navigate("/order-confirmed");
	}

	function onFocus() {
		setFocused(true);
	}

	function onBlur() {
		setFocused(false);
	}

	function increaseAmount() {
		setAmount((state) => {
			if (state < 99) {
				return state + 1;
			}
			return state;
		});
	}

	function decreaseAmount() {
		setAmount((state) => {
			if (state > 1) {
				return state - 1;
			}
			return state;
		});
	}

	return (
		<main className="flex mt-10 gap-8">
			<section className="grow-[7]">
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
			<section className="grow">
				<h5 className="text-brown-800 font-title font-bold text-lg leading-130%">
					Selected Coffees
				</h5>
				<section className="flex flex-col mt-4 gap-6 p-10 bg-brown-200 rounded-md rounded-tr-5.5xl rounded-bl-5.5xl">
					<div className="flex">
						<div className="flex pl-1 py-2 gap-5">
							<img
								src="/coffees/classic-espresso.png"
								alt=""
								className="size-16"
							/>
							<div className="flex flex-col gap-2">
								<p className="text-base leading-130% text-brown-800">
									Classic Espresso
								</p>
								<div className="flex gap-2">
									<div className="flex items-center gap-2 p-2 rounded-md bg-brown-400 text-brown-900 text-base leading-130%">
										<button
											type="button"
											className="text-purple-500 relative px-1 py-2 -m-1"
											onClick={decreaseAmount}
										>
											<Minus size={14} weight="bold" />
										</button>
										<span className="text-brown-900">{amount}</span>
										<button
											type="button"
											className="text-purple-500 relative px-1 py-2 -m-1"
											onClick={increaseAmount}
										>
											<Plus size={14} weight="bold" />
										</button>
									</div>
									<div className="flex items-center gap-1 p-2 rounded-md bg-brown-400 text-brown-900 text-base leading-130%">
										<button
											type="button"
											className="text-purple-500"
											onClick={decreaseAmount}
										>
											<Trash size={16} />
										</button>
										<span className="uppercase text-xs leading-160% text-brown-700">
											Remove
										</span>
									</div>
								</div>
							</div>
							<p className="text-brown-700 text-base leading-130% font-bold pl-12 text-nowrap">
								$ 9.90
							</p>
						</div>
					</div>
					<div className="border-b-1 border-brown-400" />
					<div className="flex">
						<div className="flex pl-1 py-2 gap-5">
							<img src="/coffees/latte.png" alt="" className="size-16" />
							<div className="flex flex-col gap-2">
								<p className="text-base leading-130% text-brown-800">Latte</p>
								<div className="flex gap-2">
									<div className="flex items-center gap-2 p-2 rounded-md bg-brown-400 text-brown-900 text-base leading-130%">
										<button
											type="button"
											className="text-purple-500 relative px-1 py-2 -m-1"
											onClick={decreaseAmount}
										>
											<Minus size={14} weight="bold" />
										</button>
										<span className="text-brown-900">{amount}</span>
										<button
											type="button"
											className="text-purple-500 relative px-1 py-2 -m-1"
											onClick={increaseAmount}
										>
											<Plus size={14} weight="bold" />
										</button>
									</div>
									<div className="flex items-center gap-1 p-2 rounded-md bg-brown-400 text-brown-900 text-base leading-130%">
										<button
											type="button"
											className="text-purple-500"
											onClick={decreaseAmount}
										>
											<Trash size={16} />
										</button>
										<span className="uppercase text-xs leading-160% text-brown-700">
											Remove
										</span>
									</div>
								</div>
							</div>
							<p className="text-brown-700 text-base leading-130% font-bold pl-12">
								$ 9.90
							</p>
						</div>
					</div>
					<div className="border-b-1 border-brown-400" />
					<div className="flex flex-col gap-4">
						<div className="flex justify-between text-sm leading-130%">
							<p>Items total</p>
							<p>$ 29,70</p>
						</div>
						<div className="flex justify-between text-sm leading-130%">
							<p>Delivery</p>
							<p>$ 3,50</p>
						</div>
						<div className="flex justify-between font-bold text-xl leading-130%">
							<p>Total</p>
							<p>$ 33,20</p>
						</div>
					</div>
					<button
						type="button"
						className="p-3 bg-yellow-500 text-white font-bold uppercase text-sm leading-160% rounded-md"
						onClick={handleConfirm}
					>
						Confirm order
					</button>
				</section>
			</section>
		</main>
	);
}
