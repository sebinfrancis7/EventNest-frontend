import React, { useState, useEffect, useContext, useRef } from 'react';
import { useUserContext, UserContext } from '../userContext';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Drawer from '../components/Drawer';
import EditIcon from '@material-ui/icons/Edit';
import { Avatar, Divider, IconButton } from '@material-ui/core';
import '../sass/drawer.scss';

function CustomerAccount(props) {
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useContext(UserContext);

	var date = props.info.data.createdAt;
	var result = date.split('T')[0];

	function handleEdit(e) {
		e.preventDefault();
		edit ? setEdit(false) : setEdit(true);
	}

	const [details, setDetails] = useState({ username: props.info.data.username, password: '', display_name: props.info.data.display_name, email: props.info.data.email });
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put('https://eventnest-server.herokuapp.com/customer/' + props.info.data._id, details, { withCredentials: true })
			.then(res => {
				setUser({...user, data: res.data});
				edit ? setEdit(false) : setEdit(true);
			})
			.catch(err => {
				alert(err);
			});
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
				<div>
					<div>
						<Typography className="dashboard-title" variant="h3">
					Account Information
						</Typography>
						<Typography variant="subtitle2">
						EventNest Member Since: {result}
						</Typography>
					</div>
					<Divider />
					<div className="avatar-container">
						<Avatar alt="avatar" className="profile-avatar" src={props.info.data.imageUrl} variant="circle" />
						<TextField
							className="avatar-display-name"
							id="display_name"
							name="display_name"
							onChange={handleChange}
							value={details.display_name}
							variant="outlined"
						/>
					</div>
					<div className='info-container'>
						<Typography className="info" variant="h4">
									Email
						</Typography>					
						<TextField
							autoComplete="email"
							id="email"
							name="email"
							onChange={handleChange}
							value={details.email}
							variant="outlined"
						/>
						<Typography className="info" variant="h4">
						Username*
						</Typography>
						<TextField
							autoFocus
							id="username"
							name="username"
							onChange={handleChange}
							required
							value={details.username}
							variant="outlined"
						/>
						<Typography className="info" variant="h4">
						Password*
						</Typography>
						<TextField
							autoComplete="current-password"
							id="password"
							name="password"
							onChange={handleChange}
							required
							type="password"
							value={details.password}
							variant="outlined"
						/>
					</div>
				</div>
				<form noValidate onSubmit={handleSubmit}>
					<Button
						className="edit-submit submit"
						color="primary"
						type="submit"
						variant="outlined"
					>
						Confirm changes
					</Button>
					<Button
						className="edit-submit submit"
						color="primary"
						onClick={handleEdit}
						variant="outlined"
					>
						Cancel
					</Button>
				</form>
			</div>
			:
			<div>
				<div>
					<Typography className="dashboard-title" variant="h3">
					Account Information
					</Typography>
					<Typography variant="subtitle2">
						EventNest Member Since: {result}
					</Typography>
				</div>
				<Divider />
				<div className="avatar-container">
					<Avatar alt="avatar" className="profile-avatar" src={props.info.data.imageUrl} variant="circle" />
					<Typography className="avatar-display-name" variant="h4">
						{props.info.data.display_name || props.info.data.username} 				
						<IconButton
							className="edit-btn"
							onClick={handleEdit}
						>
							<EditIcon />
						</IconButton>
					</Typography>
					<Typography className="avatar-customer" variant="subtitle1">
						{props.info.type}
					</Typography>
				</div>
				<div className='info-container'>
					<Typography className="info" variant="h4">
									Email
					</Typography>					
					<Typography className="" variant="h6">
						{props.info.data.email || '-'}
					</Typography>
					<Typography className="info" variant="h4">
						Username
					</Typography>
					<Typography className="" variant="h6">
						{props.info.data.username}
					</Typography>
				</div>
			</div>
	);
}

function OrganizerAccount(props) {

	const [edit, setEdit] = useState(false);
	function handleEdit(e) {
		e.preventDefault();
		edit ? setEdit(false) : setEdit(true);
	}

	const [details, setDetails] = useState({ username: props.info.data.username, password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(details);
		axios
			.put('https://eventnest-server.herokuapp.com/organizer/' + props.info.data._id, details, { withCredentials: true })
			.then(res => {
				setUser({...user, data: res.data})	
			})
			.catch(err => {
				alert(err)
			});
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
			// <h2>name - {props.info.data.display_name}</h2>
			// <h2>email - {props.info.data.email}</h2>
				<h2>username - {props.info.data.username}</h2>
				<h2>account type - {props.info.type}</h2>
				<button onClick={handleEdit}>Edit</button>
			</div>
	);
}

function MyAccount() {
	const [user, setUser] = useContext(UserContext);
	console.log(user);
	if (user.type == 'customer')
		return <CustomerAccount info={user} />;
	else if (user.type == 'organizer')
		return <OrganizerAccount info={user} />;
	else
		return <h2>Loading ...</h2>;
}

function Account() {
	return (
		<Drawer>
			<MyAccount />
		</Drawer>
	);
}

export default Account;
