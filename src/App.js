import React from 'react';
import Homepage from './pages/homepage';
import SignInSide from './pages/signin';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './pages/404';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import { dark } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6C63FF',
		},
		type: 'light',
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Homepage />
					</Route>	
					<Route path='/signin' exact>
						<SignInSide />
					</Route>
					<Route path='/signup' exact>
						<SignUp />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
