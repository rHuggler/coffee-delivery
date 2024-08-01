import { ShoppingCart } from "@phosphor-icons/react";

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
	return (
		<div>
			<img src={imageUrl} alt="" />
			<header>
				{tags.map((t) => (
					<p key={t}>{t}</p>
				))}
			</header>
			<h5>{name}</h5>
			<p>{description}</p>
			<footer>
				<p>R$ {price}</p>
				<input type="number" name="" id="" />
				<div>
					<ShoppingCart size={24} weight="fill" />
				</div>
			</footer>
		</div>
	);
}
