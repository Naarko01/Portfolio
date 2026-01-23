import { useEffect, useState } from "react";
import myCv from "../../assets/CV_Maxime_DROUHIN.pdf";

function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 2);
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
		<header
			className={`header-container ${scrolled ? "scrolled" : "default"}`}
		>
			<div className="nav-container">
				<a href="#" className="nav-container__home-link">
					{"<Dev />"}
				</a>

				<nav className="nav-container__navbar">
					{navLinks.map((link) => (
						<a
							className="nav-container__navbar--links"
							key={link.href}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</nav>
				<a
					href={myCv}
					target="_blank"
					rel="noopener noreferrer"
					className="nav-container__navbar--cv"
				>
					Voir mon CV
				</a>
			</div>
		</header>
	);
}

export default Header;
