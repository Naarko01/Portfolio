import ProjectCard from "../ProjectCard";

const projects = [
	{
		title: "Portfolio d'architecte",
		description:
			"Le portfolio de l'architecte d'intérieur Sophie Bluel avec présentation de ses projets et ses prestations. Une connexion administrateur est possible avec un backend pour modifier / supprimer / ajouter des projets",
		tags: ["Javascript", "CSS", "Node.js"],
		image: "./src/assets/sophie_bluel.webp",
		githubUrl: "https://github.com/Naarko01/OC_Projet_6",
	},
	{
		title: "App web bancaire",
		description:
			"Application bancaire d'ArgentBank, permettant la connexion des clients à leurs comptes, la consultation et l'annotation de leurs transactions",
		tags: ["React", "Redux", "CSS", "Node.js"],
		image: "./src/assets/argent-bank.webp",
		liveUrl: "https://naarko01.github.io/ArgentBank/",
		githubUrl: "https://github.com/Naarko01/ArgentBank/tree/main",
	},
	{
		title: "App de recherche et location d'appartement",
		description:
			"Application d'agence immobilière, Kasa, proposant des appartements à la location.",
		tags: ["React", "SCSS", "Node.js"],
		image: "./src/assets/kasa.webp",
		liveUrl: "https://naarko01.github.io/Kasa/",
		githubUrl: "https://github.com/Naarko01/Kasa",
	},
	{
		title: "Site Portfolio Créatif",
		description:
			"Portfolio artistique avec animations WebGL et transitions fluides pour une photographe.",
		tags: ["Javascript", "SCSS"],
		image: "./src/assets/ohmyfood.webp",
		liveUrl: "https://naarko01.github.io/OhMyFood/",
		githubUrl: "https://github.com/Naarko01/OhMyFood",
	},
];

function Projects() {
	return (
		<section id="projects" className="projects">
			<div className="projects__container">
				<div className="projects__container--header">
					<p className="projects__container--header-title">02 — Projets</p>
					<h2 className="projects__container--header-content">
						Travaux{" "}
						<span className="projects__container--header-content-accent">
							récents
						</span>
					</h2>
				</div>

				<div className="projects__container--cardsWrapper">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
