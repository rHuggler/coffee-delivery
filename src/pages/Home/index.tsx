import { ShoppingCart } from "@phosphor-icons/react";

const coffeeList = [
	{
		name: "Classic Espresso",
		description: "The classic espresso made with hot water and ground beans",
		price: 990,
		tags: ["Classic"],
	},
	{
		name: "American Espresso",
		description: "A diluted espresso, less intense than the traditional",
		price: 990,
		tags: ["Classic"],
	},
	{
		name: "Creamy Espresso",
		description: "Traditional espresso with a creamy foam",
		price: 990,
		tags: ["Classic"],
	},
	{
		name: "Cold Espresso",
		description: "A drink made with espresso and ice cubes",
		price: 990,
		tags: ["Classic", "Cold"],
	},
	{
		name: "Coffee with Milk",
		description: "Half and half of traditional espresso and steamed milk",
		price: 990,
		tags: ["Classic", "With Milk"],
	},
];

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
