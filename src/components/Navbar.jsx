import React from 'react';
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
// import MoreIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import { Button, StylesProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../sass/navbar.scss';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		// width: '100%',
		// display: 'none',
		// [theme.breakpoints.up('sm')]: {
		// 	display: 'block',
		// },
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
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
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

export default function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
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
						<Typography className={classNames(classes.title, 'title')} noWrap variant="h5">
							<Link className="logo" to="/">EventNest</Link>
						</Typography>
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
								placeholder="Search…"
							/>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							{/* <Button variant="contained" className="nav-button" noWrap>
							Sign Up
						</Button>
						<Typography variant="h6">
							or
						</Typography>
						<Button variant="contained" className="nav-button">
							Sign In
						</Button> */}
							<IconButton aria-label="show 17 new notifications" color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								aria-controls={menuId}
								aria-haspopup="true"
								aria-label="account of current user"
								color="inherit"
								edge="end"
								onClick={handleProfileMenuOpen}
							>
								<AccountCircle />
							</IconButton>
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
					<Toolbar className="no-min-height">
						<Button className="nav-button" variant="contained">
							Music
						</Button>
						<Button className="nav-button" variant="contained">
							Comedy
						</Button>
						<Button className="nav-button" variant="contained">
							Arts
						</Button>
						<Button className="nav-button" variant="contained">
							Fitness
						</Button>
					</Toolbar>
				</AppBar>
				{renderMobileMenu}
				{renderMenu}
			</div>
		</StylesProvider>
	);
}
