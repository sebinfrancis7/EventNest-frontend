import React from 'react';
import Navbar from '../components/navbar';
import EventImage from '../assets/festivity.svg';
import { Button, Grid, Typography } from '@material-ui/core';
import '../sass/homepage.scss';

export default function Homepage() {
	return (
		<div>
			<Navbar />
			<Grid container >
				<Grid conatiner item xs={12} lg={6} alignItems="center" justify="center" direction="column" className="title-container">
					<Typography variant="h3" alignItems="center" justify="center" className="title">
						Welcome to Procyon
					</Typography>
					<Button variant="contained" color="primary" className="button">
						Explore Events
					</Button>
				</Grid>
				<Grid conatiner item xs={12} lg={6} alignItems="center" justify="center">
					<img src={EventImage} alt="Festival Image" className={'event-image'}/>
				</Grid>
			</Grid>
			{/* <div className={'landing'}></div> */}
		</div>
	);
}