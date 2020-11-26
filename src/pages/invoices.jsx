import React, { useState, useContext, useEffect} from 'react';
import { List, Typography } from '@material-ui/core';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';

const url = 'https://eventnest-server.herokuapp.com/';

function Ticket(purchase) {
	const [title, setTitle] = useState('');
	useEffect(() => {
		fetch(url + 'events?_id=' + purchase.event)
			.then(res=> res.json())
			.then(data => {
				setTitle(data[0].title);
			});
	},[]);

	return (
		<Link to={'/invoices/' + purchase.transactionid}>
			<ListItem button key={purchase.event}>
				<ListItemIcon><ReceiptOutlinedIcon /></ListItemIcon>
				<ListItemText primary={title + '\t' + 'Tickets: ' + purchase.tickets} />
			</ListItem>
		</Link>
	);
}

function Tickets() {
	const [user, setUser] = useContext(UserContext);
	return (
		<List>
			{user.data.purchases.map(Ticket)}
		</List>
	);
}

function TicketsPage() {
	let [user, setUser] = useContext(UserContext);
	console.log(user);
	return (
		<div>
			<Drawer>
				<div>
					<Typography variant="h3">
						Tickets
					</Typography>
					<div>
						<Tickets />
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default TicketsPage;