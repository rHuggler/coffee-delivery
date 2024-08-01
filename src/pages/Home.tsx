import { ShoppingCart } from "@phosphor-icons/react";

export function Home() {
	return (
		<main>
			<h3>Our coffees</h3>
			<div>
				<img src="https://placehold.co/120x120" alt="" />
				<header>
					<p>Classic</p>
				</header>
				<h5>Classic Espresso</h5>
				<p>The classic espresso made with hot water and ground beans</p>
				<footer>
					<p>R$ 9,90</p>
					<input type="number" name="" id="" />
					<div>
						<ShoppingCart size={24} weight="fill" />
					</div>
				</footer>
			</div>
		</main>
	);
}
