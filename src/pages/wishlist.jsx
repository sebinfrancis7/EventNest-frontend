import { Typography } from '@material-ui/core';
import React, { useState, useContext, useEffect} from 'react';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';
import Card from '../components/Card';

const url = 'https://eventnest-server.herokuapp.com/';

function createCard(event, i) {
	return (
		<div className='event-card' key={i}>
			<Card
				city={event.city || event.venue_addr}
				description={event.description}
				event_id={event._id}
				img_url={event.image_url}
				price={event.price}
				title={event.title}
			/>
		</div>
	);
}

function Wishlist() {
	const [events, setEvents] = useState([]);
	const [user, setUser] = useContext(UserContext);

	useEffect(() => {
		user.data.wishlist.map(event_id => {
			fetch(url + 'events?_id=' + event_id)
				.then(res=> res.json())
				.then(data => {
					setEvents(events.concat(data));
				});
		});
	},[user]);

	useEffect(() => {
		console.log(events);
	},[events]);
    
	return (
		<div className='events-row'>
			{events.map(createCard)}
		</div>
	);
}

function WishlistPage() {
	let [user, setUser] = useContext(UserContext);
	console.log(user);
	return (
		<div>
			<Drawer>
				<div>
					{/* <h2>{user.data._id}</h2>
					<h2>{user.data.username}</h2>
					<h2>{user.data.display_name}</h2> */}
					{/* <h2>wishlist</h2> */}
					<Typography variant="h3">
						Here are your Wishlisted Events
					</Typography>
					<div>
						<Wishlist />
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default WishlistPage;
