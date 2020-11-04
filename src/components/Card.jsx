/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, CardActionArea, makeStyles, StylesProvider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const [favorite, setfavorite] = useState(true);
	const [coloris, setColoris] = useState(null);

	const handleFavorite = () => {
		favorite ? setfavorite(false) : setfavorite(true);
		favorite ? setColoris('#F50057') : setColoris(null);
	};

	// const handleClick = () => {

	// };

	return (
		<StylesProvider injectFirst>
			<Card className={classNames(classes.root, 'card')}>
				{/* <CardHeader
					title={props.title}
					subheader={props.date}
				/> */}
				<CardActionArea>
					<Link to={`/events/${props.event_id}`}>
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
				{/* <CardActions disableSpacing>
				<IconButton onClick={handleFavorite} aria-label="add to favorites">
					{favorite ? coloris = "red":coloris = null}
					<FavoriteIcon style={{ fill: coloris }} />
				</IconButton>
				<Typography>
					SAVE
				</Typography>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>COST: {props.price}</Typography>
					<Typography paragraph>EVENT: {props.description}</Typography>
					<Typography paragraph>
						{props.city}
					</Typography>
				</CardContent>
			</Collapse> */}
			</Card>
		</StylesProvider>
	);
}

export default MediaCard;
