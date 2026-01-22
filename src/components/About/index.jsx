function About() {
	const skills = ["React", "Redux", "Node.js", "SASS", "Figma", "Git"];

	return (
		<section id="about" className="aboutSection">
			<div className="aboutSection__mainContainer">
				<div className="aboutSection__gridContainer">
					<div>
						<p className="aboutSection__gridContainer--firstText">
							01 — À propos
						</p>
						<h2 className="aboutSection__gridContainer--title">
							Créer des interfaces
							<span className="titleAccent"> modernes</span>
						</h2>
						<div className="aboutSection__gridContainer--secondText">
							<p>
								Développeur frontend passionné dans la création
								d'applications, principalement web, modernes et
								efficaces. Je me spécialise dans React et l'écosystème
								JavaScript.
							</p>
							<p>
								Mon approche combine rigueur technique et sensibilité
								design pour livrer des produits qui allient performance
								et esthétique. J'accorde une attention particulière aux
								détails et à l'expérience utilisateur.
							</p>
							<p>
								Actuellement disponible pour un emploi et des
								collaborations sur des projets de toute sorte.
								J'apprécie particulièrement le travail en équipe.
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
