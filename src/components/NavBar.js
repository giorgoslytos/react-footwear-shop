import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		position: 'absolute',
		left: '0',
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	AiOutlineShopping: {
		fontSize: '24px',
		position: 'absolute',
		right: '3px',
	},
}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

const NavBar = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.grow}>
			<React.Fragment>
				<CssBaseline />
				<HideOnScroll {...props}>
					<AppBar>
						<Toolbar>
							<Typography variant="h6">React Shop</Typography>
							<div className="m-auto">
								<Link as={Link} to="/" className="text-white">
									<Button variant="text" color="inherit">
										Home
									</Button>
								</Link>
								<Link as={Link} to="/about" className="text-white">
									<Button variant="text" color="inherit">
										About
									</Button>
								</Link>
							</div>
							<Button
								variant="text"
								color="inherit"
								className={classes.AiOutlineShopping}
							>
								<AiOutlineShopping />
							</Button>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<Toolbar />
			</React.Fragment>
		</div>
	);
};

export default NavBar;
