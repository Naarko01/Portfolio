import { useState } from "react";
import Modal from "react-modal";
import { XCircleIcon } from "lucide-react";

Modal.setAppElement("#root");

function Footer() {
	const [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__container__content">
					<p className="footer__container__content--text">
						{"<"} Conçu & développé avec{" "}
						<span className="footer__container__content--text-accent">
							passion
						</span>{" "}
						{" />"}
					</p>
					<a
						className="footer__container__content--modal"
						onClick={() => setIsOpen(true)}
					>
						Mentions Légales
					</a>
					<Modal
						isOpen={isOpen}
						onRequestClose={closeModal}
						contentLabel="Mentions Légales"
						className="modal"
						overlayClassName="overlay"
						shouldFocusAfterRender={false}
					>
						<div className="legals">
							<XCircleIcon
								className="legals__close"
								onClick={closeModal}
							/>
							<article className="legals__info">
								<h1>MENTIONS LÉGALES</h1>
								<p>
									Conformément aux dispositions de la loi n° 2004-575
									du 21 juin 2004 pour la confiance en l'économie
									numérique, il est précisé aux utilisateurs du site
									maxime-dev-portfolio l'identité des différents
									intervenants dans le cadre de sa réalisation et de
									son suivi.
								</p>
							</article>
							<article>
								<h2>Edition du site </h2>
								<p>
									Le présent site, accessible à l'URL
									https://maxime-dev-portfolio.vercel.app/, est édité
									par : Maxime Drouhin, résidant 6 Rue de la Tour,
									71420 Genelard, de nationalité Française, né le
									03/06/1996,
								</p>
							</article>
							<article>
								<h2>Hébergement</h2>
								<p>
									Le Site est hébergé par la société Vercel, situé
									Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
									91723, États-Unis, (contact téléphonique :
									+15592887060).
								</p>
							</article>
							<article>
								<h2>Directeur de publication </h2>
								<p>
									Le Directeur de la publication du Site est Maxime
									Drouhin.
								</p>
							</article>
							<article className="legals__contact">
								<h2>Nous contacter </h2>
								<ul>
									<li>Par téléphone : +33610918569</li>
									<li>Par email : maxime.drouhin71@gmail.com</li>
									<li>
										Par courrier : 6 Rue de la Tour, 71420 Genelard
									</li>
								</ul>
							</article>
						</div>
					</Modal>
					<p>© {new Date().getFullYear()} — Tous droits réservés</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
