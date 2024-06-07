import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoadingScreen from "./components/loadingscreen/LoadingScreen";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1800);
	}, []);

	const handleScroll = (event, targetId) => {
		event.preventDefault();
		const target = document.getElementById(targetId);
		const isMobile = window.innerWidth <= 768;
		const offset = isMobile
			? 0
			: window.innerHeight / 2 - target.offsetHeight / 2;

		window.scrollTo({
			top: target.offsetTop - offset,
			behavior: "smooth",
		});
	};

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<main className='firstcontain'>
					<div className='secondcontain'>
						<Header handleScroll={handleScroll} />

						<Main />
					</div>
					<About />
					<Skill />
					<Projects />
					<Contact />
					<Footer />
				</main>
			)}
		</>
	);
}

export default App;
