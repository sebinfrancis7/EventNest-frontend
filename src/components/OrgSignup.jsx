import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../userContext';

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

export default function OrgSignup() {
	const classes = useStyles();
	const [details, setDetails] = useState({ username: '',password: '', email: ''});
	const [user, setUser] = useContext(UserContext);
	const history = useHistory();
    
	const handleSubmit = (e) => {
		async function submitData() {
			let httpHeaders = { 'Content-Type': 'application/json' };
			let url = 'https://eventnest-server.herokuapp.com/organizer';
			let myHeaders = new Headers(httpHeaders);
			let response = await fetch(url, {
				method: 'POST',
				headers: myHeaders,
				credentials: 'include',
				body: JSON.stringify(details),
			});
			let json = await response.json();
			if (response.ok) {
				alert('Signup successfull ');
				setUser({ data: json, type: 'organizer', loggedIn: true });
				history.push('/');
			}
			else {
				alert(json.err.message);
			}
		}
		e.preventDefault();
		submitData();
	};

	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;
		const newDetails = { ...details, [inputname]: inputvalue};
		setDetails(newDetails);
	}
	return (
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
				<Grid item xs={12}>
					<TextField
						autoComplete="email"
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						onChange={handleChange}
						required
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
					<Link to='/orgsignin' variant="body2">
                        Already have an account? Sign in
					</Link>
				</Grid>
			</Grid>
		</form>
			
	);
}