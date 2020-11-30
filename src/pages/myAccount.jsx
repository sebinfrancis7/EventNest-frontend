import React, { useState, useEffect, useContext, useRef } from 'react';
import { useUserContext, UserContext } from '../userContext';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function CustomerAccount(props) {
	const [edit, setEdit] = useState(false);

	var date = props.info.data.createdAt;
	var result = date.split('T')[0];

	function handleEdit(e) {
		e.preventDefault();
		edit ? setEdit(false) : setEdit(true);
	}

	const [details, setDetails] = useState({ username: props.info.data.username,password:'' ,display_name: props.info.data.display_name, email: props.info.data.email });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(details);
		// axios
		// 	.put('https://eventnest-server.herokuapp.com/customer', details, {withCredentials: true })
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
		const newDetails = { ...details, [inputname]: inputvalue };
		setDetails(newDetails);
	}

	return (
		edit ?
			<div>
				<h2>edit</h2>
				<form noValidate onSubmit={handleSubmit}>
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
						{/* <Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="primary" value="allowExtraEmails" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid> */}
					</Grid>
					<Button
						className="submit"
						color="primary"
						fullWidth
						type="submit"
						variant="outlined"
					>
                        Confirm changes
					</Button>
				</form>
				<button onClick={handleEdit}>cancel</button>
			</div>
			:
			<div>
				<h2>hello cust</h2>
				<h2>name - {props.info.data.display_name}</h2>
				<h2>email - {props.info.data.email}</h2>
				<h2>username - {props.info.data.username}</h2>
				<h2>account type - {props.info.type}</h2>
				<h2>Member from  - {result}</h2>
				<button onClick={handleEdit}>Edit</button>
			</div>
	);
}

function OrganizerAccount(props) {
	return (
		<div>
			<h2>hello org</h2>
		</div>
	);
}

function myAccount() {
	const [user, setUser] = useContext(UserContext);
	console.log(user);
	if (user.type == 'customer')
		return <CustomerAccount info={user} />;
	else if (user.type == 'organizer')
		return <OrganizerAccount info={user} />;
	else
		return <h2>signin</h2>;
}

export default myAccount;
