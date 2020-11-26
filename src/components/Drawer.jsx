import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function ClippedDrawer({children}) {
	const classes = useStyles();



	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar className={classes.appBar} position="fixed">
				{/* <Toolbar>
					<Typography noWrap variant="h6">
            Clipped drawer
					</Typography>
				</Toolbar> */}
				<Navbar />
			</AppBar>
			<Drawer
				className={classes.drawer}
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
			>
				<Toolbar />
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<Link to='/wishlist'>
							<ListItem button>
								<ListItemIcon><FavoriteOutlinedIcon /></ListItemIcon>
								<ListItemText primary="Wishlist" />
							</ListItem>
						</Link>
						<Link to='/invoices'>
							<ListItem button>
								<ListItemIcon><ReceiptOutlinedIcon /></ListItemIcon>
								<ListItemText primary="Tickets" />
							</ListItem>
						</Link>
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				{children}
			</main>
		</div>
	);
}
