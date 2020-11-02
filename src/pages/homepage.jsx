import React from 'react';
import Navbar from '../components/Navbar';
import EventImage from '../assets/festivity.svg';
import { Button, Grid, Link, StylesProvider, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import '../sass/homepage.scss';
import EventPanel from '../components/EventPanel';

export default function Homepage() {
	return (
		<StylesProvider injectFirst>
			<Navbar />
			<Grid container className="welcome-container">
				<Grid conatiner item xs={12} lg={6} alignItems="center" justify="center" direction="column" className="title-container">
					<Typography variant="h3" alignItems="center" justify="center" className="title">
						Welcome to Procyon
					</Typography>
					<Link href="#events">
						<Button variant="contained" color="primary" className="button">
							Explore Events
						</Button>
					</Link>
				</Grid>
				<Grid conatiner item xs={12} lg={6} alignItems="center" justify="center">
					<img src={EventImage} alt="Festival Image" className={'event-image'} />
				</Grid>
			</Grid>
			<div className="events" id="events">
				<EventPanel />
			</div>
		</StylesProvider>
	);
}