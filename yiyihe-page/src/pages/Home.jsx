import React from 'react';
import { Container } from '@mui/material';
import Hero from '../components/Hero'
import News from '../components/News'

const Home = () => {
	return (
		<div className="home">

			<Hero />

			<Container>
				<News />
			</Container>

		</div>
	);
};

export default Home;