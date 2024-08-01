import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeroLayout } from "./pages/layouts/HeroLayout";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<HeroLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
}
