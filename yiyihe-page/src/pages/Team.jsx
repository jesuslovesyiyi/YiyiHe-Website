
import React from 'react'
import { Typography } from '@mui/material';

const teamData = {
	principalInvestigator: [
		{
			name: 'Yiyi He',
			position: 'Assistant Professor',
			bio: 'Yiyi He is an assistant professor in the School of City and Regional Planning (SCaRP) at the College of Design at Georgia Tech. Her research centers on the interdisciplinary fields of urban planning, GIScience, climate science, and artificial intelligence. She is interested in building a better understanding of the uncertainty and asymmetric impacts of climate-change-induced extreme weather events (e.g., flooding, wildfires, extreme heat) on critical components of the built environment (e.g., lifeline infrastructure networks, vulnerable neighborhoods). She leverages data-driven approaches, such as GIS, network science, hyperspectral remote sensing, machine learning, and spatial statistics to tackle complex challenges in climate change and resilience research and to inform more intelligent planning and policy directives.',
			image: '/team-member/yiyihe.png',
			linkedin: 'https://www.linkedin.com/in/yiyihe',
			github: 'https://github.com/jesuslovesyiyi',
			website: 'https://planning.gatech.edu/people/yiyi-he'
		}
	],
	currentMembers: [
		{
			name: 'Yuhan Xu',
			position: 'PhD student',
			bio: 'Yuhan is pursuing her PhD in City and Regional Planning at Georgia Tech. Her research interests lie at the intersection of urban planning, transportation, public health, and data science. She is particularly interested in addressing urban weather extremes (e.g., heatwaves, flooding, wildfires) to help build resilient and equitable cities. Her previous work involves leveraging geospatial data analysis and advanced machine learning techniques to drive evidence-based solutions for sustainable urban development and environmental planning. Yuhan received her bachelor and master degrees in landscape architecture from Southeast University, China.Before joining Tech, she also worked as a research assistant in the Department of Urban Planning and Design at the University of Hong Kong.',
			image: '/team-member/yuhan.jpg',
			linkedin: 'https://www.linkedin.com/in/yuhan-xu-0127b5314/',
			github: 'https://github.com/Sealxuyh',
			website: 'http://www.yuhanxu.top/'
		},

		{
			name: 'Yuehan Zhang',
			position: 'Graduate Teaching Assistant',
			bio: 'Yuehan Zhang is a Master student in Computational Science & Engineering at Georgia Institute of Technology, with a bachelor degree in Theoretical and Applied Mechanics from Fudan University. She has worked on projects involving transportation analytics and fine-tuning large language models. With experience in model optimization and hardware-software co-design, she is passionate about leveraging data-driven methods to solve complex, real-world problems.',
			image: '/team-member/yuehan.jpg',
			linkedin: 'http://linkedin.com/in/yuehan-zhang-9676bb189',
			github: '',
			website: ''
		},
		{
			name: 'Gabriel Appiah',
			position: 'PhD student',
			bio: 'Gabriel Appiah is a Ph.D. student at the School of City and Regional Planning. Before joining the program, he worked as a Regional Planner II at the Siouxland Interstate Metropolitan Planning Council in Iowa. His broader research interests include GIS, urban planning, and data science. His dissertation examines GIS development disparities worldwide, specifically focusing on inequalities in access to geospatial data and GIS education. Dr. Clio Andris and Dr. Yiyi He serve as his advisors. Gabriel holds an M.A. in Urban and Regional Studies from Minnesota State University and a B.S. in Development Planning from Kwame Nkrumah University of Science and Technology in Ghana.',
			image: '/team-member/gabrielappiah.jpg',
			linkedin: 'http://linkedin.com/in/yuehan-zhang-9676bb189',
			github: 'https://github.com/Gabriel-Appiah',
			website: ''
		},
		{
			name: 'Tiger Peng',
			position: 'Graduate Research Assistant',
			bio: 'Tiger is pursuing a master’s degree in computer science at Georgia Tech with a concentration in machine learning. He will graduate in May 2026. His interests lie at the intersection of computing, data, and sustainability. He has pursued this passion through an internship at the solar company Silicon Ranch Corporation, where he performed data analysis and predictive modeling, and a research assistantship with the Georgia Tech School of City and Regional Planning, where he studied the relationship between weather and power grid stability in India.',
			image: '/team-member/tigerpeng.jpg',
			linkedin: ' https://www.linkedin.com/in/pengtiger/',
			github: 'https://github.com/TigerPeng2',
			website: 'https://www.tigerypeng.com/'
		},

	],
	pastMembers: [
		{
			name: 'Tara Liu',
			position: 'Graduate Research Assistant',
			bio: 'Tara(they/their) is a master student in CSE and an aspiring data scientist. They are interested in empowering the marginalized communities with technology and have 10+ industry experience. They enjoy nature and metal music in free time. Fun fact: Taco cat spelled backward is taco cat.',
			image: '/team-member/taraliu.jpg',
			linkedin: 'https://www.linkedin.com/in/tara-tingyu-liu/',
			github: 'https://github.com/taraliu23',
			website: 'http://taraliu.net/'
		},
		{
			name: 'Changmin Seok',
			bio: 'Changmin is a second-year master student in city and regional planning.His research focuses on transportation economics and economic development in emerging cities of the Global South.Before joining Tech, Changmin was a loan officer at the Export- Import Bank of Korea, where he focused on deploying feasibility studies and due diligence for infrastructure projects in the developing countries.',
			position: 'Graduate Research Assistant',
			image: '/team-member/changminseok.jpg',
			linkedin: 'www.linkedin.com/in/changmin-seok-63a782b1',
			github: 'https://github.com/changmin-seok',
			website: ''
		},


	]
}

const TeamMember = ({ name, position, bio, image, linkedin, github, website }) => {
	return (
		<div className="team-member">
			<img src={image} alt={name} className="team-member__image" />
			<div className="team-member__info">
				<h3>{name}</h3>
				<h4>{position}</h4>
				<p>{bio}</p>
				{linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">[Linkedin]</a>}
				&nbsp;
				{github && <a href={github} target="_blank" rel="noopener noreferrer">[GitHub]</a>}
				&nbsp;
				{website && <a href={website} target="_blank" rel="noopener noreferrer">[Website]</a>}
			</div>
		</div>
	)
}

const TeamSection = ({ title, members }) => {
	if (members.length === 0) {

		return null // Don't render empty sections
	}

	return (
		<div className="team-section">
			<h3>{title}</h3>
			<div className="team-grid">
				{members.map((member, index) => (
					<TeamMember key={index} {...member} />
				))}
			</div>
		</div>
	)
}


const Team = () => {
	return (

		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					src="/team-member/Profile-Pic-Team.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Team
				</Typography>
			</div>



			<div className="team">
				{/* <h1>Meet Our Team</h1> */}
				<div className="team-wrapper">
					<TeamSection title="Principal Investigator" members={teamData.principalInvestigator} />
					<TeamSection title="Current Members" members={teamData.currentMembers} />
					<TeamSection title="Alumni" members={teamData.pastMembers} />
				</div>
			</div>
		</div>

	)
}


export default Team;
