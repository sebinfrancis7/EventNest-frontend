import { Button, Typography } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Wishlist from '../components/Wishlist';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';
import Card from '../components/Card';

const url = 'https://eventnest-server.herokuapp.com/';

function createCard(event, i) {
	if(event)
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
	const [events, setEvents] = useState([]);
	const [user, setUser] = useContext(UserContext);

// ++++++ codegasm +++++++
// by courtesy of https://gist.github.com/ericls/f11d58b69faa236883fc5c0249b315dc +++++++
	function getData() {
		const data = Promise.all(
			user.data.events.map(async(eid) =>  await (await fetch(url + 'events/' + eid)).json())
		)
		return data;
	} 
	
	useEffect(() => {
		// waise bhi ye galat hi hai backend mai route dalna jyada accha rehga user kabhi updated nai rehta context mai 
		// toh newly created events nai dikhega 
		// but as intresting challenge ye kr dia
		getData()
		.then(data => {
			setEvents(data)
		  })
	},[user]);

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
						{events.map(createCard)}
					</div>	
				</div>
			</Drawer>
		</div>
	);
}

export default Dashboard;
