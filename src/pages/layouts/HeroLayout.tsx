import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";

export function HeroLayout() {
	return (
		<div>
			<section className="max-w-8xl mx-auto px-40">
				<Header />
			</section>
			<Hero />
			<section className="max-w-8xl mx-auto px-40">
				<Outlet />
			</section>
		</div>
	);
}
