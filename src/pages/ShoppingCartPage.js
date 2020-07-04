import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CartContext from '../contexts/CartContext';
import ImgMediaCard from '../components/ImgMediaCard';

const useStyles = makeStyles({
	root: {
		padding: '1rem',
		boxShadow: 'none',
	},
	Button: {
		width: '100%',
	},
	FinalTotal: {
		textDecoration: 'line-through',
	},
});
const ShoppingCartPage = () => {
	const classes = useStyles();

	return (
		<div className="container">
			<h1 className="text-center my-4">Shopping Cart</h1>
			<div className="row">
				<div className="col">
					<CartContext.Consumer>
						{({ cart }) => {
							return cart.map((item, key) => (
								<p key={key}>
									<ImgMediaCard shoe={item} cartItem="true" key={key} />
								</p>
							));
						}}
					</CartContext.Consumer>
				</div>
				<div className="col">
					<div className="text-">
						<CartContext.Consumer>
							{({ totalPrice, handleCheckout }) => {
								return (
									<Card className={classes.root}>
										<CardContent>
											<h4>TOTAL</h4>
											<hr />
											<div className="row mb-3">
												<div className="col">
													<h5 className="m-0">Sub Total:</h5>
												</div>
												<div className="col text-right">
													<div>
														<span
															className={
																totalPrice >= 100
																	? classes.FinalTotal
																	: 'd-none'
															}
														>
															€ {totalPrice}
														</span>
														€{' '}
														{totalPrice >= 100 ? totalPrice * 0.9 : totalPrice}
													</div>
												</div>
											</div>
											{totalPrice >= 100 ? (
												<h6 className="mb-3 text-center text-danger">
													Over € 100! You get a 10% discount!
												</h6>
											) : (
												''
											)}
											<Button
												variant="contained"
												size="medium"
												disabled={totalPrice === 0}
												color="primary"
												className={classes.Button}
												onClick={() => handleCheckout()}
											>
												CHECKOUT
											</Button>
										</CardContent>
									</Card>
								);
							}}
						</CartContext.Consumer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCartPage;
