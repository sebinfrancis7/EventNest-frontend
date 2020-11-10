import React, { useState, useContext } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Link as Lnk } from '@material-ui/core';
import Copyright from './../components/Copyright';
import {  BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useUserContext, UserContext } from '../userContext';
import { Details } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://images.unsplash.com/photo-1603400522145-556093ef3a45?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)',
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
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '90%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: { 
		padding: '10px',
		// margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignInSide() {

	const [user, setUser] = useContext(UserContext);
	const classes = useStyles();
	const [details, setDetails] = useState({ username: '',password: ''});

	const handleSubmit = (e) => {
		async function submitData() {	
			let httpHeaders = { 'Content-Type': 'application/json' };
			let url = 'https://eventnest-server.herokuapp.com/customer/login';
			let myHeaders = new Headers(httpHeaders);
			let response = await fetch(url, {
				method: 'POST', 
				headers: myHeaders,
				credentials: "include",
				body: JSON.stringify(details), 
			});
			if (response.ok) {
				let json = await response.json();
				setUser({ data: json, type: 'customer', loggedIn: true})
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

	if(user.loggedIn) return(<Redirect to="/" />)
	 
	return (
		<StylesProvider injectFirst>
			<Grid className={classes.root} component="main" container>
				<CssBaseline />
				<Grid className={classes.image} item md={7} sm={4} xs={false} />
				<Grid component={Paper} elevation={6} item md={5} sm={8} square xs={12}>
					<div className={classes.paper}>
					
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form className={classes.form} noValidate onSubmit={handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12} >
									<TextField
										autoFocus
										fullWidth
										id="username"
										label="Username"
										name="username"
										onChange={handleChange}
										required
										value={details.username}
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12} >
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
								<Grid item xs={12} >
									<FormControlLabel
										control={<Checkbox color="primary" value="remember" />}
										label="Remember me"
									/>
									<Button
										className={classes.submit}
										color="primary"
										fullWidth
										type="submit"
										variant="outlined"
									>
										Sign In
									</Button>
								</Grid>
								<Grid item xs={12}>
									<Lnk href="https://eventnest-server.herokuapp.com/auth/facebook">
										<Button
											className={classes.submit}
											color="primary"
											fullWidth
											type="submit"
											variant="outlined"
										>
										Facebook
										</Button>
									</Lnk>
								</Grid>
							</Grid>
							{/* <a href="https://eventnest-server.herokuapp.com/auth/facebook">Facebook</a> */}
							{/* <Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={handleFacebook}
							>
              Facebook
							</Button> */}
							<Grid container>
								<Grid item sm={6} xs={12}>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item sm={6} xs={12}>
									<Link to='/signup' variant="body2">
										{'Don\'t have an account? Sign Up'}
									</Link>
								</Grid>
							</Grid>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
			
		</StylesProvider>
	);
}