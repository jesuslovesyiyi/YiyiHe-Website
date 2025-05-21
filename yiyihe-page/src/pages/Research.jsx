
import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Typography } from '@mui/material'
import ImageSwitcher from '../components/ImageSwitcher'
import ReactMarkdown from 'react-markdown'


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
						'**Climate change is driving more frequent and severe extreme weather events**, posing an urgent, shared challenge for nations worldwide. Flooding poses a particularly acute threat among these hazards, and rapid urbanization, driving the continued expansion of human settlements into high-risk flood zones, has further deepened societal vulnerability. The consequences of floods extend well beyond direct inundation; disruptions to critical infrastructure can trigger cascading effects that paralyze mobility across regions. Yet the broader, systemic impacts of such disruptions and the underlying drivers that shape them remain underexplored. We address this gap by analyzing over 14 million kilometers of roads across 2,564 urban settlements spanning 162 countries and simulate more than 44 million trips under ten flood scenarios. ',
						'*Our results reveal that even limited road inundation can trigger widespread disruptions*: in a [1-in-100-year flood](https://en.wikipedia.org/wiki/100-year_flood), 14.7\% of roads are submerged by at least 0.3 meters, yet 44.8\% of trips fail. Moreover, we identify ten hotspot regions where neighboring clusters exhibit high levels of mobility disruption, revealing areas at risk of large-scale, interconnected road network failures. Finally, we identify three key indicators—exposure, connectivity, and travel patterns—as primary drivers of indirect impact. By evaluating their relative influence across regions, the study provides targeted recommendations to strengthen network resilience and inform hazard mitigation investments in areas most vulnerable to large-scale, interconnected network failures, building networked functional resilience across cities.'
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
					'/research/Kinshasa_01.jpeg',
					'/research/Kinshasa_02.jpeg',
					'/research/Kinshasa_03.jpeg',
					'/research/Kinshasa_04.jpeg',
					'/research/Kinshasa_05.png',
				],
				description: [

					'Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities. We collect an innovative dual-condition transit feed specification dataset, and combine it with a travel survey and high-resolution flood maps to examine how regular floods in Kinshasa impact transport services, job accessibility, and the associated economic opportunity costs from travel delays.',
					'Our results show that flood disruptions cause increases in public transit headways, transit rerouting, decreases in travel speeds, which translate into travel delays and loss of job accessibility. This induces substantial economic costs to local commuters – about $1.2 million daily – and hinders the establishment of an integrated citywide labor market. In addition, we reveal sizeable socio-spatial heterogeneities, with clusters of low-income residents incurring a large share of the travel delays and identify critical network segments that should be prioritized for resilience interventions.',
				],


				relatedPapers:
					[
						{
							title: 'He, Y., Thies, S., Avner, P., & Rentschler, J. (2021). Flood impacts on urban transit and accessibility—A case study of Kinshasa. Transportation research part D: transport and environment, 96, 102889.',
							link: 'https://www.sciencedirect.com/science/article/pii/S1361920921001905'
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
					'/research/DIM_01.jpeg',
					'/research/DIM_02.jpeg',
					'/research/DIM_03.jpeg',
					'/research/DIM_04.jpeg',
				],
				description:
					[
						'Networked dynamics are essential for assessing the resilience of lifeline infrastructures. The dimension-reduction approach was designed as an efficient way to map the high-dimensional dynamics to a low-dimensional representation capturing system-level behavior while taking into consideration network structure. However, its application to socio-technical systems has not been considered yet.',
						'Here, we extend the dimension-reduction approach to resource-flow dynamics in multiplex networks. We apply it to the San Francisco fuel transportation network, considering the flow between refineries, terminals and gas stations. We capture the aggregated dynamics between the facilities of each type and identify macroscopic conditions for the system to supply a given demand of fuel. By considering multiple sea level rise scenarios between 2020 and 2100, we address the impact of coastal flooding due to climate change on the maximum suppliable demand. Finally, we analyze the system’s transient response to production failures, investigating the temporary interruption in production and the duration it takes for complete demand satisfaction to become unachievable after the interruption.',
					],



				relatedPapers: [
					{
						title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
						link: 'https://www.nature.com/articles/s42005-024-01664-z'
					}
				]
			},
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
					'/research/Light_01.jpeg',
					'/research/Light_02.jpeg',
					'/research/Light_03.jpeg',
					'/research/Light_04.jpeg',
					'/research/Light_05.jpeg',
				],
				description:
					[
						'Lightning strikes pose a severe threat to the United States (US) National Airspace System (NAS). Although the US Federal Aviation Administration (FAA) implements lightning protection practices and procedures to protect personnel, electronic equipment, and structures within the NAS, many lightning-induced outages still occur. To date we found that most research on lightning-induced facility outages has focused on understanding the physical processes of lightning strike effects on aircraft and airport ramp operations. Very little research has been done on examining the overall patterns and characteristics of such hazards to aviation from a geo-spatial standpoint.',
						'To bridge this gap, we analyze nationwide lightning strike spatiotemporal data and FAA airport facility outage records from 2009 through 2020 and apply innovative pattern recognition methods to identify key characteristics of lightning strike hazards. Our results uncover the complexities of lightning strike hazard impact patterns to NAS facilities, identifying five distinct typologies with climatological signatures critical to creating better hazard mitigation strategies.',
					],

				relatedPapers: [
					{
						title: 'He, Y., Yue, X., Lindbergh, S., Gao, J., Graves, C., & Rakas, J. (2022). Dissecting lightning strike hazard impact patterns to National Airspace System facilities in the contiguous United States. Computers, Environment and Urban Systems, 91, 101735.',
						link: 'https://www.sciencedirect.com/science/article/pii/S0198971521001423'
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
											{/* {Array.isArray(block.description)
												? block.description.map((para, i) => <p key={i}>{para}</p>)
												: <p>{block.description}</p>
											} */}

											{Array.isArray(block.description)
												? block.description.map((para, i) => (
													<ReactMarkdown key={i} >
														{para}
													</ReactMarkdown>
												))
												: <ReactMarkdown>{block.description}</ReactMarkdown>
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

