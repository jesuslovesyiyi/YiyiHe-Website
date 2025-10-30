
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';

const navLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Team', to: '/team' },
	{ label: 'Research', to: '/research' },
	{ label: 'Teaching', to: '/teaching' },
	{ label: 'Publications', to: '/publications' },
	{ label: 'Contact', to: '/contact' },
];

const NavbarMobile = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => setOpen((prev) => !prev);
	const handleClose = () => setOpen(false);

	return (
		<>
			<AppBar position="sticky" className="navbar-container">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleToggle}
						className="navbar-mobile-hamburger"
					>
						{open ? (
							<span className="navbar-mobile-close">&times;</span>
						) : (
							<img src="/burger.ico" alt="menu" className="navbar-mobile-burger" />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={open}
				onClose={handleClose}
				PaperProps={{
					className: "navbar-mobile-drawer"
				}}
			>
				<List className="navbar-mobile-list">
					{navLinks.map((item) => (
						<ListItem button key={item.to} component={Link} to={item.to} onClick={handleClose} className="navbar-mobile-listitem">
							<ListItemText primary={item.label} className="navbar-mobile-listtext" />
						</ListItem>
					))}
				</List>
			</Drawer>

		</>
	);
};

export default NavbarMobile;
