
import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const researchAreas = [
	{
		id: 'climateResilience',
		title: "Climate Resilience",
		image: "/research/solar_gallery_image.png",
		imageSource: 'Image source: NASA Earth Observatory image by Jesse Allen, using Landsat data from the U.S. Geological Survey',
		description: 'hi! A major open question affecting future sea levels is whether meltwater- driven fracturing on ice shelves will significantly impact the future loss of the Antarctic Ice Sheet.Atmospheric warming threatens to accelerate the retreat of the Antarctic Ice Sheet by increasing surface melting and facilitating hydrofracturing, where meltwater flows into and enlarges fractures on ice shelves, potentially triggering ice - shelf collapse and acceleration of sea - level rise.Here we used an innovative combination of theory and deep - learning to develop the stability diagram for Antarctic fractures.We find that large portions of Antarctic ice shelves will be energetically favorable to unstable hydrofracture, and the collapse of these regions would trigger significant acceleration of ice flow.',
		additionalText:
			'Many unanswered questions are to be explored, such as the processes governing the catastrophic collapse of ice shelves, and how the complex rheology impacts the breaking of thin sheets of ice. In the future we hope to couple our new hydrofracture model with ice-sheet models to improve predictions of Antarctica\'s response to atmospheric warming and contributions to sea-level rise.',
		relatedPapers: [
			{
				title:
					'Lindbergh, S., He, Y., & Radke, J. (2024). Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience. Energy Research & Social Science, 114, 103585.',
				link: 'https://www.sciencedirect.com/science/article/pii/S2214629624001762'
			}
		]
	},
	{
		id: 'networkScience',
		title: 'Network Science',
		image: '/research/graph_gallery_image.png',
		imageSource: '',
		description:
			'Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures. Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.s',
		relatedPapers: [
			{
				title: 'Chen, Z. U. O., Wang, R., Hong, Y., Zhou, Y., He, Y., & Gronewold, A. D. (2024). The influence of road network topology on street flooding in New York City—A social media data approach. Journal of Hydrology, 638, 131471.',
				link: 'https://www.sciencedirect.com/science/article/pii/S0022169424008679'
			}
		]
	},
	{
		id: 'machineLearning',
		title: 'Machine Learning',
		image: '/research/machinelearning.jpg',
		imageSource: '',
		description:
			'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
		// codeLink: 'https://github.com/example/urban-ml',
		relatedPapers: [
			{
				title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
				link: 'https://www.nature.com/articles/s42005-024-01664-z'
			}
		]
	}
]

// Define refs for each section (hooks must be at top-level)
const Research = () => {
	const [activeId, setActiveId] = useState(null)

	// Dynamically create refs for each section
	const sectionRefs = useRef({})
	useEffect(() => {
		researchAreas.forEach(area => {
			if (!sectionRefs.current[area.id]) {
				sectionRefs.current[area.id] = React.createRef()
			}
		})
	}, [])

	// Scroll to section on TOC click
	const scrollToSection = (id) => {
		const ref = sectionRefs.current[id]
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	// Observe scroll position to highlight active TOC item
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{
				rootMargin: '0px 0px -60% 0px',
				threshold: 0
			}
		)

		Object.entries(sectionRefs.current).forEach(([id, ref]) => {
			if (ref.current) {

				observer.observe(ref.current)

			}
		})

		return () => observer.disconnect()
	}, [])

	return (
		<div className="research-page">
			{/* Hero Section */}
			<div className="section-background">
				<img alt=""
					src="/research/thumbnail.jpeg" className="section-image" />
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">Research</Typography>
			</div>

			<div className="research-page-wrapper">
				{/* TOC Sidebar */}
				<nav className="research-toc">
					<ul>
						{researchAreas.map(area => (
							<li key={area.id}
								className={activeId === area.id ?
									'active' : ''}>
								<a
									href={`#${area.id}`}
									onClick={(e) => {
										e.preventDefault()
										scrollToSection(area.id)
									}}
								>
									{area.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Research Content */}
				<div className="research-grid">
					{researchAreas.map(area => (
						<div
							id={area.id}
							ref={sectionRefs.current[area.id]}
							className="research-section"
						>
							<h3 className="research-title">{area.title}</h3>

							<div className="research-columns">
								{/* Left */}
								<div className="research-left">
									<img src={area.image} alt={area.title} className="research-image" />
									{area.imageSource && <p className="image-caption">{area.imageSource}</p>}
									{area.relatedPapers?.length > 0 && (
										<div className="research-papers">
											<h4>Related papers:</h4>
											<ul>
												{area.relatedPapers.map((paper, i) => (
													<li key={i}>
														<a href={paper.link} target="_blank" rel="noopener noreferrer">
															{paper.title}
														</a>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>

								{/* Right */}
								<div className="research-right">
									<p className="research-description">{area.description}</p>
									{area.additionalText && (
										<p className="research-description">{area.additionalText}</p>
									)}
									{area.codeLink && (
										<p className="research-code">
											<strong>Code:</strong>{' '}
											<a href={area.codeLink} target="_blank" rel="noopener noreferrer">
												View on GitHub
											</a>
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Research
