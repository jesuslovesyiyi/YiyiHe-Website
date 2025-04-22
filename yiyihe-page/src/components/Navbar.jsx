
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const Navbar = () => {


	useEffect(() => {
		const isMobile = window.innerWidth <= 768;
		if (isMobile) {
			return
		}


		let lastScrollTop = 0;
		const navbar = document.querySelector(".navbar-container");

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
				className='navbar-container'>

				<Toolbar>
					{/* <Typography className='button main-page-link'
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}>
						<Link to="/"
							style={{ color: 'inherit', textDecoration: 'none', alignSelf: 'left' }}>
							Yiyi He
						</Link>
					</Typography> */}

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