/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, CardActionArea, makeStyles, StylesProvider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import '../sass/card.scss';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 200,
		maxWidth: 350,
	},
	media: {
		// height: 150,
		// paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

function MediaCard(props) {
	const classes = useStyles();
	const [favorite, setfavorite] = useState(true);
	const [coloris, setColoris] = useState(null);

	const handleFavorite = () => {
		favorite ? setfavorite(false) : setfavorite(true);
		favorite ? setColoris('#F50057') : setColoris(null);
	};

	return (
		<StylesProvider injectFirst>
			<Card className={classNames(classes.root, 'card')}>
				<CardActionArea>
					<Link to={`/events/${props.event_id}`} className="card-link">
						<CardMedia
							className={classNames(classes.media, 'card-img')}
							image={props.img_url}
							title={props.title}
						>
							<div className="card-header">
								<Button color="secondary" variant="contained" className="card-title" noWrap>
									{props.title}
								</Button>

							</div>
						</CardMedia>
					</Link>

				</CardActionArea>
				<CardContent className="card-body">
					<Typography variant="body2" color="textPrimary" component="p" className="card-body-text">
						Location : {props.city}
					</Typography>
					<IconButton onClick={handleFavorite} aria-label="add to favorites" className="title-fav">
						{/* {favorite ? coloris = "red":coloris = null} */}
						<FavoriteIcon style={{ fill: coloris }} />
					</IconButton>
				</CardContent>
			</Card>
		</StylesProvider>
	);
}

export default MediaCard;
