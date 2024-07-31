import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
	return (
		<main className="max-w-8xl mx-auto px-40">
			<Header />
			<Outlet />
		</main>
	);
}
