import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'

const newsData = [
	{
		title: 'Yiyi book chapter',
		date: '2025/07/02',
		description: 'Yiyi published a book chapter titled [From Vulnerability to Resilience Rethinking Urban Transportation in a Changing Climate](https://www.taylorfrancis.com/chapters/edit/10.1201/9781003503262-22/vulnerability-resilience-yiyi?context=ubx&refId=88f361e3-2bab-470e-983f-81a724bf02f5) in [Urban Human Mobility](https://www.taylorfrancis.com/books/edit/10.1201/9781003503262/urban-human-mobility-xiao-huang-xinyue-ye-kathleen-stewart-subasish-das?refId=193824a8-85a9-465c-9806-0f353057a749&context=ubx).',
	},
	{
		title: 'Yuhan new npj publication',
		date: '2025/07/01',
		description: 'Yuhan published an article in [npj Urban Sustainability](https://www.nature.com/npjurbansustain/) titled [Spatial eco-socio-economic trade-offs inform differentiated management strategies in mega-urban agglomerations](https://www.nature.com/articles/s42949-025-00231-x).',
	},
	{
		title: 'Yiyi join SimTigrate',
		date: '2025/06/19',
		description: 'Yiyi joined [SimTigrate Design Center](https://simtigrate.gatech.edu/) as an affiliated faculty.',
	},
	{
		title: 'Welcome Yuhan',
		date: '2025/06/10',
		description: 'Welcome to the lab, Yuhan! We are so glad to have you join us as a PhD student.',
	},
	{
		title: 'Leadership certificate',
		date: '2025/05/21',
		description: 'Yiyi completed the Office of Faculty Professional Development Leadership Exploration certificate program for 2024-2025.',
	},
	{
		title: 'Tara Graduates',
		date: '2025/05/11',
		description: 'Tara graduates from Georgia Tech College of Computing with a master degree in Computational Science and Engineering. [Read more](https://www.linkedin.com/posts/tara-tingyu-liu_graduated-from-college-of-computing-at-activity-7333660084679417856-2blt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkknJEBgymnWw1Z5PcinxBcNOtJy2rzrHY)',
	},
	{
		title: 'CURA Leadership Symposium',
		date: '2025/04/08',
		description: 'Yiyi joined the CURA Leadership Symposium as a discussant for Matthew Gonser, Climate Resilience Officer for Los Angeles County. [Read more](https://resilience.research.gatech.edu/feature/translating-urban-resilience-lessons-cura-symposium)',
		// link: 'https://resilience.research.gatech.edu/feature/translating-urban-resilience-lessons-cura-symposium'
	},

	{
		title: 'Tara AI Safety Initiative',
		date: '2025/04/04',
		description: 'Tara is accepted into the [AI Safety Initiative (AISI)](https://www.aisi.dev/) research program at Georgia Tech, where they are contributing to a research paper on AI interpretability.',
	},

	{
		title: 'Google Guest Lecture',
		date: '2025/04/03',
		description: 'Staff AI research scientist Hongxu Ma from Google DeepMind came to the GT campus and delivered a guest lecture on "The Rise of the Data Science Assistant: LLM Agents in Action". [Read more](https://www.notion.so/How-LLM-Agents-Are-Revolutionizing-Data-Science-Insights-from-Dr-Hongxu-Ma-s-Lecture-1d3a6d2c901280a89136e2ee7bc88a31?pvs=4)',
	},

	{
		title: 'Tara Lavender Celebration',
		date: '2025/04/01',
		description: 'Tara is recognized as one of 2025 Lavender Celebration graduates. [Read more](https://belonging.gatech.edu/event/lavender-celebration)',
	},

	{
		title: 'BBISS Faculty Fellow',
		date: '2025/02/19',
		description: 'Yiyi appointed as faculty fellow to the Brook Byers Institute for Sustainable Systems (BBISS). [Read more](https://research.gatech.edu/seven-appointed-bbiss-faculty-fellows)',
	},

	{
		title: 'Tingyu AI Safety Fellow',
		date: '2025/02/01',
		description: 'Tara is selected as one of seven AI Safety Fellows by [AISI](https://www.aisi.dev/), a Georgia Tech community dedicated to ensuring that AI is developed for the benefit of the future.',
	},

	{
		title: 'Stanford Sustainability Accelerator Grant',
		date: '2024/12/24',
		description: 'Yiyi joined a Stanford-led team awarded a grant from the Stanford Sustainability Accelerator for their proposal, "Harnessing the Data Revolution to Mitigate Flood Impacts on Vulnerable Communities in Sub-Saharan Africa." [Read more](https://news.stanford.edu/stories/2025/04/sustainability-accelerator-grants-climate-adaptation-planetary-intelligence?utm_content=httpsnewsstanfordedustories202504sustainabilityacceleratorgrantsclimateadaptationplanetaryintelligence&amp;utm_source=feedotter&amp;utm_medium=email&amp;utm_campaign=int-04-20-2025&amp;mkt_tok=NjYwLVRKQy05ODQAAAGZ92jp5YY7f8ZhPOLayMbpIyR6Ll9vEBq_2DT94Q5gTlGHp-5jhT3noT8ixsCTXkkJ36Ahzb2MNAa_zCXOwZ3le_qafLN5x551o_1il-U)',
	},

	{
		title: 'New Research Paper Published',
		date: '2024/12/11',
		description: 'Our paper Assessing health care access during flooding in sub-saharan Africa is published in AGU24.',
	},
	{
		title: 'New Research Paper Published',
		date: '2024/08/01',
		description: 'Our paper [Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience](https://www.sciencedirect.com/science/article/pii/S2214629624001762) is published in Energy Research & Social Science.',
	},
	{
		title: 'New Research Paper Published',
		date: '2024/06/15',
		description: 'Our paper [Dimension reduction approach for understanding resource-flow resilience to climate change](https://www.nature.com/articles/s42005-024-01664-z) is published in Nature Communications Physics.',
	}
]

const News = () => {
	return (
		<div className="news">
			<h3> Vision Statement</h3>

			<div className="news-list">
				<p>
					The future demands cities that do more than survive—they must adapt, innovate, and lead. At the Resilient Futures Lab, we push the boundaries of research, technology, and policy to create urban systems that can withstand disruption and emerge stronger.

					We bring together thinkers and doers—scientists, policymakers, planners, and communities—to design solutions that harness AI, data, and cutting-edge strategies for resilience. Our work is not just about preparing for the next crisis but reimagining the built environment for a dynamic, equitable, and sustainable future.
				</p>

			</div>

			<h3>News</h3>
			<table className="news-table">
				<tbody>
					{newsData.map((news, index) => (
						<tr key={index} className="news-row">
							<td className="news-date">{news.date}</td>
							<td className="news-content">
								<ReactMarkdown
									rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
									components={{ p: 'span' }}
								>
									{news.description}
								</ReactMarkdown>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default News
