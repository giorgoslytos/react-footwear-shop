import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		width: '100%',
	},
}));

const SimpleSelect = ({ handleFilterFunction }) => {
	const classes = useStyles();
	const [option, setOption] = React.useState(0);

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	return (
		<React.Fragment>
			<FormControl className={classes.formControl}>
				<Select
					value={option}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem
						value={0}
						onClick={() => {
							handleFilterFunction('type', ['shoes', 'boots']);
						}}
					>
						All
					</MenuItem>
					<MenuItem
						value={1}
						onClick={() => {
							handleFilterFunction('type', ['shoes']);
						}}
					>
						Shoes
					</MenuItem>
					<MenuItem
						value={2}
						onClick={() => {
							handleFilterFunction('type', ['boots']);
						}}
					>
						Boots
					</MenuItem>
				</Select>
				<FormHelperText>Select Footwear</FormHelperText>
			</FormControl>
		</React.Fragment>
	);
};
export default SimpleSelect;
