import React from "react";
import { useEffect } from "react";
import "./loadingscreen.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LoadingScreen = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className='animatecontain'
			style={{ backgroundImage: 'url("./images/bg11.jpg")' }}>
			<div className='ringcontain' data-aos='zoom-in'>
				<div className='ringN'>
					<div className='ring2' >
						<div >J</div>
						
					</div>
				</div>
				<div className='ringA'>
					<div className='ring1'></div>
				</div>
				<div className='ringB'>
					<div className='ring1'></div>
				</div>
				<div className='ringC'>
					<div className='ring1'></div>
				</div>
				<div className='ringD'>
					<div className='ring1'></div>
				</div>
			</div>
			
		</div>
	);
};

export default LoadingScreen;
