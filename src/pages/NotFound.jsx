import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
	const location = useLocation();

	useEffect(() => {
		console.error(`Erreur 404: Le chemin ${location.pathname} n'existe pas`);
	}, [location.pathname]);

	return (
		<div>
			<div>
				<h1>404</h1>
				<p> Oops! Cette page n'existe pas</p>
				<a href="/">Retourner à l'accueil</a>
			</div>
		</div>
	);
}

export default NotFound;
