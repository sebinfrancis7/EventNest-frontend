import React, { useState, useContext } from 'react';
import { useUserContext, UserContext } from '../userContext';
function createWishlist(event,i){
	return<h2>{event}</h2>;
}

function dashboard() {
	let [user, setUser] = useContext(UserContext);
	console.log(user);
	return (
		<div>
			<h2>{user.data._id}</h2>
			<h2>{user.data.username}</h2>
			<h2>{user.data.display_name}</h2>
			<h2>wishlist</h2>
			<div>
				{user.data.wishlist.map(createWishlist)}
			</div>
            
		</div>
	);
}

export default dashboard;
