import React from 'react';
import Homepage from './pages/homepage';
import SignInSide from './pages/signin';
import SignUp from './pages/signup';
import Error from './pages/404';
import Events from './pages/eventsPage.jsx';
import Event from './pages/eventinfo.jsx';
import CreateEvent from './pages/createEvent.jsx';
import AboutUs from './pages/about.jsx';
import ContactUs from './pages/contact.jsx';
import FooterPage from './pages/footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
<<<<<<< HEAD
import { UserProvider } from './userContext';
=======
import Navbar from './components/Navbar';
>>>>>>> c3e668d... razorpay

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6C63FF',
			// main: '#FFB27E',
		},
		type: 'light',
	},
	typography: {
		fontFamily: '\'Open Sans\', sans-serif',
	}
});

function App() {
	return (
		<UserProvider>
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/signin'>
						<SignInSide />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<Route exact path='/events'>
						<Events />
					</Route>
					<Route exact path='/create-event'>
						<CreateEvent />
					</Route>
					<Route exact path='/aboutus'>
						<AboutUs />
					</Route>
					<Route exact path='/contactus'>
						<ContactUs />
					</Route>
					<Route component={Event} path='/events/:event_id' />
					<Route path="*">
						<Error />
					</Route>
				</Switch>
				<FooterPage />
			</Router>
		</ThemeProvider>
		</UserProvider>
	);
}

export default App;
