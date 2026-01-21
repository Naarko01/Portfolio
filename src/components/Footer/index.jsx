function Footer() {
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
					<p>© {new Date().getFullYear()} — Tous droits réservés</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
