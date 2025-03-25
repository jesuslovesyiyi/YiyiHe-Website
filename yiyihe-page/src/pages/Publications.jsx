import React from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const publications = [
	{
		index: 68,
		citation: "Wei, Z., Jing, R., He, Y., Bendavid, E., & Suckale, J. (2024). Assessing health care access during flooding in sub-saharan Africa. AGU24.",
		// doi: "",
		// code: ""
	},
	{
		index: 67,
		citation: "Lindbergh, S., He, Y., & Radke, J. (2024). Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience. Energy Research & Social Science, 114, 103585.",
		doi: "https://www.sciencedirect.com/science/article/pii/S2214629624001762"
	},
	{
		index: 66,
		citation: "Chen, Z. U. O., Wang, R., Hong, Y., Zhou, Y., He, Y., & Gronewold, A. D. (2024). The influence of road network topology on street flooding in New York City—A social media data approach. Journal of Hydrology, 638, 131471.",
		doi: "https://www.sciencedirect.com/science/article/abs/pii/S0022169424008679"
	},
	{
		index: 65,
		citation: "Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.",
		doi: "https://www.nature.com/articles/s42005-024-01664-z",
		// code: ""
	},
	{
		index: 64,
		citation: "Yan, J., Huang, X., Wang, S., He, Y., Li, X., Hohl, A., ... & Lin, B. (2023). Toward a comprehensive understanding of eye-level urban greenness: a systematic review. International Journal of Digital Earth, 16(2), 4769-4789.",
		doi: "https://www.tandfonline.com/doi/pdf/10.1080/17538947.2023.2283479"
	},
	{
		index: 63,
		citation: "He, Y., Rentschler, J., Avner, P., Wei, Z., Radke, J., & Suckale, J. (2023, December). A global evaluation of flood impacts on road networks informs resilience investments. In AGU Fall Meeting Abstracts (Vol. 2023, pp. A24E-01).",
		doi: "https://ui.adsabs.harvard.edu/abs/2023AGUFM.A24E..01H/abstract"
	},
	{
		indx: 62,
		citation: "He, Y., & Radke, J. (2023). A network-based approach to assess the resilience of transportation systems to floods. Transportation Research Part D: Transport and Environment, 103, 103395.",
		doi: "https://ui.adsabs.harvard.edu/abs/2023AGUFM.A24E..07W/abstract"
	},
	{
		index: 61,
		citation: "Wei, Z., Jing, R., He, Y., Bendavid, E., & Suckale, J. (2023, December). Modeling the cascading effects of extreme weather related failures in the interdependent health infrastructure nexus—a case study in Mozambique, Africa. In AGU Fall Meeting Abstracts (Vol. 2023, pp. A24E-07).",
		doi: "https://ui.adsabs.harvard.edu/abs/2023AGUFM.A24E..07W/abstract"
	},

	{
		index: 60,
		citation: "Avner, P., Maruyama Rentschler, J. E., He, Y., Thies, S. F., & Nell, A. D. (2022). Floods and Urban Connectivity.",
		doi: "https://policycommons.net/artifacts/2477040/floods-and-urban-connectivity/3499093/"
	},

	{
		index: 59,
		citation: "He, Y. (2022). Critical infrastructure network resilience under a changing climate: learning from fuel, air, and road transportation networks. University of California, Berkeley.",
		doi: "https://www.proquest.com/openview/6540c1d735670675ab6c6a63c5cd5ffe/1?cbl=18750&diss=y&pq-origsite=gscholar"
	},

	{
		index: 58,
		citation: "Lindbergh, S., Ju, Y., He, Y., Radke, J., & Rakas, J. (2022). Cross-sectoral and multiscalar exposure assessment to advance climate adaptation policy: The case of future coastal flooding of California’s airports. Climate Risk Management, 38, 100462.",
		doi: "https://www.sciencedirect.com/science/article/pii/S2212096322000699"
	},

	{
		index: 57,
		citation: "He, Y. (2022). Mobility and resilience: A global assessment of flood impacts on road transportation networks. Mobility and Resilience: A Global Assessment of Flood Impacts on Road Transportation Networks.",
		doi: "https://ui.adsabs.harvard.edu/abs/2022mrga.book.....H/abstract",
	},

	{
		index: 56,
		citation: "He, Y., Yue, X., Lindbergh, S., Gao, J., Graves, C., & Rakas, J. (2022). Dissecting lightning strike hazard impact patterns to National Airspace System facilities in the contiguous United States. Computers, Environment and Urban Systems, 91, 101735.",
		doi: "https://www.sciencedirect.com/science/article/pii/S0198971521001423",
	},

	{
		index: 55,
		citation: "He, Y., Lindbergh, S., Ju, Y., Gonzalez, M., & Radke, J. (2021). Towards resilient critical infrastructures: Understanding the impact of coastal flooding on the fuel transportation network in the san francisco bay. ISPRS International Journal of Geo-Information, 10(9), 573.",
		doi: "https://www.mdpi.com/2220-9964/10/9/573",
	},

	{
		index: 54,
		citation: "He, Y., Lindbergh, S., Graves, C., & Rakas, J. (2021). Airport exposure to lightning strike hazard in the contiguous United States. Risk Analysis, 41(8), 1323-1344.",
		doi: "https://onlinelibrary.wiley.com/doi/abs/10.1111/risa.13630",
	},

	{
		index: 53,
		citation: "He, Y., Thies, S., Avner, P., & Rentschler, J. (2021). Flood impacts on urban transit and accessibility—A case study of Kinshasa. Transportation research part D: transport and environment, 96, 102889.",
		doi: "https://www.sciencedirect.com/science/article/pii/S1361920921001905",
	},


	{
		index: 52,
		citation: "He, Y., Thies, S. F., Avner, P., & Maruyama Rentschler, J. E. (2020). The impact of flooding on urban transit and accessibility: A case study of Kinshasa (No. 9504). The World Bank.",
		doi: "https://ideas.repec.org/p/wbk/wbrwps/9504.html",
	},

	{
		index: 51,
		citation: "He, Y., Rentschler, J., & Avner, P. (2020, December). Urban Road Network Resilience to Flooding, a Global Evaluation. In AGU Fall Meeting Abstracts (Vol. 2020, pp. SY030-0002).",
		doi: "https://ui.adsabs.harvard.edu/abs/2020AGUFMSY0300002H/abstract",
	},

	{
		index: 50,
		citation: "He, Y., Thies, S., Avner, P., & Rentschler, J. (2020). The Impact of Flooding on Urban Transit and Accessibility.",
		doi: "https://www.researchgate.net/profile/Yiyi-He/publication/348363870_The_Impact_of_Flooding_on_Urban_Transit_and_Accessibility_A_Case_Study_of_Kinshasa/links/6131abe638818c2eaf7a50ee/The-Impact-of-Flooding-on-Urban-Transit-and-Accessibility-A-Case-Study-of-Kinshasa.pdf",
	},

	{
		index: 49,
		citation: "Ju, Y., Lindbergh, S., He, Y., & Radke, J. D. (2019). Climate-related uncertainties in urban exposure to sea level rise and storm surge flooding: a multi-temporal and multi-scenario analysis. Cities, 92, 230-246.",
		doi: "https://www.sciencedirect.com/science/article/abs/pii/S0264275118311879",
	},
]

const Publications = () => {
	return (

		<div className="publication-page">
			<div className="team-members">
				<div className="section-background">
					<img
						alt=""
						src="/publications/Profile-Pic-Publications.jpg"
						className="section-image"
					/>

					<div className="section-background-overlay"></div>

					<Typography variant="h2" className="section-title">
						Publications
					</Typography>
				</div>


				{/* <div className='contact-wrapper'> */}
				<div className='publication-page-wrapper'>
					{/* Reversed Ordered List */}
					<ol className="publications-list" reversed>
						{publications.map((pub) => (
							<li key={pub.index} className="publication-item">

								<p>
									{pub.citation}
									&nbsp;
									{/* DOI Link (if available) */}
									{pub.doi && (
										<a href={pub.doi} target="_blank" rel="noopener noreferrer" className="publication-link">
											[DOI]
										</a>
									)}
									&nbsp;

									{/* Code Link (if available) */}
									{pub.code && (
										<a href={pub.code} target="_blank" rel="noopener noreferrer" className="publication-link">
											[Code]
										</a>
									)}	</p>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Publications
