import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link to="/">
				Procyon
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(3),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '90%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		padding: '20px',
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ContactUs() {
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<EmailIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						CONTACT US
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="fname"
							label="First Name"
							name="fname"
							autoComplete="fname"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="lname"
							label="Last Name"
							name="lname"
							autoComplete="lname"
						/>
						<TextField

							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"

						/>
						<TextareaAutosize
							variant="outlined"
							margin="normal"
							fullwidth
							aria-label="minimum height" rowsMin={10} placeholder="Leave a Message" />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="lightgray"
							className={classes.submit}
						>
							SEND MESSAGE
						</Button>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}


