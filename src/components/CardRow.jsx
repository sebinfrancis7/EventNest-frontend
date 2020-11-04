/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import './CardRow.scss';

function createCard(event) {
	return (
		<div className='event-card'>
			<Card
				event_id={event._id}
				img_url={event.image_url}
				title={event.title}
				description={event.description}
				price={event.price}
				city={event.city || event.venue_addr}
			/>
		</div>
	);

}

function CardRow(props) {
	// eslint-disable-next-line
	const [events, setEvents] = useState([]);
	const listRef = useRef(null);

	useEffect(() => {
		var category = props.category;
		console.log(category);
		let url;
		if (category)
			url = 'http://localhost:4000/events?category=' + category;
		else
			url = 'http://localhost:4000/events';
		axios
			.get(url)
			.then(res => {
				console.log(res);
				setEvents(res.data);
			});
	}, []);

	const handleScrollLeft = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				left: -500,
				behavior: 'smooth',
			});
		}
	};

	const handleScrollRight = () => {
		if (listRef.current) {
			listRef.current.scrollBy({
				left: 500,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className='cards-container'>
			<div className='events-row' ref={listRef}>
				{events.map(createCard)}
			</div>
			<div className='scroll-buttons'>
				<IconButton onClick={handleScrollLeft} className='left-button'>
					<ChevronLeftIcon />
				</IconButton>
				<IconButton onClick={handleScrollRight} className='right-button'>
					<ChevronRightIcon />
				</IconButton>
			</div>
		</div>

	);
}

export default CardRow;
