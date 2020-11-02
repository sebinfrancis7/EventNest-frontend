import React, { useRef } from 'react';
import Card from './Card.jsx';
import events from '../events.js';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import './CardRow.scss';

function createCard(event) {
	return (
		<div className='event-card'>
			<Card
				img_url={event.img_url}
				title={event.title}
				cardContent={event.cardContent}
				price={event.price}
				info={event.info}
			/>
		</div>
	);

}

function CardRow() {

	const listRef = useRef(null);

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
		<div>
			<div className='events-row' ref={listRef}>
				{events.map(createCard)}
			</div>
			<div className='scroll-buttons'>
				<IconButton onClick={handleScrollLeft}>
					<ChevronLeftIcon className='left-button' />
				</IconButton>
				<IconButton onClick={handleScrollRight}>
					<ChevronRightIcon className='right-button' />
				</IconButton>

			</div>
		</div>

	);
}

export default CardRow;
