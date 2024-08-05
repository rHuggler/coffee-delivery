import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeeLogo from "../assets/coffee-logo.svg";

export function Header() {
	return (
		<header className="flex justify-between items-center py-8">
			<img src={coffeeLogo} alt="Coffee delivery logo" />
			<nav className="flex gap-3">
				<div className="flex gap-1 bg-purple-300 p-2 rounded-md text-purple-500">
					<MapPin size={22} weight="fill" />
					<span className="text-purple-700">Location</span>
				</div>
				<div className="bg-yellow-300 p-2 rounded-md text-yellow-700">
					<ShoppingCart size={22} weight="fill" />
				</div>
			</nav>
		</header>
	);
}
