import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ src1, src2, desc, link }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='project1'>
			<div className='imgcontain'>
				<img
					src={src1}
					alt=''
					className='limg'
					data-aos='flip-up'
					data-aos-duration='600'
				/>
			</div>
			<div className='ptext'>
				<p>{desc}</p>
				<div className='prbtn'>
					<a href={link}>View</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
