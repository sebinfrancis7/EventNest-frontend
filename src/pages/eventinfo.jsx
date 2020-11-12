import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Card, Grid, StylesProvider, Button, CardHeader } from '@material-ui/core';
import '../sass/eventinfo.scss';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

function EventInfo(props) {
	const [details, setDetails] = useState([]);
	const [orderData, setOrder] = useState();

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}

		const options = {
			key:'rzp_test_Cly42HaznEIi1i',
			currency: 'INR',
			amount: orderData.amount,
			order_id: orderData.id,
			name: 'money go brrrrrrrrrrrrrr',
			description: 'Paisa de chal',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			// prefill: {
			// 	name,
			// 	email: 'sdfdsjfh2@ndsfdf.com',
			// 	phone_number: '9899999999'
			// }
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}
	
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
	}, [props]);

	useEffect(() => {
		const postBody = {
			amount: details.price
		};
		axios
			.post('https://eventnest-server.herokuapp.com/razorpay', postBody)
			.then(res => {
				setOrder(res.data);
				console.log(orderData);
			});
	}, [details]);

	return (
		<StylesProvider injectFirst>
			{/* <Navbar /> */}
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
									<Grid container direction="column" item sm={6} xs={12}>
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
											onClick={displayRazorpay}
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
