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
		<section id="about" className="">
			<div className="">
				<div className="">
					<div>
						<p className="">01 — À propos</p>
						<h2 className="">
							Créer des interfaces qui<span className="">marquent</span>
						</h2>
						<div className=" ">
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
					<div className="">
						<div className="">
							<p className="">Technologies</p>
							<div className="">
								{skills.map((skill) => (
									<span key={skill} className="">
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
