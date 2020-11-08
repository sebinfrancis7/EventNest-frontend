import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Card, Grid, StylesProvider, Button, Paper, CardHeader } from '@material-ui/core';
import '../sass/eventinfo.scss';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function EventInfo(props) {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const { match: { params } } = props;
		console.log(params.event_id);
		let url = 'https://eventnest-server.herokuapp.com/events?_id=' + params.event_id;
		axios
			.get(url)
			.then(res => {
				console.log(res);
				setDetails(res.data[0]);
			});
	}, []);

	return (
		<StylesProvider injectFirst>
			<Navbar />
			{/* <h2>event data</h2>
			<h2>{details.title}</h2>
			<h2>{details.category}</h2>
			<h2>{details.city}</h2>
			<h2>{details.price}</h2>
			<h2>{details.image_url}</h2>
			<h2>{details.attendees}</h2> */}
			<Grid container>
				<Grid item sm={2} xs={1}></Grid>
				<Grid container item sm={8} spacing={2} xs={10}>
					<Grid className="event-page-container" item xs={12}>
						<Card className="event-page-card shadow-large">
							<CardMedia
								alt={details.title}
								className="event-banner-image"
								component="img"
								image={details.image_url}
								title={details.title}
							/>
							<CardContent className="event-page-content-container">
								<Grid container direction="row" item xs={12}>
									<Grid direction="column" item sm={6} xs={12}>
										<Typography className="event-title" component="h4" variant="h5">
											{details.title}
										</Typography>
										<Typography component="h2" variant="subtitle1">
											{details.category} | {details.city || details.venue_addr} | ₹{details.price}
										</Typography>
									</Grid>
									<Grid className="event-button-container" item sm={6} xs={12}>
										<Button
											className="event-register-button button-shadow"
											color="primary"
											variant="contained"
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
					<Grid item sm={4} xs={12}>
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
					<Grid item sm={8} xs={12}>
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
				<Grid item sm={2} xs={1}></Grid>
			</Grid>
		</StylesProvider>
	);
}

export default EventInfo;
