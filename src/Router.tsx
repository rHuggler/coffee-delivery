import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./pages/layouts/DefaultLayout";
import { HeroLayout } from "./pages/layouts/HeroLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<HeroLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/checkout" element={<DefaultLayout />}>
				<Route path="/checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
}
