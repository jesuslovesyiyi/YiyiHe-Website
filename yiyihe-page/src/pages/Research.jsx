
// import React, { useRef } from 'react'
// import '../App.css'
// import { Typography } from '@mui/material'

// const researchAreas = [
// 	{
// 		id: "climateResilience",
// 		title: "Climate Resilience",
// 		image: "/research/solar_gallery_image.png",
// 		description:
// 			"Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities. Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.",
// 		relatedPapers: [
// 			{
// 				title: "The Impact of Climate Change on Transportation Networks",
// 				link: "https://example.com/climate-paper"
// 			}
// 		]
// 	},
// 	{
// 		id: "networkScience",
// 		title: "Network Science",
// 		image: "/research/graph_gallery_image.png",
// 		description:
// 			"Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.",
// 		relatedPapers: [
// 			{
// 				title: "Network Resilience in Coastal Cities",
// 				link: "https://example.com/network-paper"
// 			},
// 			{
// 				title: "Graph Theory Applications in Disaster Response",
// 				link: "https://example.com/graph-theory-paper"
// 			}
// 		]
// 	},
// 	{
// 		id: "machineLearning",
// 		title: "Machine Learning",
// 		image: "/research/machinelearning.jpg",
// 		description:
// 			"The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.",
// 		relatedPapers: [
// 			{
// 				title: "Deep Learning for Environmental Data Analysis",
// 				link: "https://example.com/ml-paper"
// 			},
// 			{
// 				title: "Predictive Models for Climate Change Impact",
// 				link: "https://example.com/climate-ml-paper"
// 			}
// 		],
// 		codeLink: "https://github.com/example/machine-learning-project"
// 	}
// ]


import React, { useRef } from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const researchAreas = [
	{
		id: 'climateResilience',
		title: "Climate Resilience",
		image: "/research/solar_gallery_image.png",
		imageSource: 'Image source: NASA Earth Observatory image by Jesse Allen, using Landsat data from the U.S. Geological Survey',
		description:
			'A major open question affecting future sea levels is whether meltwater-driven fracturing on ice shelves will significantly impact the future loss of the Antarctic Ice Sheet. Atmospheric warming threatens to accelerate the retreat of the Antarctic Ice Sheet by increasing surface melting and facilitating hydrofracturing, where meltwater flows into and enlarges fractures on ice shelves, potentially triggering ice-shelf collapse and acceleration of sea-level rise. Here we used an innovative combination of theory and deep-learning to develop the stability diagram for Antarctic fractures. We find that large portions of Antarctic ice shelves will be energetically favorable to unstable hydrofracture, and the collapse of these regions would trigger significant acceleration of ice flow.',
		additionalText:
			'Many unanswered questions are to be explored, such as the processes governing the catastrophic collapse of ice shelves, and how the complex rheology impacts the breaking of thin sheets of ice. In the future we hope to couple our new hydrofracture model with ice-sheet models to improve predictions of Antarctica\'s response to atmospheric warming and contributions to sea-level rise.',
		relatedPapers: [
			{
				title:
					'C. Y. Lai et al., “Vulnerability of Antarctica’s ice shelves to meltwater-driven fracture,” Nature, 584, 574–578 (2020). doi: 10.1038/s41586-020-2627-8',
				link: 'https://doi.org/10.1038/s41586-020-2627-8'
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
				title: 'Network Resilience in Coastal Cities',
				link: 'https://example.com/network-paper'
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
		codeLink: 'https://github.com/example/urban-ml',
		relatedPapers: [
			{
				title: 'Predictive Models for Climate Change Impact',
				link: 'https://example.com/climate-ml-paper'
			}
		]
	}
]

// Define refs for each section (hooks must be at top-level)
const Research = () => {
	const climateRef = useRef(null)
	const networkRef = useRef(null)
	const mlRef = useRef(null)

	const sectionRefs = {
		climateResilience: climateRef,
		networkScience: networkRef,
		machineLearning: mlRef
	}

	const scrollToSection = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<div className="research-page">
			{/* Hero Section */}
			<div className="section-background">
				<img alt="" src="/research/Profile-Pic-Research.jpg" className="section-image" />
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">Research</Typography>
			</div>


			<div className='research-page-wrapper'>
				{/* Buttons */}
				<div className="research-buttons">
					{researchAreas.map((area) => (
						<button key={area.id} onClick={() => scrollToSection(sectionRefs[area.id])}>
							{area.title}
						</button>
					))}
				</div>

				{/* Research Sections */}
				<div className="research-grid">
					{researchAreas.map((area) => (
						<div
							key={area.id}
							ref={sectionRefs[area.id]}
							className="research-section"
						>
							{/* Title aligned right */}
							<h3 className="research-title">{area.title}</h3>

							<div className="research-columns">
								{/* Left Column */}
								<div className="research-left">
									<img src={area.image} alt={area.title} className="research-image" />

									{area.imageSource && (
										<p className="image-caption">{area.imageSource}</p>
									)}

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

								{/* Right Column */}
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
