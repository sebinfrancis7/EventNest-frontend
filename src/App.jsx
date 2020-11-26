import React, { useEffect, useContext } from 'react';
import Homepage from './pages/homepage';
import SignInSide from './pages/signin';
import SignUp from './pages/signup';
import OrgSignUp from './pages/orgSignup.jsx';
import OrgSignInSide from './pages/orgSignin.jsx';
import Error from './pages/404';
import Events from './pages/eventsPage.jsx';
import Event from './pages/eventinfo.jsx';
import CreateEvent from './pages/createEvent.jsx';
import Dashboard from './pages/dashboard.jsx';
import AboutUs from './pages/about.jsx';
import ContactUs from './pages/contact.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { UserContext } from './userContext';
import Navbar from './components/Navbar';
import Invoices from './pages/invoices';
import Invoice from './components/Invoice';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6C63FF',
			// main: '#FFB27E',
		},
		type: 'light',
	},
	typography: {
		fontFamily: '\'Josefin Sans\', sans-serif',
	}
});

function App() {
	const [user, setUser] = useContext(UserContext);
	useEffect(() => {
		async function fetchData() {
			let url = 'https://eventnest-server.herokuapp.com/users';
			//let url = 'http://localhost:4000/users'

			let response = await fetch(url,
				{
					method: 'get',
					headers: {
						'Content-type': 'application/json'
					},
					credentials: 'include'
				});

			if (response.ok) {
				let json = await response.json();
				console.log(json)
				if (user?.data?._id !== json.user._id) {
					setUser({ data: json.user, type: json.type, loggedIn: true });
				}
				console.log(user);
			}
			else {
				console.log(response.status);
			}
		}
		fetchData();

	}, [user]);
	return (

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
					<Route exact path='/dashboard'>
						{user.loggedIn ? <Dashboard /> :
							<div>
								<div>
									<Link to='/signin'>
										<h2>yo need to sign in first</h2>
									</Link>

								</div>
							</div>}

					</Route>
					<Route exact path='/dashboard/invoices'>
						<Invoices />
					</Route>
					<Route component={Invoice} path='/dashboard/invoices/:invoice_id' />
					<Route exact path='/aboutus'>
						<AboutUs />
					</Route>
					{/* <Route exact path='/dashboard'>
						<Dashboard />
					</Route> */}
					<Route exact path='/contactus'>
						<ContactUs />
					</Route>
					<Route exact path='/orgsignin'>
						<OrgSignInSide />
					</Route>
					<Route exact path='/orgsignup'>
						<OrgSignUp/>
					</Route>
					<Route component={Event} path='/events/:event_id' />
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
