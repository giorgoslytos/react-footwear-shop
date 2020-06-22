import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { AiOutlineCheck } from 'react-icons/ai';

const styles = (theme) => ({
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
});

class ProductPage extends React.Component {
	constructor() {
		super();
		this.state = {
			shoe: {},
		};

		this.lookAfter = new Map([
			['full grain', 'Wipe clean only'],
			['corrected or embossed grain', 'Wipe clean only'],
			['genuine', 'Wipe clean only'],
			['suede', 'Protect with a suede cleaner'],
			['', 'Remove light marks with a clean damp sponge'],
		]);
	}

	componentDidMount() {
		fetch('../../data/data.json')
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					shoe: result.filter(
						(item) => item.id === this.props.match.params.productId
					)[0],
				});
			});
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="container mt-5">
				<Card className={classes.root}>
					<CardMedia
						component="img"
						className={classes.flexItem}
						alt="Contemplative Reptile"
						image={
							this.state.shoe.source
								? require('../../public/data/images/' + this.state.shoe.source)
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
									>{`${this.state.shoe.brand} ${this.state.shoe.model}`}</h3>
								</div>
							</CardContent>
							<CardContent>
								<div className="text-left mb-2">
									<h2 className={classes.color555}>
										€ {this.state.shoe.price}
									</h2>
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
									{'material: ' + this.state.shoe.material}
								</h6>
								{this.state.shoe.material === 'leather' ? (
									<h6>
										<AiOutlineCheck className="mr-3" />
										{'leather material: ' + this.state.shoe.leatherType}
									</h6>
								) : (
									''
								)}
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'style: ' +
										(this.state.shoe.style ? this.state.shoe.style : 'other')}
								</h6>
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'brogues: ' +
										(this.state.shoe.brogues !== ''
											? this.state.shoe.brogues
											: 'none')}
								</h6>
							</div>
							<div className="col">
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'lacing system: ' +
										(this.state.shoe.lacingSystem !== ''
											? this.state.shoe.lacingSystem
											: 'no laces')}
								</h6>
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'color: ' +
										(this.state.shoe.color !== ''
											? this.state.shoe.color
											: 'other')}
								</h6>
								<h6>
									<AiOutlineCheck className="mr-3" />
									{'color: ' +
										(this.state.shoe.sole !== ''
											? this.state.shoe.sole
											: 'other')}
								</h6>
							</div>
						</div>
					</div>
					<div className="col-5">
						<h5 className={classes.color757575 + ' mb-4'}>DESCRIPTION</h5>
						<h6 className={classes.color555 + ' mb-4'}>
							<AiOutlineCheck className="mr-3" />
							{this.state.shoe.description}
						</h6>
						<h5 className={classes.color757575 + ' mb-4'}>LOOK AFTER ME</h5>
						<h6 className={classes.color555 + ' mb-4'}>
							<AiOutlineCheck className="mr-3" />
							{this.lookAfter.get(this.state.shoe.leatherType)}
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(ProductPage);
