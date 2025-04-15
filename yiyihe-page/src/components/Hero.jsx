import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

const images = [
	'/home/image0.jpg',
	'/home/image1.jpg',
	// '/home/image2.jpg',
	'/home/image3.jpg',
	// '/home/image4.jpg',
	'/home/image5.jpg',
	'/home/image6.jpg',
	'/home/image7.png',
	'/home/image8.png',
]

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	// Auto-switch images every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 4000)

		return () => clearInterval(interval)
	}, [])


	return (
		<Box className="hero"
		>
			{/* Image Wrapper */}
			<div className="hero-image-container">
				{images.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`Hero ${index + 1}`}
						className={`hero-image ${index === currentIndex ? 'active' : ''}`}
					/>
				))}
			</div>

			{/* Overlay & Title */}
			<div className="hero-overlay"></div>
			<h2 className="hero-title">Welcome to Resilient Futures Lab</h2>

			{/* Navigation Dots */}
			<div className="hero-dots">
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${currentIndex === index ? 'active' : ''}`}
						onClick={() => setCurrentIndex(index)}
					></span>
				))}
			</div>
		</Box>
	)
}

export default Hero
