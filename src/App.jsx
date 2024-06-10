// import { useEffect, useState } from "react";
// import "./App.css";
// import About from "./components/about/About";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
// import LoadingScreen from "./components/loadingscreen/LoadingScreen";
// import Main from "./components/main/Main";
// import Projects from "./components/projects/Projects";
// import Skill from "./components/skills/Skill";
// import Contact from "./components/contact/Contact";

// function App() {
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setLoading(false);
// 		}, 1800);
// 	}, []);

// 	return (
// 		<div className='topMain'>
// 			{loading ? (
// 				<LoadingScreen />
// 			) : (
// 				<main className='firstcontain'>
// 					<div className='secondcontain'>
// 						<Header />
// 						<Main />
// 					</div>
// 					<About />
// 					<Skill />
// 					<Projects />
// 					<Contact />
// 					<Footer />
// 				</main>
// 			)}
// 		</div>
// 	);
// }

// export default App;

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

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<main className='firstcontain'>
					<img src='./images/bg10.jpg' alt='' className='bg' />
					<div className='secondcontain'>
						<Header />
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
