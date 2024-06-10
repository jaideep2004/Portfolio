import React from "react";
import "./about.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id='about'>
			<div className='aboutwrap'>
				<div className='profile'>
					<h1>About Me</h1>

					<div className='abtimg' data-aos='fade-up' data-aos-duration='600'>
						<img src='./images/p2.png' alt='' />
					</div>
				</div>
				<div
					className='abouttext'
					data-aos='fade-right'
					data-aos-duration='500'>
					<ul>
						<li>
							<span>Name :</span> Jaideep Singh
						</li>
						<li>
							<span>Education :</span> Second-year student in B.Voc.(Bachelor of
							Vocational Studies) Software Development at Khalsa College,
							Patiala.
						</li>
						<li>
							<span>Passion :</span> Enthusiastic about Computers & Technology,
							particularly fascinated by Web Development.
						</li>
						<li>
							<span>Interest :</span> Intrigued by the dynamic nature and
							limitless possibilities of Web Development.
						</li>
						<li>
							<span>Experience :</span> Hands-on experience with Front-end
							technologies(HTML, CSS, React, Wordpress) and Prompt Engineering
							using tools like ChatGPT, Gemini etc.
						</li>

						<li>
							<span>Goals :</span> Eager to expand skills in Back-end
							development to make meaningful contributions to the field.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
