import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { AiOutlineCheck } from 'react-icons/ai';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import CartContext from '../contexts/CartContext';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '1rem 0',
		boxShadow: 'none',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fafafa',
	},
	flexItem: {
		flexBasis: '0',
		flexGrow: '1',
	},
	color555: {
		color: '#555',
	},
	color757575: {
		color: '#757575',
	},
}));

export default function ProductPage(props) {
	const [shoe, setShoe] = useState({});
	const [option, setOption] = useState('');
	const classes = useStyles();

	const lookAfter = new Map([
		['full grain', 'Wipe clean only'],
		['corrected or embossed grain', 'Wipe clean only'],
		['genuine', 'Wipe clean only'],
		['suede', 'Protect with a suede cleaner'],
		['', 'Remove light marks with a clean damp sponge'],
	]);

	useEffect(() => {
		fetch('../../data/data.json')
			.then((response) => response.json())
			.then((result) =>
				setShoe(
					result.filter((item) => item.id === props.match.params.productId)[0]
				)
			);
	}, [props.match.params.productId]);

	const handleChange = (event) => {
		const name = event.target.name;
		setOption(event.target.value);

		console.log(shoe.size);
		console.log(event.target.value);
		console.log(shoe);
	};

	const addToCart = () => {
		if (option.length > 0) {
			const temp = { ...shoe };
			temp.size = parseInt(option);
			console.log(temp);
		} else alert('Please select a size!');
	};
	return (
		<div className="container mt-5">
			<Card className={classes.root}>
				<CardMedia
					component="img"
					className={classes.flexItem}
					alt="Contemplative Reptile"
					image={
						shoe.source
							? require('../../public/data/images/' + shoe.source)
							: ''
					}
					title="Contemplative Reptile"
				/>
				<div className={classes.flexItem}>
					<div className="ml-4">
						<CardContent>
							<div>
								<h3
									className={classes.color757575}
								>{`${shoe.brand} ${shoe.model}`}</h3>
							</div>
						</CardContent>
						<CardContent>
							<div className="text-left mb-4">
								<h2 className={classes.color555}>€ {shoe.price}</h2>
							</div>
							<div className="text-left mb-2">
								<h4 className={classes.color555}>Sizes:</h4>
							</div>
							<div className="text-left mb-2">
								<FormControl className={classes.formControl}>
									<NativeSelect
										value={option}
										onChange={handleChange}
										name="option"
										className={classes.selectEmpty}
										inputProps={{ 'aria-label': 'option' }}
									>
										<option value="">Select a Size</option>
										{shoe.size ? (
											shoe.size.map((size) => (
												<option key={size} value={size}>
													{size}
												</option>
											))
										) : (
											<></>
										)}
									</NativeSelect>
								</FormControl>
							</div>
							<div className="text-left mb-2">
								<CartContext.Consumer>
									{({ addProduct }) => {
										return (
											<Button
												variant="contained"
												size="medium"
												disabled={option.length === 0}
												color="primary"
												className={classes.margin}
												onClick={() => addProduct(shoe, option)}
											>
												Add to Cart
											</Button>
										);
									}}
								</CartContext.Consumer>
							</div>
						</CardContent>
					</div>
				</div>
			</Card>
			{/* List */}
			<div className="text-left mb-2 row">
				<div className="col-7">
					<h5 className={classes.color757575 + ' mb-4'}>PRODUCT DETAILS</h5>
					<div className={'row ' + classes.color555}>
						<div className={classes.color555 + ' col'}>
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'material: ' + shoe.material}
							</h6>
							{shoe.material === 'leather' ? (
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'leather material: ' + shoe.leatherType}
								</h6>
							) : (
								''
							)}
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'style: ' + (shoe.style ? shoe.style : 'other')}
							</h6>
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'brogues: ' + (shoe.brogues !== '' ? shoe.brogues : 'none')}
							</h6>
						</div>
						<div className="col">
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'lacing system: ' +
									(shoe.lacingSystem !== '' ? shoe.lacingSystem : 'no laces')}
							</h6>
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'color: ' + (shoe.color !== '' ? shoe.color : 'other')}
							</h6>
							<h6>
								<AiOutlineCheck className="mr-3" />
								{'color: ' + (shoe.sole !== '' ? shoe.sole : 'other')}
							</h6>
						</div>
					</div>
				</div>
				<div className="col-5">
					<h5 className={classes.color757575 + ' mb-4'}>DESCRIPTION</h5>
					<h6 className={classes.color555 + ' mb-4'}>
						<AiOutlineCheck className="mr-3" />
						{shoe.description}
					</h6>
					<h5 className={classes.color757575 + ' mb-4'}>LOOK AFTER ME</h5>
					<h6 className={classes.color555 + ' mb-4'}>
						<AiOutlineCheck className="mr-3" />
						{lookAfter.get(shoe.leatherType)}
					</h6>
				</div>
			</div>
		</div>
	);
}
