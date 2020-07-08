import React, { useState, useEffect } from 'react';
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import json2xml from './utils/json2xml';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartItemId, setCartItemId] = useState(0);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (totalPrice > 0 && cart.length > 0) {
			const tmp = cart.map((item) => item.price);
			setTotalPrice(tmp.reduce((a, b) => a + b));
		} else cart[0] ? setTotalPrice(cart[0].price) : setTotalPrice(0);
	}, [totalPrice, cart]);

	const addProduct = (item, size) => {
		let selectedShoe = { ...item };
		selectedShoe.size = parseInt(size);
		selectedShoe.cartItemId = cartItemId;
		let temp = [...cart, selectedShoe];
		setCart(temp);
		setCartItemId(cartItemId + 1);
		setOpen(true);
	};
	const removeProduct = (shoe, itemId) => {
		console.log(itemId);
		let tmp = [...cart];
		setTotalPrice(totalPrice - shoe.price);
		tmp.filter((shoe) => shoe.cartItemId !== itemId);
		setCart(tmp.filter((shoe) => shoe.cartItemId !== itemId));
	};

	const handleCheckout = () => {
		let order = { products: [], discount: 0 };
		let products = [];
		cart.forEach((item) => {
			products.push({ id: item.id, size: item.size });
		});
		order.products = products;
		order.discount = totalPrice >= 100 ? 0.1 : 0;
		console.log(json2xml(order));
		alert('check your console in developer tools!');
	};
	const props = {
		cart: cart,
		totalPrice: totalPrice,
		addProduct: addProduct,
		removeProduct: removeProduct,
		handleCheckout: handleCheckout,
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	useEffect(() => {
		const savedCart = localStorage.getItem('saved-cart');
		const savedTotalPrice = localStorage.getItem('saved-total-price');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
			setTotalPrice(JSON.parse(savedTotalPrice));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('saved-cart', JSON.stringify(cart));
		localStorage.setItem('saved-total-price', JSON.stringify(totalPrice));
	});

	return (
		<CartContext.Provider value={{ ...props }}>
			<Router>
				<div className="App">
					<NavBar />
						<Switch>
							<Route path={['/', '/home']} component={HomePage} exact />
							<Route path="/about" component={AboutPage} exact />
							<Route path="/product/:productId" component={ProductPage} exact />
							<Route path="/cart" component={ShoppingCartPage} exact />
							<Route component={NotFoundPage} />
						</Switch>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success">
							<Link to="/cart" className="text-white">
								Product added to the cart
							</Link>
						</Alert>
					</Snackbar>
				</div>
			</Router>
		</CartContext.Provider>
	);
}

export default App;
