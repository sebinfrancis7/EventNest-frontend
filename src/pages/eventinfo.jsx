import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
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
import { useUserContext, UserContext } from '../userContext';
import {
	FacebookShareButton,
	TwitterShareButton
  } from "react-share";

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
	const [ loadRazor, setLoadRazor ] = useState(true);
	const [user, setUser] = useContext(UserContext);
	const { match: { params } } = props;
	let history = useHistory();

	async function displayRazorpay() {
		if(Object.keys(user).length == 0){
			history.push('/signin');
			return;
		}
		if(loadRazor) {
			const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
			if (!res) {
				alert('Razorpay SDK failed to load. Are you online?');
				return;
			}
			setLoadRazor(false);
		}
		const options = {
			key:'rzp_test_Cly42HaznEIi1i',
			currency: 'INR',
			amount: orderData.amount,
			order_id: orderData.id,
			name: 'money go brrrrrrrrrrrrrr',
			description: 'Paisa de chal',
			
			handler: function (response) {
				let values = {
					razorpay_signature : response.razorpay_signature,
					razorpay_order_id : response.razorpay_order_id,
					transactionid : response.razorpay_payment_id,
					transactionamount :  orderData.amount,
					eventId: params.event_id,
					tickets: tickets
				}
				axios.post('https://eventnest-server.herokuapp.com/razorpay/payment',values, { withCredentials : true })
				.then(res=>{alert("Success")})
				.catch(e=>console.log(e))
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
		if(details.price)
		{ 
			axios
				.post('https://eventnest-server.herokuapp.com/razorpay', postBody)
				.then(res => {
					setOrder(res.data);
				});
		}
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
										<Typography className="event-title" component="h4" variant="h5">
											Only {details.max_attendees - details.attendees} left !!!
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
								<FacebookShareButton 
									url={"https://www.facebook.com/EventNest-102276125061269"}
									quote={"Your online destination for hosting"}
									hashtag={"#"+ details.title}>
									<FacebookIcon />
								</FacebookShareButton>
								<TwitterShareButton 
									title={"Hey checkout this event on EventNest " + details.title}
									url={window.location.href}
									hashtag={["#"+ details.title, "#eventnest"]}>
									<TwitterIcon />
								</TwitterShareButton>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={8} xs={12}>
						<Card className="shadow-large">
							<CardHeader
								title="Description"
							/>
							<CardContent>
								{details.description}
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
