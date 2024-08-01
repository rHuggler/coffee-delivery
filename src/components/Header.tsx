import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeeLogo from "../assets/coffee-logo.svg";

export function Header() {
	return (
		<header className="flex justify-between items-center py-8">
			<img src={coffeeLogo} alt="Coffee delivery logo" />
			<nav className="flex gap-3">
				<div className="flex bg-purple-300 p-2 rounded-md">
					<MapPin size={24} weight="fill" />
					<span>Location</span>
				</div>
				<div className="bg-yellow-300 p-2 rounded-md">
					<ShoppingCart size={24} weight="fill" />
				</div>
			</nav>
		</header>
	);
}
