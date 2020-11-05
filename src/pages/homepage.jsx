import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import EventImage from '../assets/blocks.jpg';
import { Button, Grid, Link, StylesProvider, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import '../sass/homepage.scss';
import EventPanel from '../components/EventPanel';

export default function Homepage() {
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get('http://localhost:4000/auth',{withCredentials: true })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<StylesProvider injectFirst>
			<Navbar />
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				test
			</Button>
			<Grid container className="welcome-container">
				<Grid container item xs={12} lg={6} direction="column" className="title-container">
					<Typography variant="h3" justify="center" className="title">
						Welcome to EventNest
					</Typography>
					<Typography variant="subtitle1" justify="center" className="subtitle">
						Your online destination for hosting and exploring events across the globe, at your fingertips.	
					</Typography>
					<Link href="#events">
						<Button variant="contained" color="primary" className="button button-shadow">
							Explore Events
						</Button>
					</Link>
					{/* <RouterLink to='/create-event'>
						<Button variant="contained" color="primary" className="button" hidden>
							Create Event
						</Button>
					</RouterLink> */}
				</Grid>
				<Grid container item xs={12} lg={6} alignItems="center" justify="center">
					<img src={EventImage} alt="Festival Image" className={'event-image'} />
				</Grid>
			</Grid>
			<div className="events" id="events">
				<EventPanel />
			</div>
		</StylesProvider>
	);
}