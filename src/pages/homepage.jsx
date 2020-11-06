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
				color="primary"
				fullWidth
				onClick={handleSubmit}
				type="submit"
				variant="contained"
			>
				test
			</Button>	
			<Grid className="welcome-container" container>
				<Grid className="title-container" container direction="column" item lg={6} xs={12}>
					<Typography className="title" justify="center" variant="h3">
						Welcome to EventNest
					</Typography>
					<Typography className="subtitle" justify="center" variant="subtitle1">
						Your online destination for hosting and exploring events across the globe, at your fingertips.	
					</Typography>
					<Link href="#events">
						<Button className="button button-shadow" color="primary" variant="contained">
							Explore Events
						</Button>
					</Link>
					{/* <RouterLink to='/create-event'>
						<Button variant="contained" color="primary" className="button" hidden>
							Create Event
						</Button>
					</RouterLink> */}
				</Grid>
				<Grid alignItems="center" container item justify="center" lg={6} xs={12}>
					<img alt="Festival Image" className={'event-image'} src={EventImage} />
				</Grid>
			</Grid>
			<div className="events" id="events">
				<EventPanel />
			</div>
		</StylesProvider>
	);
}