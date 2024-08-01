import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import heroImg from "../assets/hero-img.svg";

export function Hero() {
	return (
		<section className="bg-hero-bg py-23">
			<main className="max-w-8xl mx-auto px-40 flex justify-between items-center gap-14">
				<div id="left-column" className="flex flex-col justify-between gap-16">
					<header className="flex flex-col gap-4">
						<h1 className="font-title text-5xl leading-130% font-extrabold text-brown-900">
							Discover the perfect coffee for any time of day
						</h1>
						<p className="text-xl leading-130% text-brown-800">
							With coffee delivery you enjoy your coffee anytime, anywhere
						</p>
					</header>
					<div id="icon-grid" className="flex flex-col gap-5 text-brown-700">
						<div id="icon-grid-row-1" className="flex">
							<div className="flex gap-3 justify-start items-center flex-1">
								<div className="flex justify-center items-center p-2 rounded-full bg-yellow-700 text-brown-100">
									<ShoppingCart size={16} weight="fill" />
								</div>
								<p>Simple and secure shopping</p>
							</div>
							<div className="flex gap-3 justify-start items-center flex-1">
								<div className="flex justify-center items-center p-2 rounded-full bg-brown-700 text-brown-100">
									<Package size={16} weight="fill" />
								</div>
								<p>Packaging keeps your coffee intact</p>
							</div>
						</div>
						<div id="icon-grid-row-1" className="flex">
							<div className="flex gap-3 justify-start items-center flex-1">
								<div className="flex justify-center items-center p-2 rounded-full bg-yellow-500 text-brown-100">
									<Timer size={16} weight="fill" />
								</div>
								<p>Fast, trackable delivery</p>
							</div>
							<div className="flex gap-3 justify-start items-center flex-1">
								<div className="flex justify-center items-center p-2 rounded-full bg-purple-500 text-brown-100">
									<Coffee size={16} weight="fill" />
								</div>
								<p>Your coffee arrives fresh</p>
							</div>
						</div>
					</div>
				</div>
				<aside className="flex-shrink-0">
					<img
						src={heroImg}
						alt="A cup of coffee from Coffee Delivery with coffee beans around it"
						className=""
					/>
				</aside>
			</main>
		</section>
	);
}
