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
		{
			label: "À propos",
			href: "#about",
			description: "Lien vers la section À propos",
		},
		{
			label: "Projets",
			href: "#projects",
			description: "Lien vers la section projets",
		},
		{
			label: "Contact",
			href: "#contact",
			description: "Lien vers la section contact",
		},
	];

	return (
		<header
			className={`header-container ${scrolled ? "scrolled" : "default"}`}
		>
			<div className="nav-container">
				<a
					href="#"
					className="nav-container__home-link"
					aria-label="Recharger la page"
				>
					{"<Dev />"}
				</a>

				<nav className="nav-container__navbar">
					{navLinks.map((link) => (
						<a
							className="nav-container__navbar--links"
							key={link.href}
							href={link.href}
							aria-label={link.description}
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
					aria-label="Lien vers mon CV"
				>
					Voir mon CV
				</a>
			</div>
		</header>
	);
}

export default Header;
