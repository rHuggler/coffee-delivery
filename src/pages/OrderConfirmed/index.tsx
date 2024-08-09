import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import deliveryImg from "../../assets/coffee-delivery-art.svg";

export function OrderConfirmed() {
	return (
		<main className="flex gap-25.5 mt-20">
			<section>
				<div className="flex flex-col gap-1">
					<h3 className="font-title font-extrabold text-yellow-700 text-3.5xl leading-130%">
						Yeah! Order confirmed
					</h3>
					<p className="text-xl leading-130% text-brown-800">
						Now just sit back and relax, your coffee will be on its way soon
					</p>
				</div>
				<div className="mt-10 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-md rounded-tr-4.5xl rounded-bl-4.5xl p-px">
					<div className="flex flex-col gap-8 p-10 rounded-[calc(0.375rem-1px)] rounded-tr-[calc(2.25rem-1px)] rounded-bl-[calc(2.25rem-1px)] bg-brown-100">
						<div className="flex gap-3 items-center">
							<div className="flex w-8 h-8 bg-purple-500 justify-center items-center text-brown-100 rounded-full">
								<MapPin size={16} weight="fill" />
							</div>
							<div className="flex flex-col text-base leading-130% text-brown-700">
								<p>
									Delivery to <b>Rua João Daniel Martinelli, 102</b>
								</p>
								<p>Farrapos - Porto Alegre, RS</p>
							</div>
						</div>
						<div className="flex gap-3 items-center">
							<div className="flex w-8 h-8 bg-yellow-500 justify-center items-center text-brown-100 rounded-full">
								<Timer size={16} weight="fill" />
							</div>
							<div className="flex flex-col text-base leading-130% text-brown-700">
								<p>Estimated delivery</p>
								<p>
									<b>20 min - 30 min</b>
								</p>
							</div>
						</div>
						<div className="flex gap-3 items-center">
							<div className="flex w-8 h-8 bg-yellow-700 justify-center items-center text-brown-100 rounded-full">
								<CurrencyDollar size={16} />
							</div>
							<div className="flex flex-col text-base leading-130% text-brown-700">
								<p>Payment on delivery</p>
								<p>
									<b>Credit card</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="shrink-0 mt-25">
				<img
					src={deliveryImg}
					alt="A man in a scooter doing coffee deliveries"
				/>
			</section>
		</main>
	);
}
