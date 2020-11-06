import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Card, Grid, StylesProvider, Button, Paper, CardHeader } from '@material-ui/core';
import '../sass/eventinfo.scss';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function EventInfo(props) {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const { match: { params } } = props;
		console.log(params.event_id);
		let url = 'http://localhost:4000/events?_id=' + params.event_id;
		axios
			.get(url)
			.then(res => {
				console.log(res);
				setDetails(res.data[0]);
			});
	}, []);


	return (
		<StylesProvider injectFirst>
			<Navbar/>
			{/* <h2>event data</h2>
			<h2>{details.title}</h2>
			<h2>{details.category}</h2>
			<h2>{details.city}</h2>
			<h2>{details.price}</h2>
			<h2>{details.image_url}</h2>
			<h2>{details.attendees}</h2> */}
			<Grid container>
				<Grid item xs={1} sm={2}></Grid>
				<Grid item container xs={10} sm={8} spacing={2}>
					<Grid item xs={12} className="event-page-container">
						<Card className="event-page-card shadow-large">
							<CardMedia
								component="img"
								alt={details.title}
								image={details.image_url}
								title={details.title}
								className="event-banner-image"
							/>
							<CardContent className="event-page-content-container">
								<Grid item container xs={12} direction="row">
									<Grid item xs={12} sm={6} direction="column">
										<Typography variant="h5" component="h4" className="event-title">
											{details.title}
										</Typography>
										<Typography variant="subtitle1" component="h2">
											{details.category} | {details.city || details.venue_addr} | ₹{details.price}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} className="event-button-container">
										<Button 
											color="primary" 
											variant="contained"
											className="event-register-button button-shadow"
										>
											Register
										</Button>
									</Grid>
								</Grid>
							</CardContent>
							{/* <CardActions>
							<Button 
								size="small" 
								color="primary"
								startIcon={<ShareIcon/>}
							>
								Share
							</Button>
						</CardActions> */}
						</Card>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Card className="shadow-large">
							<CardHeader 
								title="Share"
							/>
							<CardContent>
								<FacebookIcon />
								<TwitterIcon />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Card className="shadow-large">
							<CardHeader 
								title="About"
							/>
							<CardContent>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo natus ratione facere officia placeat, assumenda ab hic ducimus qui deserunt quasi rerum laborum voluptatem ipsam tempora. Dolore debitis nulla tempora est libero eligendi? Voluptates fugiat possimus quasi aut beatae omnis aliquid? Expedita iure repudiandae natus possimus eligendi ipsam non, adipisci vitae ullam delectus autem sit et aperiam voluptatibus eum tempora, necessitatibus saepe eius assumenda, ea dolorum! Numquam libero deleniti voluptate repudiandae? Nisi eos ab recusandae deserunt atque odit temporibus, ducimus magni quas ipsam a, amet dolorum! Accusamus enim, impedit fuga unde reiciendis rem? Ea corporis maiores sed velit aut quam!
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Grid item xs={1} sm={2}></Grid>
			</Grid>
		</StylesProvider>
	);
}

export default EventInfo;
