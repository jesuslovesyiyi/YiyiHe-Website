
import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Typography } from '@mui/material'
import ImageSwitcher from '../components/ImageSwitcher'


const researchAreas = [
	{
		id: 'climateResilience',
		title: "Climate Resilience",
		contentBlocks: [
			{
				image:
					[
						'/research/GRR_01_small.jpeg',
						'/research/GRR_02_small.jpeg',
						'/research/GRR_03_small.jpeg',
						'/research/GRR_04_small.jpeg',
						'/research/GRR_05_small.jpeg',
					],
				description:
					[
						'Climate change is driving more frequent and severe extreme weather events, posing an urgent, shared challenge for nations worldwide. Flooding poses a particularly acute threat among these hazards, and rapid urbanization, driving the continued expansion of human settlements into high-risk flood zones, has further deepened societal vulnerability. The consequences of floods extend well beyond direct inundation; disruptions to critical infrastructure can trigger cascading effects that paralyze mobility across regions. Yet the broader, systemic impacts of such disruptions and the underlying drivers that shape them remain underexplored. We address this gap by analyzing over 14 million kilometers of roads across 2,564 urban settlements spanning 162 countries and simulate more than 44 million trips under ten flood scenarios. ',
						'Our results reveal that even limited road inundation can trigger widespread disruptions: in a 1-in-100-year flood, 14.7\% of roads are submerged by at least 0.3 meters, yet 44.8\% of trips fail. Moreover, we identify ten hotspot regions where neighboring clusters exhibit high levels of mobility disruption, revealing areas at risk of large-scale, interconnected road network failures. Finally, we identify three key indicators—exposure, connectivity, and travel patterns—as primary drivers of indirect impact. By evaluating their relative influence across regions, the study provides targeted recommendations to strengthen network resilience and inform hazard mitigation investments in areas most vulnerable to large-scale, interconnected network failures, building networked functional resilience across cities.'
					],
				relatedPapers: [

					{
						title: 'He, Y. (2022). Mobility and resilience: A global assessment of flood impacts on road transportation networks.',
						link: 'https://openknowledge.worldbank.org/entities/publication/e06c6db7-6b99-5d61-bd86-4878996569d9'
					},
				]
			},
			{
				image: [
					'/research/GRR_01_small.jpeg',
					'/research/GRR_02_small.jpeg',
					'/research/GRR_03_small.jpeg',
					'/research/GRR_04_small.jpeg',
					'/research/GRR_05_small.jpeg',
				],
				description: [

					'As climate change accelerates, cities around the world are facing growing threats from flooding—especially to critical infrastructure like road networks. This project provides the first globally consistent analysis of how floodwaters directly affect urban roads and how those impacts ripple through cities, disrupting mobility at scale. We analyzed over 14 million kilometers of roads across 2,500+ urban areas and simulated more than 44 million trips under ten different flood scenarios, from moderate (1-in-5-year) to extreme (1-in-1,000-year) events. Our modeling captures both direct road inundation and indirect disruptions, such as route failures, detours, and delays. Key findings show that even minor flooding can have major consequences. For example, in a typical 1-in-100-year flood, only 14.7 of roads are submerged—but nearly 45 of trips fail. We also identified ten global hotspot regions where clustered disruptions threaten large-scale mobility breakdowns.',
					'The study highlights three core factors—exposure, network connectivity, and travel behavior—as the main drivers of disruption. These insights inform actionable strategies for improving urban resilience and guiding flood mitigation investments where they’re needed most.',
				],


				relatedPapers:
					[
						{
							title: 'He, Y. (2022). Mobility and resilience: A global assessment of flood impacts on road transportation networks.',
							link: 'https://openknowledge.worldbank.org/entities/publication/e06c6db7-6b99-5d61-bd86-4878996569d9'
						},
					]
			},
		]
	},

	{
		id: 'networkScience',
		title: 'Network Science',
		contentBlocks: [
			{
				image: [
					'/research/CEC_01.jpeg',
					'/research/CEC_02.jpeg',
					'/research/CEC_03.jpeg',
					'/research/CEC_04.jpeg',
					'/research/CEC_05.jpeg',
				],
				description:
					[
						'Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay (the Bay Area), impacting both coastal communities and critical infrastructure networks. The oil industry comprises a complex and critical infrastructure network located in the Bay Area. There is an urgent need to assess consequences and identify risk-based solutions to increase the resilience of this industrial network in the Bay Area to SLR and storm surge.',
						'In this study, a comprehensive multi-modal network model representing the fuel supply system was built. A total of 120 coastal flooding scenarios, including four General Circulation Models, two Representative Concentration Pathways, three percentiles of future SLR estimates, and five planning horizons (20 year intervals from 2000 to 2100) were considered. The impact of coastal flooding on fuel transportation networks was studied at two different scales: regional and local. At the regional scale, basic network properties and network efficiency were analyzed across multiple flooding scenarios. At the local scale, cascading effects of individual node disruptions were simulated. Based on this research, smarter and more holistic risk-based adaptation strategies can be established which could lead to a more resilient fuel transportation network system.',
					],



				relatedPapers: [
					{
						title: 'He, Y., Lindbergh, S., Ju, Y., Gonzalez, M., & Radke, J. (2021). Towards resilient critical infrastructures: Understanding the impact of coastal flooding on the fuel transportation network in the san francisco bay. ISPRS International Journal of Geo-Information, 10(9), 573.',
						link: 'https://www.mdpi.com/2220-9964/10/9/573'
					}
				]
			},
		],
	},


	{
		id: 'machineLearning',
		title: 'Machine Learning',
		contentBlocks: [
			{
				image: [
					'/research/GRR_01_small.jpeg',
					'/research/GRR_02_small.jpeg',
					'/research/GRR_03_small.jpeg',
					'/research/GRR_04_small.jpeg',
					'/research/GRR_05_small.jpeg',
				],
				description:
					'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
				relatedPapers: [
					{
						title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
						link: 'https://www.nature.com/articles/s42005-024-01664-z'
					}
				]
			},
			{
				image: [
					'/research/GRR_01_small.jpeg',
					'/research/GRR_02_small.jpeg',
					'/research/GRR_03_small.jpeg',
					'/research/GRR_04_small.jpeg',
					'/research/GRR_05_small.jpeg',
				],
				description:
					[

						'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.  ',
						'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
						'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
					],
				relatedPapers: [
					{
						title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
						link: 'https://www.nature.com/articles/s42005-024-01664-z'
					}
				]
			},

		]


	},
]


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
							<li
								key={area.id}
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
					{researchAreas.map((area) => (
						<section
							key={area.id}
							id={area.id}
							ref={sectionRefs.current[area.id]}
							className="research-section"
						>
							<h3 className="research-title">{area.title}</h3>
							{area.contentBlocks.map((block, i) => (
								<div key={i} className="research-block">
									<div className="research-left">

										<ImageSwitcher
											image={block.image}
											alt={`${area.title} - ${i}`}
										/>


										{block.relatedPapers?.length > 0 && (
											<div className="research-papers">
												<h4>Related papers:</h4>
												<ul>
													{block.relatedPapers.map((paper, j) => (
														<li key={j}>
															<a href={paper.link} target="_blank" rel="noopener noreferrer">
																{paper.title}
															</a>
														</li>
													))}
												</ul>
											</div>
										)}
									</div>

									<div className="research-right">
										<div className="research-description">
											{Array.isArray(block.description)
												? block.description.map((para, i) => <p key={i}>{para}</p>)
												: <p>{block.description}</p>
											}
										</div>

									</div>
								</div>
							))}
						</section>
					))}

				</div>
			</div>
		</div>
	)
}

export default Research

