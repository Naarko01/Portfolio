import { useEffect, useState } from "react";

function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: "À propos", href: "#about" },
		{ label: "Projets", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<header className={scrolled ? "scrolledHeader" : "defaultHeader"}>
			<div>
				<a href="#">{"<Dev />"}</a>
			</div>
			<nav>
				{navLinks.map((link) => (
					<a key={link.href} href={link.href}>
						{link.label}
					</a>
				))}
			</nav>
		</header>
	);
}

export default Header;
