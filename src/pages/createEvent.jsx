import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Button, Grid, makeStyles, StylesProvider, TextField, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../sass/createEvent.scss';


const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	submit: { 
		padding: '10px',
		margin: theme.spacing(3, 0, 2),
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link to="/">
                Procyon
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function CreatEvent() {
	const classes = useStyles();

	const [details, setDetails] = useState({ organizer: '', title: '', category: '', city: '', image_url: '', price: '', description: '', max_attendees: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(details);
		axios
			.post('http://localhost:4000/events', details)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};
	
	useEffect(() => {
		console.log(details);
	}, [details]);

	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;
		console.log(event.target.value);
		
		
		const newDetails = { ...details, [inputname]: inputvalue};
		console.log(inputvalue);
		setDetails(newDetails);

	}

	return (
		<StylesProvider injectFirst>
			<Navbar/>
			<Grid container component="main" className={classes.root}>
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						{/* <Avatar className={classes.avatar}>
							<AddCircle />
						</Avatar> */}
						<Typography component="h1" variant="h5">
							Create Event
						</Typography>
						<form className={classes.form} noValidate onSubmit={handleSubmit}>
							<TextField 							
								name="organizer"
								id="organizer"
								label="Organizer"
								variant="outlined"
								margin="normal"
								className="event-input"
								value={details.organizer}
								onChange={handleChange}
							/>
							<TextField
								name="title"
								id="title"
								label="Event Title"
								variant="outlined"
								margin="normal"
								className="event-input"
								value={details.title}
								onChange={handleChange}
							/>
							<TextField
								name="category"
								label="Event Category"
								variant="outlined"
								margin="normal"
								className="event-input"
								value={details.category}
								onChange={handleChange}
							/>
							<TextField
								name="city"
								id="city"
								label="Event Location"
								variant="outlined"
								margin="normal"
								className="event-input"
								value={details.city}
								onChange={handleChange}
							/>
							<TextField
								name="price"
								id="price"
								label="Ticket Price"
								variant="outlined"
								margin="normal"
								className="event-input"
								type="number"
								value={details.price}
								onChange={handleChange}
							/>
							<TextField
								name="max_attendees"
								id="max_attendees"
								label="Max max_attendees"
								variant="outlined"
								margin="normal"
								className="event-input"
								type="number"
								value={details.max_attendees}
								onChange={handleChange}
							/>
							<TextField
								name="image_url"
								id="image_url"
								label="Banner Image URL"
								variant="outlined"
								margin="normal"
								// className="event-input"
								value={details.image_url}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								name="description"
								id="description"
								label="Description"
								placeholder="Event Description"
								variant="outlined"
								margin="normal"
								value={details.description}
								onChange={handleChange}
								rows={4}
								multiline
								fullWidth
							/>
							<Button 
								type="submit"
								variant="contained"
								color="primary"
								className="submit-button"
								fullWidth
							>
								Create Event
							</Button>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
		</StylesProvider>

	);
}

export default CreatEvent;
