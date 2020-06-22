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

const SimpleSelectSort = ({ shoes, handleSortFunction }) => {
	const classes = useStyles();
	const [option, setOption] = React.useState(0);

	const handleChange = (event) => {
		switch (event.target.value) {
			case 0:
				handleSortFunction('date', 'desc');
				break;
			case 1:
				handleSortFunction('price', 'asc');
				break;
			case 2:
				handleSortFunction('price', 'desc');
		}
		setOption(event.target.value);
	};

	return (
		<React.Fragment>
			<FormControl className={classes.formControl}>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={option}
					onChange={handleChange}
				>
					<MenuItem value={0}>What's new</MenuItem>
					<MenuItem value={1}>Price Low to High</MenuItem>
					<MenuItem value={2}>Price High to Low</MenuItem>
				</Select>
				<FormHelperText>Sort by</FormHelperText>
			</FormControl>
		</React.Fragment>
	);
};
export default SimpleSelectSort;
