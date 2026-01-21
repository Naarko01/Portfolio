/* eslint-disable no-unused-vars */
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
	const socials = [
		{ icon: Github, href: "#", label: "GitHub" },
		{ icon: Linkedin, href: "#", label: "LinkedIn" },
	];

	return (
		<section id="contact" className="contact">
			<div className="contact__container">
				<div className="contact__wrapper">
					<p className="contact__wrapper--title">03 — Contact</p>
					<h2 className="contact__wrapper--hook">
						Travaillons{" "}
						<span className="contact__wrapper--hook-accent">
							ensemble
						</span>
					</h2>
					<p className="contact__wrapper--description">
						Vous avez un projet en tête ? Je suis actuellement disponible
						pour un emploi et ouvert aux opportunités intéressantes.
						N'hésitez pas à me contacter !
					</p>

					<a className="contact__wrapper--mail">
						<Mail className="contact__wrapper--mail-icon" />
						maxime.drouhin71@gmail.com
					</a>
					<div className="contact__wrapper__socials">
						{socials.map(({ icon: Icon, href, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="contact__wrapper__socials--link"
								aria-label={label}
							>
								<Icon className="contact__wrapper__socials--link-logo" />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
