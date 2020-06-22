import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: 300,
		margin: '0 1rem',
		boxShadow: 'none',
	},
});

export default function ImgMediaCard(props) {
	const classes = useStyles();

	return (
		<Link to={`product/${props.shoe.id}`}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="350"
						image={require('../../public/data/images/' + props.shoe.source)}
						title="Contemplative Reptile"
						className=""
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{`${props.shoe.brand} ${props.shoe.model}`}
						</Typography>
					</CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className="text-left mb-2"
					>
						<b>€ {props.shoe.price}</b>
					</Typography>
				</CardActionArea>
			</Card>
		</Link>
	);
}
