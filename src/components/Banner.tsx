import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeeArt from "../assets/coffee-art.svg";

export function Banner() {
	return (
		<main>
			<div>
				<header>
					<p>Discover the perfect coffee for any time of day</p>
					<p>With coffee delivery you enjoy your coffee anytime, anywhere</p>
				</header>
				<div>
					<div>
						<div>
							<ShoppingCart size={24} weight="fill" />
						</div>
						<p>Simple and secure shopping</p>
					</div>
					<div>
						<div>
							<Timer size={24} weight="fill" />
						</div>
						<p>Fast, trackable delivery</p>
					</div>
					<div>
						<div>
							<Package size={24} weight="fill" />
						</div>
						<p>Packaging keeps your coffee intact</p>
					</div>
					<div>
						<div>
							<Coffee size={24} weight="fill" />
						</div>
						<p>Your coffee arrives fresh</p>
					</div>
				</div>
			</div>
			<aside>
				<img
					src={coffeeArt}
					alt="A cup of coffee from Coffee Delivery with coffee beans around it"
				/>
			</aside>
		</main>
	);
}
