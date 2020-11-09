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
		<Typography align="center" color="textSecondary" variant="body2">
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
			.post('https://eventnest-server.herokuapp.com/events', details)
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
			<Navbar />
			<Grid className={classes.root} component="main" container>
				<Grid className={classes.image} item md={7} sm={4} xs={false} />
				<Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
					<div className={classes.paper}>
						{/* <Avatar className={classes.avatar}>
							<AddCircle />
						</Avatar> */}
						<Typography component="h1" variant="h5">
							Create Event
						</Typography>
						<form className={classes.form} noValidate onSubmit={handleSubmit}>
							<TextField 							
								className="event-input"
								id="organizer"
								label="Organizer"
								margin="normal"
								name="organizer"
								onChange={handleChange}
								value={details.organizer}
								variant="outlined"
							/>
							<TextField
								className="event-input"
								id="title"
								label="Event Title"
								margin="normal"
								name="title"
								onChange={handleChange}
								value={details.title}
								variant="outlined"
							/>
							<TextField
								className="event-input"
								label="Event Category"
								margin="normal"
								name="category"
								onChange={handleChange}
								value={details.category}
								variant="outlined"
							/>
							<TextField
								className="event-input"
								id="city"
								label="Event Location"
								margin="normal"
								name="city"
								onChange={handleChange}
								value={details.city}
								variant="outlined"
							/>
							<TextField
								className="event-input"
								id="price"
								label="Ticket Price"
								margin="normal"
								name="price"
								onChange={handleChange}
								type="number"
								value={details.price}
								variant="outlined"
							/>
							<TextField
								className="event-input"
								id="max_attendees"
								label="Max max_attendees"
								margin="normal"
								name="max_attendees"
								onChange={handleChange}
								type="number"
								value={details.max_attendees}
								variant="outlined"
							/>
							<TextField
								fullWidth
								id="image_url"
								label="Banner Image URL"
								margin="normal"
								name="image_url"
								// className="event-input"
								onChange={handleChange}
								value={details.image_url}
								variant="outlined"
							/>
							<TextField
								fullWidth
								id="description"
								label="Description"
								margin="normal"
								multiline
								name="description"
								onChange={handleChange}
								placeholder="Event Description"
								rows={4}
								value={details.description}
								variant="outlined"
							/>
							<Button 
								className="submit-button"
								color="primary"
								fullWidth
								type="submit"
								variant="contained"
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
