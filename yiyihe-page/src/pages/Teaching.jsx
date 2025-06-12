import React from 'react'
import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'


const courses = [
	{
		name: 'CP4813: Urban Data Science',
		description:
			[
				'In today’s world, understanding cities requires more than just traditional methods. Urban planners and social scientists are increasingly turning to data science techniques to gain deeper insights into the complex issues that cities face. This course serves as an introduction to data science for undergraduate and graduate students in urban planning and related fields.',
				'[Syllabus](https://github.com/jesuslovesyiyi/Urban-Data-Science)',
			],
		image: '/teaching/urban-data-science.jpg',
	},
	{
		name: 'CP6542: Transport & GIS',
		description:
			[
				'This course covers the applications of GIS and emerging spatial technologies in transportation network modeling. Its primary goal is to help students understand the basic principles of geographical information science for transportation modeling and to equip students with state-of-the-practice computing technology.',
				'[Syllabus](https://github.com/jesuslovesyiyi/Transport-GIS)',

			],
		image: '/teaching/transport-and-gis.jpg',
	},
	{
		name: 'CP 4190: Intro to Climate Change Planning',
		description:
			[
				'This course is an introduction to the major topics in climate change planning, including the scientific basis of the greenhouse effect, the history of Earth’s climate, energy options, economics, and public policy, the effect of climate change on food, water, and health, and the national and international legal frameworks for the management of climate change.',
				'[Syllabus](https://github.com/jesuslovesyiyi/Understanding-Climate-Change)',
			],
		image: '/teaching/climate-change.jpg',
	},
	{
		name: 'CP 8012: PhD Foundations Seminar',
		description:
			[
				'The PhD Foundations Seminar seeks to provide an opportunity for incoming doctoral students to develop a plan of study, Prepare for research and teaching roles, and examine the ethical issues of responsible conduct of research.',
				'[Syllabus](https://www.notion.so/Fall-2025-PhD-Foundations-Seminar-CP-8012-1fea6d2c9012802888e0cb3af2dbadf6?pvs=4)',
			],
		image: '/teaching/foundations.avif',

	},
]

const Course = ({ name, description, image, github, code }) => {
	return (
		<div className="course">
			<img src={image} alt={name} className="course__image" />
			<div className="course__info">
				<h3>{name}</h3>

				{Array.isArray(description) ? (
					description.map((desc, idx) => (
						<ReactMarkdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]} key={idx}>{desc}</ReactMarkdown>
					))
				) : (
					<ReactMarkdown>{description}</ReactMarkdown>
				)}

			</div>
		</div>
	)
}

const Teaching = () => {
	return (
		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					src="/teaching/Profile-Pic-Teaching.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Teaching
				</Typography>
			</div>

			{/* Course List */}
			<div className="teaching">
				<div className="teaching-wrapper">
					<div className="teaching-grid">
						{courses.map((course, index) => (
							<Course key={index} {...course} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Teaching

