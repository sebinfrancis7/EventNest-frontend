import React, { useState } from 'react';
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
import Copyright from './../components/Copyright';

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
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignInSide() {
	const classes = useStyles();
	
	const [details, setDetails] = useState({ username: '',password: ''});
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/customer/login', details, {withCredentials: true })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const handleFacebook = (e) => {
		e.preventDefault();
		fetch('http://localhost:4000/auth/facebook',{mode: 'no-cors'})
		.then(res => console.log(res), err => console.log(err));
		// axios
		// 	.get('http://localhost:4000/auth/facebook')
		// 	.then(res => {
		// 		console.log(res);
		// 		console.log(res.data);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	};

	function handleChange(event) {
		const inputname = event.target.name;
		const inputvalue = event.target.value;
		const newDetails = { ...details, [inputname]: inputvalue};
		setDetails(newDetails);
	}

	return (
		<StylesProvider injectFirst>
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
            Sign in
						</Typography>
						<form className={classes.form} noValidate onSubmit={handleSubmit}>
						<TextField
								name="username"
								variant="outlined"
								required
								fullWidth
								id="username"
								label="username"
								value={details.username}
								onChange={handleChange}
								autoFocus
							/>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={details.password}
								onChange={handleChange}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
              Sign In
							</Button>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={handleFacebook}
							>
              Facebook
							</Button>
							<Grid container>
								<Grid item xs={12} sm={6}>
									<Link href="#" variant="body2">
                  Forgot password?
									</Link>
								</Grid>
								<Grid item xs={12} sm={6}>
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