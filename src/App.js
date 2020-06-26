import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './App.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CartContext from './contexts/CartContext';

function App() {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartItemId, setCartItemId] = useState(0);

	useEffect(() => {
		if (totalPrice !== 0) {
			const tmp = cart.map((item) => item.price);
			setTotalPrice(tmp.reduce((a, b) => a + b));
		} else cart[0] ? setTotalPrice(cart[0].price) : setTotalPrice(0);
	}, [cart]);

	const addProduct = (item, size) => {
		let selectedShoe = { ...item };
		selectedShoe.size = parseInt(size);
		selectedShoe.cartItemId = cartItemId;
		let temp = [...cart, selectedShoe];
		setCart(temp);
		setCartItemId(cartItemId + 1);
	};
	const removeProduct = (shoe, itemId) => {
		// let selectedShoe = { ...item };
		// cart.selectedShoe.size = parseInt(size);
		// let temp = [...cart, selectedShoe];
		// setCart(temp);
		console.log(itemId);
		let tmp = [...cart];
		setTotalPrice(totalPrice - shoe.price);
		tmp.filter((shoe) => shoe.cartItemId !== itemId);

		// tmp.splice(itemId, 1);
		setCart(tmp.filter((shoe) => shoe.cartItemId !== itemId));
	};

	const props = {
		cart: cart,
		totalPrice: totalPrice,
		addProduct: addProduct,
		removeProduct: removeProduct,
	};

	return (
		<CartContext.Provider value={{ ...props }}>
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
		</CartContext.Provider>
	);
}

export default App;
