import React from 'react'
import { Typography } from '@mui/material';

const courses = [
	{
		name: 'CP4813: Urban Data Science',
		description: 'In today’s world, understanding cities requires more than just traditional methods. Urban planners and social scientists are increasingly turning to data science techniques to gain deeper insights into the complex issues that cities face. This course serves as an introduction to data science for undergraduate and graduate students in urban planning and related fields.',
		image: '/teaching/urban-data-science.jpg',
		github: 'https://github.com/jesuslovesyiyi/Urban-Data-Science',
	},
	{
		name: 'CP6542: Transport & GIS',
		description: ' Transportation data models, data processing, modeling, and service delivery in geographical information systems.',
		image: '/teaching/transport-and-gis.jpg',
		github: 'https://github.com/jesuslovesyiyi/Transport-GIS'
	},
	{
		name: 'CP 4190: Intro to Climate Change Planning',
		description: 'This course equips students with the knowledge and methods necessary to undertake the next generation of state, local, corporate, and enterprise climate action planning.',
		image: '/teaching/climate-change.jpg',
		github: 'https://github.com/jesuslovesyiyi/Understanding-Climate-Change',
	},

]

const Course = ({ name, description, image, github, code }) => {
	return (
		<div className="course">
			<img src={image} alt={name} className="course__image" />
			<div className="course__info">
				<h3>{name}</h3>
				<p>{description}</p>
				<div className="course__links">
					<a href={github} target="_blank" rel="noopener noreferrer">[GitHub Repo]</a>
				</div>
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

