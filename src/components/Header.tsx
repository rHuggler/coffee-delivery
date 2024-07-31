import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import coffeeLogo from "../assets/coffee-logo.svg";

export function Header() {
	return (
		<header>
			<img src={coffeeLogo} alt="Coffee delivery logo" />
			<nav>
				<MapPin size={24} weight="fill" />
				<ShoppingCart size={24} weight="fill" />
			</nav>
		</header>
	);
}
