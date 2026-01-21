function About() {
	const skills = [
		"React",
		"TypeScript",
		"Next.js",
		"Tailwind CSS",
		"Node.js",
		"GraphQL",
		"Figma",
		"Git",
	];

	return (
		<section id="about" className="aboutSection">
			<div className="aboutSection__mainContainer">
				<div className="aboutSection__gridContainer">
					<div>
						<p className="aboutSection__gridContainer--firstText">
							01 — À propos
						</p>
						<h2 className="aboutSection__gridContainer--title">
							Créer des interfaces qui
							<span className="titleAccent"> marquent</span>
						</h2>
						<div className="aboutSection__gridContainer--secondText">
							<p>
								Développeur frontend passionné avec plus de X années
								d'expérience dans la création d'applications web
								modernes. Je me spécialise dans React et l'écosystème
								JavaScript.
							</p>
							<p>
								Mon approche combine rigueur technique et sensibilité
								design pour livrer des produits qui allient performance
								et esthétique. J'accorde une attention particulière aux
								détails et à l'expérience utilisateur.
							</p>
							<p>
								Actuellement disponible pour des missions freelance et
								des collaborations sur des projets innovants.
							</p>
						</div>
					</div>
					<div className="aboutSection__gridContainer__skillsList">
						<div className="aboutSection__gridContainer__skillsList--container">
							<p>Technologies</p>
							<div className="aboutSection__gridContainer__skillsList--wrapper">
								{skills.map((skill) => (
									<span
										key={skill}
										className="aboutSection__gridContainer__skillsList--item"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
