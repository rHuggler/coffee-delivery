import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { OrderConfirmed } from "./pages/OrderConfirmed";
import { DefaultLayout } from "./pages/layouts/DefaultLayout";
import { HeroLayout } from "./pages/layouts/HeroLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<HeroLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/order-confirmed" element={<OrderConfirmed />} />
			</Route>
		</Routes>
	);
}
