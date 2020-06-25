import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div>
					<Switch>
						<Route path={['/', '/home']} component={HomePage} exact />
						<Route path="/about" component={AboutPage} exact />
						<Route path="/product/:productId" component={ProductPage} />
						<Route path="/cart" component={ShoppingCartPage} exact />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
