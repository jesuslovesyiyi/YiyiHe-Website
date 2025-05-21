import React, { useEffect, useState } from 'react'
import '../App.css'

// const ImageSwitcher = ({ image = [], interval = 5000, aspectRatio = '4 / 3', alt = '' }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	useEffect(() => {
// 		if (image.length <= 1)

// 			return

// 		const timer = setInterval(() => {
// 			setCurrentIndex((prev) => (prev + 1) % image.length)
// 		}, interval)

// 		return () => clearInterval(timer)
// 	}, [image, interval])

// 	const handleDotClick = (index) => {
// 		setCurrentIndex(index)
// 	}

// 	return (
// 		<div className="image-switcher-container">
// 			<div className={`image-switcher-wrapper aspect-${aspectRatio.replace(' ', '').replace('/', '-')}`}>
// 				<div className="image-slider" data-index={currentIndex}>
// 					{image.map((src, i) => (
// 						<img
// 							key={i}
// 							src={src}
// 							alt={alt}
// 							className="image-slide"
// 						/>
// 					))}
// 				</div>

// 				<div className="image-dots">
// 					{image.map((_, i) => (
// 						<span
// 							key={i}
// 							className={`dot ${i === currentIndex ? 'active' : ''}`}
// 							onClick={() => handleDotClick(i)}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default ImageSwitcher



const ImageSwitcher = ({ image = [], alt = '', interval = 4000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (image.length <= 1) return

		const timer = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % image.length)
		}, interval)

		return () => clearInterval(timer)
	}, [image, interval])

	const handleDotClick = (index) => {
		setCurrentIndex(index)
	}

	return (
		<div className="fade-switcher-container">
			<div className="fade-image-wrapper">
				{image.map((src, i) => (
					<img
						key={i}
						src={src}
						alt={`${alt}-${i}`}
						className={`fade-image ${i === currentIndex ? 'active' : ''}`}
					/>
				))}
			</div>

			<div className="image-dots">
				{image.map((_, i) => (
					<span
						key={i}
						className={`dot ${i === currentIndex ? 'active' : ''}`}
						onClick={() => handleDotClick(i)}
					/>
				))}
			</div>

		</div>
	)
}

export default ImageSwitcher
