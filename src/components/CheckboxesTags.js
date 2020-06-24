/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({
	shoes,
	placeholderLabel,
	handleFilterFunction,
	handleFilterBrand,
	onCheckBoxesChange,
}) {
	const checkBoxOptions =
		placeholderLabel !== 'size'
			? [...new Set(shoes.map((shoe) => shoe[placeholderLabel]))]
					.map((item) =>
						item ? item.charAt(0).toUpperCase() + item.slice(1) : 'None'
					)
					.sort()
			: ['39', '40', '41', '42', '43', '44', '45', '46'];
	const placeholder =
		placeholderLabel.charAt(0).toUpperCase() + placeholderLabel.slice(1);

	function onTagsChange(event, values) {
		onCheckBoxesChange(placeholderLabel, values);
	}

	return (
		<Autocomplete
			multiple
			id="checkboxes-tags-demo"
			size="small"
			className="CheckboxesTags"
			options={checkBoxOptions}
			disableCloseOnSelect
			onChange={onTagsChange}
			renderOption={(option, { selected }) => (
				<React.Fragment>
					<Checkbox
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option}
				</React.Fragment>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					variant="outlined"
					label={placeholder}
					placeholder={'Select ' + placeholder}
				/>
			)}
		/>
	);
}
