import React, { useState, useEffect, useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import classNames from 'classnames';
import { Button, Paper, StylesProvider } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../sass/navbar.scss';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.1),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.20),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: '30%',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		width: '100%',
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

function displayResult(events, i) {
	return display(events);
}

function display(event, i) {
	return (
		<Link className="card-link" key={i} to={`/events/${event._id}`}>
			<Button
				className="search-button"
				fullWidth
			>
				<Typography className="search-title">
					{event.title}
				</Typography>
				<Typography className="search-details">
					{'    '}{event.category}, {event.city || 'Online'}
				</Typography>
			</Button>
		</Link>
	);
}

function NavLinks() {
	return (
		<Toolbar className="no-min-height">
			<Link className="nav-links" to='/' variant="contained">
				Music
			</Link>
			<Link className="nav-links" to='/' variant="contained">
				Comedy
			</Link>
			<Link className="nav-links" to='/' variant="contained">
				Arts
			</Link>
			<Link className="nav-links" to='/' variant="contained">
				Fitness
			</Link>
		</Toolbar>
	);
}

function Search() {
	const classes = useStyles();
	const [results, setResults] = useState([]);
	const [notfound, setNotfound] = useState(false);

	const handleSearch = async (event) => {
		const input = event.target.value;
		setResults([]);

		if (input) {
			axios
				.get('https://eventnest-server.herokuapp.com/events/search/' + input)
				.then(res => {
					const data = res.data;
					let newDetails = [];
					let events = [];
					for (const type of data) {
						for (const event of type) {
							if (events.includes(event._id) == false) {
								events.push(event._id);
								newDetails.push(event);
							}
						}
					}
					if (newDetails.length != 0) {
						setNotfound(false);
						setResults(newDetails);
					} else {
						setNotfound(true);
					}
				}, err => console.log(err));
			//const newDetails = globalEvents.filter(event => event.title.includes(input));


		} else {
			setNotfound(false);
			setResults([]);
		}
	};

	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearch}
				placeholder="Search…"
			/>
			<Paper className="search-result">
				{
					notfound ? <Button className="search-button" fullWidth>Not Found</Button> : <div>{results.map(displayResult)}</div>
				}
			</Paper>
		</div>
	);
}

export default function Navbar() {
	let [user, setUser] = useContext(UserContext);
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleLogout = (e) => {
		e.preventDefault();
		axios
			.get('https://eventnest-server.herokuapp.com/logout', { withCredentials: true })
			.then(res => {
				console.log(res.data);
				setUser({ loggedIn: false });
				setAnchorEl(null);
				handleMobileMenuClose();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			onClose={handleMenuClose}
			open={isMenuOpen}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<Link className='no-underline' to='/dashboard'>
				<MenuItem>Dashboard</MenuItem>
			</Link>
			<Link className='no-underline' to='/wishlist'>
				<MenuItem>Wishlist</MenuItem>
			</Link>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleLogout}>Logout</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			onClose={handleMobileMenuClose}
			open={isMobileMenuOpen}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					aria-label="account of current user"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	return (
		<StylesProvider injectFirst>
			<div className={classNames(classes.grow, 'navbar')}>
				<AppBar className="no-shadow" color="primary" position="static">
					<Toolbar>
						<div className="title-search-container">
							<Typography className={classNames(classes.title, 'title')} variant="h5">
								<Link className="logo" to="/">EventNest</Link>
							</Typography>
							<Search />
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							{user.loggedIn ?
								<Button
									color="inherit"
									onClick={handleProfileMenuOpen}
									startIcon={<AccountCircle />}
								>
									{user.data.display_name}
								</Button>
								:
								<Link
									className='no-underline'
									to='/signin'
								>
									<Button
										className="login-button"
										variant="outlined"
									>
										Log in
									</Button>
								</Link>
							}
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								aria-label="show more"
								color="inherit"
								onClick={handleMobileMenuOpen}
							>
								<MenuIcon />
							</IconButton>
						</div>
					</Toolbar>
					<NavLinks />
				</AppBar>
				{renderMobileMenu}
				{renderMenu}
			</div>
		</StylesProvider >
	);
}
