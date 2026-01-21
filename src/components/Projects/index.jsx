import ProjectCard from "../ProjectCard";

const projects = [
	{
		title: "Application E-commerce",
		description:
			"Une plateforme e-commerce moderne avec panier, paiement Stripe et gestion des commandes. Interface fluide et responsive.",
		tags: ["React", "Next.js", "Stripe", "Tailwind"],
		image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
		liveUrl: "#",
		githubUrl: "#",
		putAhead: true,
	},
	{
		title: "Dashboard Analytics",
		description:
			"Tableau de bord interactif pour visualiser des données complexes avec graphiques et filtres dynamiques.",
		tags: ["TypeScript", "React", "D3.js", "Node.js"],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "App Mobile Fitness",
		description:
			"Application de suivi fitness avec programmes personnalisés et statistiques de progression.",
		tags: ["React Native", "Firebase", "TypeScript"],
		image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop",
		liveUrl: "#",
	},
	{
		title: "Site Portfolio Créatif",
		description:
			"Portfolio artistique avec animations WebGL et transitions fluides pour une photographe.",
		tags: ["Three.js", "GSAP", "React"],
		image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
		githubUrl: "#",
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
