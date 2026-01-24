import { ArrowDown } from "lucide-react";

function Intro() {
	return (
		<section className="introSection">
			<div className="introSection--bgPatern" />
			<div className="introSection--glowEffect" />
			<div className="introSection__container">
				<p className="introSection__container--firstText">
					Bonjour, je suis
				</p>

				<h1 className="introSection__container--title">
					<span className="firstName">Maxime </span>
					<span className="lastName">Drouhin</span>
				</h1>

				<p className="introSection__container--secondText">
					Développeur Frontend
				</p>

				<p className="introSection__container--thirdText">
					Je crée des expériences web modernes, performantes et élégantes.
					Passionné par le détail et l'innovation.
				</p>

				<div className="introSection__container--buttonsWrapper">
					<a
						className="seeProjectButton"
						href="#projects"
						aria-label="voir mes projets"
					>
						Voir mes projets
					</a>
					<a
						className="contactButton"
						href="#contact"
						aria-label="Voir mes moyens de contact"
					>
						Me contacter
					</a>
				</div>
			</div>
			<a
				href="#about"
				className="scrollIndicator"
				aria-label="Descendre à la section suivante"
			>
				<ArrowDown className="scrollIndicator--arrow" />
			</a>
		</section>
	);
}

export default Intro;
