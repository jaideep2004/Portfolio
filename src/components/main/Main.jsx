import React from "react";
import "./main.css";
import Footer from "../footer/Footer";
import Monitor from "./Monitor";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Main = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	//delay type animation
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 500);
	}, []);

	return (
		<div className='main1' id='hero'>
			<div className='mainwrap'>
				<div className='name'>
					{loading && (
						<div>
							<TypeAnimation
								cursor={false}
								sequence={["Hi, I am Jaideep Singh"]}
								speed={5}
							/>
							<div
								className='name2'
								data-aos='fade-up' data-aos-duration='600'
								>
								Student / Front-End Web Developer 
							</div>
						</div>
					)}
				</div>

				<div className='cscreen' data-aos='fade-left' data-aos-duration='800'>
					<Monitor />
				</div>

			</div>
			<a href="#about" className="mainarrhref" >
			<div className="mainarrow" >
				
				<i class="fa-solid fa-chevron-down fa-xl  arrow1"></i>
				<i class="fa-solid fa-chevron-down fa-xl arrow2"></i>
				<i class="fa-solid fa-chevron-down fa-xl arrow3"></i>
			</div>
			</a>
			
		</div>
	);
};

export default Main;
