export function Checkout() {
	return (
		<main>
			<section>
				<form>
					<section>
						<h5>Complete your order</h5>
						<p>Delivery Address</p>
						<p>
							Provide the address where you would like to receive your order
						</p>
						<input type="text" placeholder="Zip Code" required />
						<input type="text" placeholder="Address Line 1" required />
						<div>
							<input type="text" placeholder="Number" required />
							<input type="text" placeholder="Address Line 2" />
						</div>
						<div>
							<input type="text" placeholder="Neighborhood/District" />
							<input type="text" placeholder="City" />
							<input type="text" placeholder="State" />
						</div>
					</section>
					<section>
						<p>Payment</p>
						<p>
							Payment is made upon delivery. Please choose your preferred
							payment method
						</p>
						<div>Credit Card</div>
						<div>Debit Card</div>
						<div>Cash</div>
					</section>
				</form>
			</section>
			<section>
				<h5>Selected Coffees</h5>
				<div>
					<p>CoffeeMiniCard</p>
					<p>CoffeeMiniCard</p>
				</div>
				<div>
					<p>Items total</p>
					<p>Delivery</p>
					<p>Total</p>
					<button type="button">Confirm order</button>
				</div>
			</section>
		</main>
	);
}
