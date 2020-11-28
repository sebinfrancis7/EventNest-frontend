import { Typography } from '@material-ui/core';
import React, { useState, useContext, useEffect} from 'react';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';
import Card from '../components/Card';
import axios from 'axios';

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

// function Wishlist() {
// 	const [events, setEvents] = useState([]);
// 	const [user, setUser] = useContext(UserContext);

// 	useEffect(() => {
// 		user.data.wishlist.map(event_id => {
// 			fetch(url + 'events?_id=' + event_id)
// 				.then(res=> res.json())
// 				.then(data => {
// 					setEvents(events.concat(data));
// 				});
// 		});
// 	},[user]);

// 	useEffect(() => {
// 		console.log(events);
// 	},[events]);
    
// 	return (
// 		<div className='wishlist-cards'>
// 			<div className='events-row'>
// 				{events.map(createCard)}
// 			</div>
// 		</div>
// 	);
// }

function WishlistPage() {
	const [events, setEvents] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setErrror] = useState(); 
	useEffect(() => {
		async function fetchData() {
			let wurl = url + 'customer/wishlist';
			//let url = 'http://localhost:4000/users'

			let response = await fetch(wurl,
				{
					method: 'get',
					headers: {
						'Content-type': 'application/json'
					},
					credentials: 'include'
				});

			if (response.ok) {
				let json = await response.json();
				setEvents(json);
		 		
			}
			else {
				let json = await response.json();
				setErrror(json)
			}
			setLoaded(true);
		}
		fetchData();
	}, []);

	function Wishlist() {

		if(!loaded) {
			return 'Loading ...'
		}
		if(error) {
			return 'Some error occured while getting your purchases'
		}
		return (
			events.map(createCard)
		);
	}

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
					<div className='events-row events-row-wishlist' >
						< Wishlist />
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default WishlistPage;
