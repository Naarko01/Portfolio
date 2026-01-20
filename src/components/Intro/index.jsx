import { ArrowDown } from "lucide-react";

function Intro() {
	return (
		<section className="introSection">
			{/* Subtle background pattern */}
			<div className="introSection--bgPatern" />

			{/* Glow effect */}
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
					<a className="seeProjectButton" href="#projects">
						Voir mes projets
					</a>
					<a className="contactButton" href="#contact">
						Me contacter
					</a>
				</div>
			</div>
			<a href="#about" className="scrollIndicator">
				<ArrowDown className="scrollIndicator--arrow" />
			</a>
		</section>
	);
}

export default Intro;
