import deliveryImg from "../../assets/coffee-delivery-art.svg";

export function OrderConfirmed() {
	return (
		<main>
			<section>
				<div>
					<h3>Yeah! Order confirmed</h3>
					<p>
						Now just sit back and relax, your coffee will be on its way soon
					</p>
				</div>
				<div>
					<div>
						<div>
							Delivery to <b>Rua João Daniel Martinelli, 102</b>
						</div>
						<div>Farrapos - Porto Alegre, RS</div>
					</div>
					<div>
						<div>Estimated delivery</div>
						<div>
							<b>20 min - 30 min</b>
						</div>
					</div>
					<div>
						<div>Payment on delivery</div>
						<div>
							<b>Credit card</b>
						</div>
					</div>
				</div>
			</section>
			<section>
				<img
					src={deliveryImg}
					alt="A man in a scooter doing coffee deliveries"
				/>
			</section>
		</main>
	);
}
