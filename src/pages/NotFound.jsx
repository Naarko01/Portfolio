import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
	const location = useLocation();

	useEffect(() => {
		console.error(`Erreur 404: Le chemin ${location.pathname} n'existe pas`);
	}, [location.pathname]);

	return (
		<div className="notFound">
			<div className="notFound__text-container">
				<h1 className="notFound__text-container--title">404</h1>
				<p className="notFound__text-container--text">
					Oops! Cette page n'existe pas
				</p>
				<a
					className="notFound__text-container--link"
					href="/"
					aria-label="Retourner à la page principale"
				>
					Retourner à l'accueil
				</a>
			</div>
		</div>
	);
}

export default NotFound;
