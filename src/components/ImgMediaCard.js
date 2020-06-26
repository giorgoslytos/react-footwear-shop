import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import CartContext from '../contexts/CartContext';

const useStyles = makeStyles({
	root: {
		margin: '0 1rem',
		boxShadow: 'none',
	},
	CartItem: {
		display: 'flex',
		justifyContent: 'start',
	},
	CartItemMedia: {
		width: 200,
		height: 150,
	},
	shopItem: {
		width: 300,
		height: 350,
	},
	deleteIcon: {
		position: 'absolute',
		top: '16px',
		fontSize: '16px',
		right: '16px',
		zIndex: 2,
	},
});

export default function ImgMediaCard(props) {
	const classes = useStyles();

	return (
		<Link to={`product/${props.shoe.id}`}>
			<Card className={classes.root}>
				<CardActionArea className={props.cartItem ? classes.CartItem : ''}>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						image={require('../../public/data/images/' + props.shoe.source)}
						title="Contemplative Reptile"
						className={
							props.cartItem ? classes.CartItemMedia : classes.shopItem
						}
					/>
					<div className={props.cartItem ? 'ml-4' : ''}>
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{`${props.shoe.brand} ${props.shoe.model}`}
							</Typography>
							{props.cartItem ? (
								<h6 className="mt-3 color-555">Size: {props.shoe.size}</h6>
							) : (
								''
							)}
						</CardContent>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							className="text-left ml-3 mb-3"
						>
							<b>€ {props.shoe.price}</b>
						</Typography>
						{props.cartItem ? (
							<div className={classes.deleteIcon}>
								<Link onClick={(event) => event.preventDefault()}>
									<CartContext.Consumer>
										{({ removeProduct }) => {
											return (
												<IconButton
													aria-label="delete"
													className={classes.margin}
													onClick={() => {
														removeProduct(props.shoe, props.shoe.cartItemId);
													}}
												>
													<CloseIcon />
												</IconButton>
											);
										}}
									</CartContext.Consumer>
								</Link>
							</div>
						) : (
							''
						)}
					</div>
				</CardActionArea>
			</Card>
		</Link>
	);
}
