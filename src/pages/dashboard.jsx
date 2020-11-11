import React, { useState, useContext } from 'react';
import { useUserContext, UserContext } from '../userContext';

function dashboard() {
    let [user, setUser] = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h2>{user.data._id}</h2>
            <h2>{user.data.username}</h2>
            <h2>{user.data.display_name}</h2>
            <h2>wishlist</h2>
            <h2>{user.data.wishlist[0]}</h2>
            <h2>{user.data.wishlist[0]}</h2>
            <h2>{user.data.wishlist[0]}</h2>
        </div>
    );
}

export default dashboard;
