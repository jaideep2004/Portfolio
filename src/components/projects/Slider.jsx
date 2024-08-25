import React, { useState, useRef, useEffect } from "react";

const Slider = ({ slides, autoSlide = true, autoSlideInterval = 3000 }) => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [isHovered, setIsHovered] = useState(false);
	const slideRef = useRef(null);
	const intervalRef = useRef(null);
	const totalSlides = slides.length;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
	};

	useEffect(() => {
		slideRef.current.style.transition = "transform 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
	}, [currentIndex]);

	useEffect(() => {
		if (autoSlide && !isHovered) {
			intervalRef.current = setInterval(nextSlide, autoSlideInterval);
		}
		return () => clearInterval(intervalRef.current);
	}, [currentIndex, autoSlide, autoSlideInterval, isHovered]);

	const handleMouseEnter = () => {
		setIsHovered(true);
		clearInterval(intervalRef.current);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		if (autoSlide) {
			intervalRef.current = setInterval(nextSlide, autoSlideInterval);
		}
	};

	return (
		<>
			<button onClick={prevSlide} className='slider-button left-button'>
				❮
			</button>
			<div
				className='slider-container'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className='slider-wrapper' ref={slideRef}>
					{slides.map((slide, index) => (
						<div className='slider-slide' key={index}>
							<img
								src={slide.image}
								alt={slide.title}
								className='slide-image'
							/>
							{isHovered && (
								<div className='slidedesc'>
									<h2>{slide.title}</h2>
									<p>{slide.description}</p>
									<a
										href={slide.link}
										target='_blank'
										rel='noopener noreferrer'>
										Visit
									</a>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<button onClick={nextSlide} className='slider-button right-button'>
				❯
			</button>
			<div className='mobilebtncontain'>
				<button onClick={prevSlide} className='mobileleftbutton'>
					❮
				</button>
				<button onClick={nextSlide} className='mobilerightbutton'>
					❯
				</button>
			</div>
		</>
	);
};

export default Slider;
