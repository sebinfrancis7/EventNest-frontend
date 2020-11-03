import React, { useState } from 'react';
import axios from 'axios';

function createvent() {

	const [details, setDetails] = useState({ organizer: '', title: '', category: '', city: '', image_url: '', price: '', description: '', attendees: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('clicked');
		console.log(JSON.stringify(details));
		const data = JSON.stringify(details);
		axios
			.post('http://localhost:4000/events', data)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});

	};
	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;

		setDetails(prevValue => {
			if (inputname === 'name') {
				return {
					organizer: inputvalue, title: prevValue.title, category: prevValue.category, city: prevValue.city, image_url: prevValue.image_url, price: prevValue.price, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'title') {
				return {
					organizer: prevValue.organizer, title: inputvalue, category: prevValue.category, city: prevValue.city, image_url: prevValue.image_url, price: prevValue.price, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'category') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: inputvalue, city: prevValue.city, image_url: prevValue.image_url, price: prevValue.price, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'city') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: prevValue.category, city: inputvalue, image_url: prevValue.image_url, price: prevValue.price, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'image_url') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: prevValue.category, city: prevValue.city, image_url: inputvalue, price: prevValue.price, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'price') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: prevValue.category, city: prevValue.city, image_url: prevValue.image_url, price: inputvalue, description: prevValue.description, attendees: prevValue.attendees
				};
			} else if (inputname === 'description') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: prevValue.category, city: prevValue.city, image_url: prevValue.image_url, price: prevValue.price, description: inputvalue, attendees: prevValue.attendees
				};
			} else if (inputname === 'attendees') {
				return {
					organizer: prevValue.organizer, title: prevValue.title, category: prevValue.category, city: prevValue.city, image_url: prevValue.image_url, price: prevValue.price, description: prevValue.description, attendees: inputvalue
				};
			}
		}
		);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="name"
					placeholder="enter organizer_id"
					value={details.organizer}
					onChange={handleChange}
				/>
				<br />
				<input
					name="title"
					placeholder="enter title"
					value={details.title}
					onChange={handleChange}
				/>
				<br />
				<input
					name="category"
					placeholder="enter category"
					value={details.category}
					onChange={handleChange}
				/>
				<br />
				<input
					name="city"
					placeholder="enter city"
					value={details.city}
					onChange={handleChange}
				/>
				<br />
				<input
					name="image_url"
					placeholder="enter image url"
					value={details.image_url}
					onChange={handleChange}
				/>
				<br />
				<input
					name="price"
					placeholder="enter price"
					value={details.price}
					onChange={handleChange}
				/>
				<br />
				<textarea
					name="description"
					placeholder="enter description"
					value={details.description}
					onChange={handleChange}
				/>
				<br />
				<input
					name="attendees"
					placeholder="enter attendees"
					value={details.attendees}
					onChange={handleChange}
				/>
				<br />
				<button type="submit">Create Event</button>
			</form>
		</div>
	);
}

export default createvent;
