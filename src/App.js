import React from 'react';
import './App.css';
import SignInSide from './pages/signin';
import SignUp from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return <Router>
		<Switch>
			<Route path='/' exact>
				<div className="App">
					<header className="App-header">
						<h1>Welcome</h1>
					</header>
				</div>
			</Route>
			<Route path='/signin' exact>
				<SignInSide />
			</Route>
			<Route path='/signup' exact>
				<SignUp />
			</Route>
			<Route path="*">
				<div className="App">
					<header className="App-header">
						<h1>Bruh</h1>
					</header>
				</div>
			</Route>
		</Switch>
	</Router>;
}

export default App;
