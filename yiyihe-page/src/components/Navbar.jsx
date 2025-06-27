
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const Navbar = () => {
	useEffect(() => {
		const isMobileOrTablet = window.innerWidth <= 1024;
		const navbar = document.querySelector(".navbar-container");

		if (isMobileOrTablet) {
			const handleMobileScroll = () => {
				if (window.scrollY < window.innerHeight) {
					navbar.style.position = "sticky";
				} else {
					navbar.style.position = "static";
				}
			};
			window.addEventListener("scroll", handleMobileScroll);
			return () => window.removeEventListener("scroll", handleMobileScroll);
		}

		let lastScrollTop = 0;

		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				// Scrolling down
				navbar.classList.add("hidden");
			} else {
				// Scrolling up
				navbar.classList.remove("hidden");
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	return (

		<Container
			className='navbar-container-wrapper tweak-fixed-header'
		>
			<AppBar
				className='navbar-container'
			>

				<Toolbar>

					<Button
						className='button'
						color="inherit"
						component={Link} to="/">
						Home
					</Button>

					<Button
						className='button'
						color="inherit"
						component={Link} to="/team">
						Team
					</Button>

					<Button
						className='button'
						color="inherit"
						component={Link} to="/research">
						Research
					</Button>

					<Button
						className='button'
						color="inherit"
						component={Link}
						to="/teaching">
						Teaching
					</Button>

					<Button
						className='button'

						color="inherit"
						component={Link} to="/publications">
						Publications
					</Button>

					<Button
						className='button'

						color="inherit"
						component={Link}
						to="/contact">
						Contact
					</Button>



				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default Navbar;