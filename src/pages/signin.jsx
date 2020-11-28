import React, { useState, useContext } from 'react';
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
import { Link as Lnk, SvgIcon } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Copyright from './../components/Copyright';
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';
import { useUserContext, UserContext } from '../userContext';
import { Details } from '@material-ui/icons';
import '../sass/signin.scss';
import GoogleIcon from './../components/GoogleIcon';

const useStyles = makeStyles((theme) => ({
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function SignInSide() {

	const [user, setUser] = useContext(UserContext);
	const classes = useStyles();
	const [details, setDetails] = useState({ username: '', password: '' });
	let history = useHistory();

	const handleSubmit = (e) => {
		async function submitData() {
			let httpHeaders = { 'Content-Type': 'application/json' };
			let url = 'https://eventnest-server.herokuapp.com/customer/login';
			//let url = 'http://localhost:4000/customer/login';
			let myHeaders = new Headers(httpHeaders);
			let response = await fetch(url, {
				method: 'POST',
				headers: myHeaders,
				credentials: 'include',
				body: JSON.stringify(details),
			});
			if (response.ok) {
				let json = await response.json();
				setUser({ data: json, type: 'customer', loggedIn: true });
				alert('Sigin successful')
				history.push('/')
			}
		}
		e.preventDefault();
		submitData();

	};


	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;
		const newDetails = { ...details, [inputname]: inputvalue };
		setDetails(newDetails);
	}

	return (
		<StylesProvider injectFirst>
			<Grid className="signin-root" component="main" container>
				<CssBaseline />
				<Grid className="signin-image" item md={8} sm={3} xs={false} />
				<Grid component={Paper} elevation={6} item md={4} sm={9} square xs={12}>
					<div className="signin-paper">

						<Avatar className="avatar">
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form className="form" noValidate onSubmit={handleSubmit}>
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
										className="submit"
										color="primary"
										fullWidth
										type="submit"
										variant="outlined"
									>
										Sign In
									</Button>
								</Grid>
								<Grid container item xs={12}>
									<Grid item xs={12}>
										<Lnk className="google-link" href="https://eventnest-server.herokuapp.com/auth/google">
											<Button
												className="google-btn"
												fullWidth
												startIcon={<GoogleIcon />}
												type="submit"
												variant="contained"
											>
											Sign in with Google
											</Button>
										</Lnk>
									</Grid>	
									<Grid item xs={12}>
										<Lnk className="twitter-link" href="https://eventnest-server.herokuapp.com/auth/twitter">
											<Button
												className="twitter-btn"
												fullWidth
												startIcon={<TwitterIcon />}
												type="submit"
												variant="contained"
											>
											Sign in with Twitter
											</Button>
										</Lnk>
									</Grid>	
									<Grid item xs={12}>
										<Lnk className="facebook-link" href="https://eventnest-server.herokuapp.com/auth/facebook">
											<Button
												className="facebook-btn"
												fullWidth
												startIcon={<FacebookIcon />}
												type="submit"
												variant="contained"
											>
											Sign in with Facebook
											</Button>
										</Lnk>
									</Grid>
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
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item sm={6} xs={12}>
									<Link to='/signup' variant='body2'>
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