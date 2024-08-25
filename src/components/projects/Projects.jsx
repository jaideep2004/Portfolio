import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Slider from "./Slider";

const Projects = () => {
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			// Do something when the Projects component comes into view
			console.log("Projects component is in view");
		}
	}, [inView]);

	const slides = [
		{
			title: "NGO Website",
			description:
				"NGO Website built using Wordpress and using plugins like WPForms Lite",
			image: "./images/pr1.png",
			link: "https://ggsvidyakendra.com/",
		},
		{
			title: "NGO Website 2",
			description:
				"NGO Website built using React JS and integrating libraries like EmailJS and Razorpay payment gateway",
			image: "./images/pr2.png",
			link: "https://lifefoundationhelp.com/",
		},
		{
			title: "Nutritionist Website",
			description: "Nutritionist Website built using MERN stack",
			image: "./images/pr3.png",
			link: "https://arvindsabharwal.onrender.com/",
		},
		{
			title: "Education Website",
			description: "Education Website built using MERN stack",
			image: "./images/pr4.png",
			link: "https://codingarena.onrender.com/",
		},
		{
			title: "Trucking Website",
			description:
				"Trucking Website built using Wordpress and plugins like WPForms Lite",
			image: "./images/pr5.png",
			link: "https://gunaventerprises.com/",
		},
	];

	return (
		<div id='project' className='projectContain' ref={ref}>
			<h1>Projects</h1>
			<div className='projectwrap'>
				<Slider slides={slides} />
			</div>
		</div>
	);
};

export default Projects;
