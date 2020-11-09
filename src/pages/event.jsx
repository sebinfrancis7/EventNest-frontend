import React, { useEffect, useState } from 'react';
import axios from 'axios';

function event(props) {
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
		<div>
			<h2>event data</h2>
			<h2>{details.title}</h2>
			<h2>{details.category}</h2>
			<h2>{details.city}</h2>
			<h2>{details.price}</h2>
			<h2>{details.image_url}</h2>
			<h2>{details.attendees}</h2>
		</div>
	);
}

export default event;
