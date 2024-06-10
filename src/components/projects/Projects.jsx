import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Project from "./Project";



const Projects = () => {
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			// Do something when the Projects component comes into view
			console.log("Projects component is in view");
		}
	}, [inView]);

	const projects = [
		{
			src1: "./images/pr1.png",
			src2: "./images/mb1.jpg",
            desc: "Nutritionist Website built using ReactJS, NodeJS, Express & MongoDB",
            link:"https://arvindsabharwal.onrender.com/"
		},
		{
			src1: "./images/pr2.png",
			src2: "./images/mb2.jpg",
            desc: "Education Website built using MERN Stack",
            link:"https://codingarena.onrender.com/"
		},
		{
			src1: "./images/pr3.png",
			src2: "./images/mb3.jpg",
            desc: "Trucking Website built using Wordpress & various plugins.",
            link:"https://gunaventerprises.com/"
		},
		{
			src1: "./images/pr4.png",
			src2: "./images/mb4.jpg",
            desc: "Simple Bootstrap website hosted on Github Pages",
            link:"https://jaideep2004.github.io/"
		},
	];

	return (
		<div id='project' className='projectContain' ref={ref}>
			<h1>Projects</h1>
			<div className='projectwrap'>
			
				{projects.map((project, index) => (
					<div key={index} className="projectwrap2">
						<Project
							src1={project.src1}
							src2={project.src2}
							desc={project.desc}
							link={project.link}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
