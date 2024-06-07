import React, { useState } from "react";
import "./skills.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCapsule = ({ skill }) => {
    useEffect(() => {
		AOS.init();
	}, []);

	const [isHovered, setIsHovered] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const fillStyle = {
		height: isHovered || isActive ? `${skill.level}%` : "0%",
		transition: "height 2s ease", // Smooth transition for filling effect
	};

	return (
		<>
            <a
               
				href={skill.link}
				className='skilllink'
				onClick={() => setIsActive(!isActive)}>
				<div
					className='skillcapsule'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<div className='fill' style={fillStyle}></div>
					<img src={skill.img} alt={`${skill.name}`} />
					<div className='skillname'>{skill.name}</div>
				</div>
			</a>
		</>
	);
};

export default SkillCapsule;
