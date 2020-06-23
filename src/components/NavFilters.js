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
				<div className="col-6 col-md-4 col-lg-3">
					<SimpleSelect handleFilterFunction={handleFilterFunction} />
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<SimpleSelectSort handleSortFunction={handleSortFunction} />
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="brand"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="style"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="brogues"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="color"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="sole"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="lacingSystem"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="construction"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="leatherType"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<CheckboxesTags
						placeholderLabel="sizes"
						shoes={shoes}
						handleFilterBrand={handleFilterBrand}
						onCheckBoxesChange={onCheckBoxesChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavFilters;
