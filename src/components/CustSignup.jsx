import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Lnk } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import GoogleIcon from './../components/GoogleIcon';

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

export default function CustSignUp() {
	const classes = useStyles();
	const [details, setDetails] = useState({ username: '',password: '', dispaly_name: '', email: ''});
	const handleSubmit = (e) => {
		async function submitData() {
			let httpHeaders = { 'Content-Type': 'application/json' };
			let url = 'https://eventnest-server.herokuapp.com/customer';
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
				setUser({ data: json, type: 'customer', loggedIn: true });
				history.push('/');
            }
            else {
                alert(json.err.message)
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
            <Grid container item spacing={2}>
                <Grid item xs={12} >
                    <TextField
                        autoFocus
                        className='signup-input'
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
                        className='signup-input'
                        fullWidth
                        id="display_name"
                        label="Display Name"
                        name="display_name"
                        onChange={handleChange}
                        value={details.display_name}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="email"
                        className='signup-input'
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
                        className='signup-input'
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
                <Grid className="signup-submit" item xs={12}>
                    <Button
                        className="submit signup-input"
                        color="primary"
                        fullWidth
                        type="submit"
                        variant="outlined"
                    >
                Sign Up
                    </Button>		
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    align='center'
                >
                            Or
                </Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Lnk className="google-link" href="https://eventnest-server.herokuapp.com/auth/google">
                        <Button
                            className="google-btn"
                            fullWidth
                            startIcon={<GoogleIcon />}
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
                            variant="contained"
                        >
                                    Sign in with Facebook
                        </Button>
                    </Lnk>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link to='/signin' variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </form>
			
	);
}