import { CoffeeCard } from "./components/CoffeeCard";

const coffeeList = [
	{
		name: "Classic Espresso",
		description: "The classic espresso made with hot water and ground beans",
		price: 990,
		tags: ["Classic"],
		imageUrl: "https://placehold.co/120x120",
	},
	{
		name: "American Espresso",
		description: "A diluted espresso, less intense than the traditional",
		price: 990,
		tags: ["Classic"],
		imageUrl: "https://placehold.co/120x120",
	},
	{
		name: "Creamy Espresso",
		description: "Traditional espresso with a creamy foam",
		price: 990,
		tags: ["Classic"],
		imageUrl: "https://placehold.co/120x120",
	},
	{
		name: "Cold Espresso",
		description: "A drink made with espresso and ice cubes",
		price: 990,
		tags: ["Classic", "Cold"],
		imageUrl: "https://placehold.co/120x120",
	},
	{
		name: "Coffee with Milk",
		description: "Half and half of traditional espresso and steamed milk",
		price: 990,
		tags: ["Classic", "With Milk"],
		imageUrl: "https://placehold.co/120x120",
	},
];

export function Home() {
	return (
		<main>
			<h3>Our coffees</h3>
			<div id="coffee-list-grid">
				{coffeeList.map((c) => (
					<CoffeeCard key={c.name} {...c} />
				))}
			</div>
		</main>
	);
}
