import coffeeLogo from "../assets/coffee-logo.svg";

export function Header() {
	return (
		<header>
			<img src={coffeeLogo} alt="Coffee delivery logo" />
		</header>
	);
}
