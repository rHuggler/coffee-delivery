import { CoffeeCard } from "./components/CoffeeCard";

const coffeeList = [
	{
		name: "Classic Espresso",
		description: "The classic espresso made with hot water and ground beans",
		price: 990,
		tags: ["Classic"],
		imageUrl: "classic-espresso.png",
	},
	{
		name: "American Espresso",
		description: "A diluted espresso, less intense than the traditional",
		price: 990,
		tags: ["Classic"],
		imageUrl: "american-espresso.png",
	},
	{
		name: "Creamy Espresso",
		description: "Traditional espresso with a creamy foam",
		price: 990,
		tags: ["Classic"],
		imageUrl: "creamy-espresso.png",
	},
	{
		name: "Cold Espresso",
		description: "A drink made with espresso and ice cubes",
		price: 990,
		tags: ["Classic", "Cold"],
		imageUrl: "cold-espresso.png",
	},
	{
		name: "Coffee with Milk",
		description: "Half and half of traditional espresso and steamed milk",
		price: 990,
		tags: ["Classic", "With Milk"],
		imageUrl: "coffee-with-milk.png",
	},
];

export function Home() {
	return (
		<main className="mt-8">
			<h1 className="font-title text-3.5xl leading-130% font-extrabold text-brown-800">
				Our coffees
			</h1>
			<div
				id="coffee-list-grid"
				className="mt-13 grid grid-cols-4 gap-y-10 gap-x-8"
			>
				{coffeeList.map((c) => (
					<CoffeeCard key={c.name} {...c} />
				))}
			</div>
		</main>
	);
}
