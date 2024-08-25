import React from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_1z0da4o", "template_efe7977", form.current, {
				publicKey: "ByY67qallsZ4slKux",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					toast.success("Email Sent!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("Failed to send email!");
				}
			);
	};

	return (
		<div className='maincontact' id='contact'>
			<ToastContainer />
			<div className='contacthead'>
				<h1>Contact</h1>
			</div>
			<div className='contactwrap'>
				<div className='contactform' data-aos='zoom-in' data-aos-duration='600'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='con1'>
							<label>Name</label>
							<input type='text' name='user_name' className='coninput' />

							<label>Email</label>
							<input type='email' name='user_email' className='coninput' />

							<label>Message</label>
							<textarea name='message' className='coninput context' />
							<input type='submit' value='Send' className='conbtn' />
						</div>
					</form>
				</div>
				<div className='contact2'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://drive.google.com/file/d/11-bERt3BYS6r3aAfdq0ZrLN4DW_SM9Hf/view?usp=sharing'
						className='conpins'
						data-aos='fade-up'
						data-aos-duration='600'>
						<i class='fa-regular fa-file'></i>
						Resume
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/jaideep2004'
						className='conpins'
						data-aos='fade-up'
						data-aos-duration='600'>
						<i class='fa-brands fa-github'></i>
						Github
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/jaideep-2oo4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
						className='conpins'
						data-aos='fade-up'
						data-aos-duration='600'>
						<i class='fa-brands fa-linkedin'></i>
						Linkedin
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.instagram.com/jaisidhu2oo4?utm_source=qr&igsh=MWd2OWVyaXpxdWJ4Yg=='
						className='conpins'
						data-aos='fade-up'
						data-aos-duration='600'>
						<i class='fa-brands fa-instagram'></i>
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
