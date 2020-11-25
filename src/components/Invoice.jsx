import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { UserContext } from '../userContext';
import '../sass/invoice.scss';

const url = 'https://eventnest-server.herokuapp.com/';
function Invoice(props) {
	const [user, setUser] = useContext(UserContext);
	const [name, setName] = useState('');
	const [order, setOrder] = useState({});
	const { match: { params } } = props;
    
	useEffect(() => {
		if(user.hasOwnProperty('data')){
			const purchases = user.data.purchases;
			console.log(purchases);
			console.log(params.invoice_id);
			const waw = purchases.filter(purchase => purchase.transactionid == params.invoice_id);
			console.log(waw[0]);
			setOrder(waw[0]);
		}
	},[user]);

	useEffect(() => {
		console.log(order);
		fetch(url + 'events?_id=' + order.event)
			.then(res=> res.json())
			.then(data => {
				console.log(data[0].title);
				setName(data[0].title);
			});
	}, [order]);

	return (
		<div className='invoice-container'>
			<Typography variant='h5'>
                Payment Status: Successfull
			</Typography>
			<Typography variant='h5'>
                Event: {name}
			</Typography>
			<Typography variant='h5'>
                Tickets: {order.tickets}
			</Typography>
			<Typography variant='h5'>
                Amount: {order.transactionamount / 100}
			</Typography>
			<Typography variant='h5'>
                Order ID: {params.invoice_id}
			</Typography>
		</div>
	);
}

export default Invoice;