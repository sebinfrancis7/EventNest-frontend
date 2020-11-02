import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ErrorImg from '../assets/404.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
	size: {
		width: '80vw',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	center: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	},
	horizontal: {
		display: 'block',
		margin: '10px auto',
	}
});

export default function Error() {
	const classes = useStyles();
	return (
		<div className={classes.center}>
			<Link to="/">
				<Button color="primary" variant="contained" className={classes.horizontal}>
                        Go back Home
				</Button>
			</Link>
			<img src={ErrorImg} className={classes.size}></img>
		</div>
	);
}