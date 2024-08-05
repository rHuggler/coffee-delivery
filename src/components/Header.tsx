import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import coffeeLogo from "../assets/coffee-logo.svg";

export function Header() {
	return (
		<header className="flex justify-between items-center py-8">
			<NavLink to="/" title="Home">
				<img src={coffeeLogo} alt="Coffee delivery logo" />
			</NavLink>
			<nav className="flex gap-3">
				<div className="flex gap-1 bg-purple-300 p-2 rounded-md text-purple-500 cursor-pointer">
					<MapPin size={22} weight="fill" />
					<span className="text-purple-700">Location</span>
				</div>
				<NavLink to="/checkout" title="Checkout">
					<div className="bg-yellow-300 p-2 rounded-md text-yellow-700 cursor-pointer">
						<ShoppingCart size={22} weight="fill" />
					</div>
				</NavLink>
			</nav>
		</header>
	);
}
