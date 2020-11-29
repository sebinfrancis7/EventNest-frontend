import { Button, Typography } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Wishlist from '../components/Wishlist';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';
import Card from '../components/Card';

const url = 'https://eventnest-server.herokuapp.com/';

function createCard(event, i) {
	console.log('card',event);
	return (
		<Card
			city={event.city || event.venue_addr}
			description={event.description}
			event_id={event._id}
			img_url={event.image_url}
			key={i}
			price={event.price}
			title={event.title}
		/>
	);
} 

function Events() {
	const [events, setEvents] = useState([]);
	const [user, setUser] = useContext(UserContext);

	useEffect(() => {
		let yeet = [];
		user.data.events.map(event_id => {
			fetch(url + 'events?_id=' + event_id)
				.then(res=> res.json())
				.then(data => {
					if(data.length != 0) {
						yeet.push(data[0]);
						setEvents(yeet);
					}
				});
		});
	},[user]);

	useEffect(() => {
		console.log('events',events);
	},[events]);

	return (
		events.map(createCard)
	);
}

function DashboardContent () {
	return (
		<Link className='no-underline' to='/create-event'>
			<Button
				className='create-event-btn'
				color='primary'
				variant='outlined'
			>
				Create Event
			</Button>
		</Link>
	);
}

function Dashboard() {

	return (
		<div>
			<Drawer>
				<div>
					{/* <h2>{user.data._id}</h2>
					<h2>{user.data.username}</h2>
					<h2>{user.data.display_name}</h2> */}
					{/* <h2>wishlist</h2> */}
					<Typography variant="h3">
						Dashboard
					</Typography>
					<div>
						<DashboardContent />
					</div>
					<Typography variant="h3">
						Here are your Events
					</Typography>
					<div className='event-card'>
						<Events />
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default Dashboard;
