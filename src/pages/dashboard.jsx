import { Typography } from '@material-ui/core';
import React, { useState, useContext } from 'react';
// import Wishlist from '../components/Wishlist';
import { useUserContext, UserContext } from '../userContext';
import Drawer from './../components/Drawer';


function Dashboard() {
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
						Dashboard lelo
					</Typography>
					<div>
						{/* <Wishlist /> */}
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default Dashboard;
