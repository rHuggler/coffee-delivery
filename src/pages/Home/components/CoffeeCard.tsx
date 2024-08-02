import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

interface CoffeeCardProps {
	imageUrl: string;
	name: string;
	description: string;
	price: number;
	tags: string[];
}

export function CoffeeCard({
	imageUrl,
	name,
	description,
	price,
	tags,
}: CoffeeCardProps) {
	const [amount, setAmount] = useState(1);

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
		<div className="w-64 h-[calc(20rem-0.625rem)] bg-brown-200 flex flex-col items-stretch text-sm leading-130% rounded-tl-md rounded-br-md rounded-tr-4.5xl rounded-bl-4.5xl text-brown-700">
			<img
				src={`/coffees/${imageUrl}`}
				alt=""
				className="h-30 w-30 -mt-5 self-center"
			/>
			<header className="flex gap-1 self-center mt-3">
				{tags.map((t) => (
					<div key={t} className="rounded-full bg-yellow-300">
						<p
							key={t}
							className="px-2 py-1 text-2xs leading-130% font-bold uppercase text-yellow-700"
						>
							{t}
						</p>
					</div>
				))}
			</header>
			<h5 className="self-center mt-4 px-5 font-title font-bold text-xl leading-130%">
				{name}
			</h5>
			<p className="self-center mt-2 px-5 text-center text-brown-600">
				{description}
			</p>
			<footer className="flex items-center justify-between mt-auto mb-5 px-6">
				<p>
					<span>R$</span>{" "}
					<span className="font-title font-extrabold text-2xl leading-130%">
						{(price / 100).toFixed(2).replace(".", ",")}
					</span>
				</p>
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-2 p-2 rounded-md bg-brown-400 text-brown-900 text-base leading-130%">
						<button
							type="button"
							className="text-purple-500 relative px-2 py-3 -m-2"
							onClick={decreaseAmount}
						>
							<Minus size={14} weight="bold" />
						</button>
						<span>{amount}</span>
						<button
							type="button"
							className="text-purple-500 relative px-2 py-3 -m-2"
							onClick={increaseAmount}
						>
							<Plus size={14} weight="bold" />
						</button>
					</div>
					<div className="p-2 rounded-md bg-purple-700 text-brown-200">
						<ShoppingCart size={24} weight="fill" />
					</div>
				</div>
			</footer>
		</div>
	);
}
