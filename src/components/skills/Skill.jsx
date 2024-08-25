import React from "react";
import SkillCapsule from "./SkillCapsule";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	

	const skillsData = {
		web: [
			{
				link: "https://en.wikipedia.org/wiki/HTML",
				name: "HTML",
				img: "./images/html3.png",
				level: "90",
			},
			{
				link: "https://en.wikipedia.org/wiki/CSS",
				name: "CSS",
				img: "./images/css3.png",
				level: "90",
			},
			{
				link: "https://en.wikipedia.org/wiki/JavaScript",
				name: "Javascript",
				img: "./images/js2.png",
				level: "65",
			},
			{
				link: "https://react.dev/",
				name: "ReactJS",
				img: "./images/react.png",
				level: "80",
			},
			{
				link: "https://nodejs.org/en",
				name: "NodeJS",
				img: "./images/node2.png",
				level: "60",
			},
			{
				link: "https://www.python.org/",
				name: "Python",
				img: "./images/python.png",
				level: "50",
			},
			{
				link: "https://www.mysql.com/",
				name: "MySQL",
				img: "./images/mysql2.png",
				level: "90",
			},
			{
				link: "https://www.mongodb.com/",
				name: "MongoDB",
				img: "./images/mongo2.png",
				level: "70",
			},
		],
		other: [
			{
				link: "https://en.wikipedia.org/wiki/Git",
				name: "Git",
				img: "./images/git.png",
				level: "90",
			},
			{
				link: "https://wordpress.com/",
				name: "Wordpress",
				img: "./images/wordpress.png",
				level: "90",
			},
			{
				link: "https://getbootstrap.com/",
				name: "Bootstrap",
				img: "./images/bootstrap2.png",
				level: "90",
			},
			{
				link: "https://developer.android.com/studio",
				name: "Android Studio",
				img: "./images/android.png",
				level: "60",
			},
			{
				link: "https://chatgpt.com/",
				name: "ChatGPT",
				img: "./images/chatgpt2.png",
				level: "90",
			},
		],
	};

	return (
		<div className='skillsmain'>
			<h1>My Skills</h1>
			<div
				className='skillscontainer'
				data-aos='fade-left'
				data-aos-duration='600'>
				{skillsData.web.map((skill, index) => (
					<SkillCapsule key={index} skill={skill} />
				))}
			</div>

			<div
				className='skillscontainer'
				data-aos='fade-right'
				data-aos-duration='600'>
				<h2>Other</h2>
				{skillsData.other.map((skill, index) => (
					<SkillCapsule key={index} skill={skill} />
				))}
			</div>
		</div>
	);
};

export default Skill;
