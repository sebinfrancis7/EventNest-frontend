import React from 'react';
import CardRow from '../components/CardRow.jsx';
import './EventPanel.scss';

function EventPanel() {
	return (
		<div>
			<div>
				<h2 className='events-type'>TRENDING</h2>
				<CardRow />
			</div>
			<div>
				<h2 className='events-type'>MUSIC</h2>
				<CardRow 
					category={'music'}
				/>
			</div>
			<div>
				<h2 className='events-type'>Comedy</h2>
				<CardRow 
					category={'comedy'}
				/>
			</div>
			<div>
				<h2 className='events-type'>RECOMMENDED</h2>
				<CardRow />
			</div>
		</div>

	);
}

export default EventPanel;
