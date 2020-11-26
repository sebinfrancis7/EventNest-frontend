/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import { Button, CardActionArea, makeStyles, StylesProvider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUserContext, UserContext } from '../userContext';
import '../sass/card.scss';

function MediaCard(props) {
	const [favorite, setfavorite] = useState(false);
	const [coloris, setColoris] = useState(props.fav);
	let [user, setUser] = useContext(UserContext);
	
	useEffect(() => {
		if (user.loggedIn && user.type === 'customer') {
			if (user.data.wishlist.indexOf(props.event_id) !== -1) {
				setfavorite(true);
				setColoris('#F50057');
			}
		}
	}, [user]);
	
	const handleFavorite = (e) => {
		
		e.preventDefault();
		if(user.type === 'organizer'){
			alert('Only for customers');
			return;
		}
		
		if (user.loggedIn ) {
			if (favorite) {
				setfavorite(false);
				setColoris('#F50057');
				let url = 'https://eventnest-server.herokuapp.com/customer/' + user.data._id + '/wishlist/' + props.event_id;
				axios
					.post(url, props.event_id)
					.then(res => {
						console.log(res.data);
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				let url = 'https://eventnest-server.herokuapp.com/customer/' + user.data._id + '/wishlist/' + props.event_id;
				setfavorite(true);
				setColoris(null);
				axios
					.delete(url)
					.then(res => {
						console.log(res.data);
					})
					.catch(err => {
						console.log(err);
					});

			}
		} else {
			alert('login');
		}

	};

	return (
		<Card className='card'>
			<CardActionArea>
				<Link className="card-link" to={`/events/${props.event_id}`}>
					<CardMedia
						className='card-img'
						image={props.img_url}
						title={props.title}
					>
						<div className="card-header">
							<Button className="card-title" color="secondary" variant="contained">
								{props.title}
							</Button>

						</div>
					</CardMedia>
				</Link>

			</CardActionArea>
			<CardContent className="card-body">
				<Typography className="card-body-text" color="textPrimary" component="p" variant="body2">
						Location : {props.city}
				</Typography>
				<IconButton aria-label="add to favorites" className="title-fav" onClick={handleFavorite}>
					{/* {favorite ? coloris = "red":coloris = null} */}
					<FavoriteIcon style={{ fill: coloris }} />
				</IconButton>
			</CardContent>
		</Card>
	);
}

export default MediaCard;
