import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Index() {
	return (
		<div>
			<Header />
			<main>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default Index;
