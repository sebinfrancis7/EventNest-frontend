/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 50,
		paddingTop: '56.25%', // 16:9
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
		favorite ? setColoris('red') : setColoris(null);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				title={props.title}
				subheader={props.date}
			/>

			<CardMedia
				className={classes.media}
				image={props.img_url}
				title={props.title}
			/>
			<CardContent>
				<Typography variant="body2" color="textPrimary" component="p">
					DATE &emsp; &emsp;: {props.cardContent}
				</Typography>
				<Typography variant="body2" color="textPrimary" component="p">
					LOCATION : {props.cardContent}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton onClick={handleFavorite} aria-label="add to favorites">
					{/* {favorite ? coloris = "red":coloris = null} */}
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
					<Typography paragraph>EVENT:</Typography>
					<Typography paragraph>
						{props.info}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default MediaCard;
