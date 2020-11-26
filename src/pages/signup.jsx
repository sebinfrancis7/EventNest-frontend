import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Copyright from './../components/Copyright';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [details, setDetails] = useState({ username: '',password: '', dispaly_name: '', email: ''});
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://eventnest-server.herokuapp.com/customer', details, {withCredentials: true })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;
		const newDetails = { ...details, [inputname]: inputvalue};
		setDetails(newDetails);
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								autoFocus
								fullWidth
								id="username"
								label="username"
								name="username"
								onChange={handleChange}
								required
								value={details.username}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} >
							<TextField
								fullWidth
								id="display_name"
								label="display name"
								name="display_name"
								onChange={handleChange}
								value={details.display_name}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="email"
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								onChange={handleChange}
								value={details.email}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete="current-password"
								fullWidth
								id="password"
								label="Password"
								name="password"
								onChange={handleChange}
								required
								type="password"
								value={details.password}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="primary" value="allowExtraEmails" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						className={classes.submit}
						color="primary"
						fullWidth
						type="submit"
						variant="contained"
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to='/signin' variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}