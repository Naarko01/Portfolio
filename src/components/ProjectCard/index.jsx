import { ExternalLink, Github } from "lucide-react";

function ProjectCard({
	title,
	description,
	tags,
	image,
	liveUrl,
	githubUrl,
	putAhead,
}) {
	return (
		<article className={`projectCard ${putAhead ? "ahead" : ""}`}>
			{/* Image */}
			<div className="projectCard__image">
				<img src={image} alt={title} />
				<div className="projectCard__image--filter" />
			</div>

			{/* Content */}
			<div className="projectCard__content">
				<div className="projectCard__content__header">
					<h3 className="projectCard__content__header--title">{title}</h3>
					<div className="projectCard__content__header--links">
						{githubUrl && (
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="githubLink"
								aria-label="Voir le code source"
							>
								<Github className="githubLink--logo" />
							</a>
						)}
						{liveUrl && (
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="externalLink"
								aria-label="Voir le projet en ligne"
							>
								<ExternalLink className="externalLink--logo" />
							</a>
						)}
					</div>
				</div>

				<p className="projectCard__content__description">{description}</p>

				<div className="projectCard__content__tags">
					{tags.map((tag) => (
						<span key={tag} className="projectCard__content__tags--item">
							{tag}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}

export default ProjectCard;
