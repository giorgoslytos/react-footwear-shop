import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import CheckBoxList from './CheckboxesTags';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import CheckboxesTags from '../components/CheckboxesTags';
import SimpleSelect from '../components/SimpleSelect';
import SimpleSelectSort from '../components/SimpleSelectSort';

const NavFilters = ({
	handleFilterFunction,
	handleSortFunction,
	shoes,
	handleFilterBrand,
	onCheckBoxesChange,
}) => {
	return (
		<div className="container my-4">
			<div className="row">
				<div className="col">
					<SimpleSelect handleFilterFunction={handleFilterFunction} />
				</div>
				<div className="col">
					<SimpleSelectSort handleSortFunction={handleSortFunction} />
				</div>
				<div className="col">
					<CheckboxesTags
						placeholderLabel="brand"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col">
					<CheckboxesTags placeholderLabel="style" shoes={shoes} />
				</div>
				<div className="col">
					<CheckboxesTags placeholderLabel="brogues" shoes={shoes} />
				</div>
			</div>
			{/* <FormControl className={classes.formControl}>
				<Select
					value={type}
					displayEmpty
					className={classes.selectEmpty}
					onChange={(event) => setType(event.target.value)}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem
						value={0}
						onClick={() =>
							props.handleFilterFunction('type', ['shoes', 'boots'])
						}
					>
						All
					</MenuItem>
					<MenuItem
						value={1}
						onClick={() => props.handleFilterFunction('type', ['shoes'])}
					>
						Shoes
					</MenuItem>
					<MenuItem
						value={2}
						onClick={() => props.handleFilterFunction('type', ['boots'])}
					>
						Boots
					</MenuItem>
				</Select>
			</FormControl> */}
		</div>
	);
};

export default NavFilters;
