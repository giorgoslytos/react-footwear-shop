import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../components/ImgMediaCard';
import NavFilters from '../components/NavFilters';

const HomePage = () => {
	const [shoes, setShoes] = useState([]);
	const [sortBy, setSortBy] = useState('date');
	const [orderDir, setOrderDir] = useState(1);
	const [queryType, setQueryType] = useState(['shoes', 'boots']);
	const [queryBrand, setQueryBrand] = useState([]);
	const [filterEvent, setFilterEvent] = useState(['date-desc']);
	const [checkBoxObj, setCheckBoxObj] = useState(['']);

	useEffect(() => {
		fetch('../../data/data.json')
			.then((response) => response.json())
			.then((result) => {
				const shoesRes = result
					.map((item) => {
						item.date = new Date(item.date);
						return item;
					})
					.sort((a, b) => {
						if (a[sortBy] < b[sortBy]) {
							return 1 * orderDir;
						} else {
							return -1 * orderDir;
						}
					})
					.filter((item) => {
						for (let i = 0; i < queryType.length; i++) {
							if (item['type'] === queryType[i]) {
								return true;
							}
						}
					})
					.filter((item) => {
						if (checkBoxObj.values.length > 0) {
							for (let i = 0; i < checkBoxObj.values.length; i++) {
								if (
									item[checkBoxObj.name].toLowerCase() ===
									checkBoxObj.values[i].toLowerCase()
								) {
									return true;
								}
							}
						} else return true;
					});
				setShoes(shoesRes);
			});
	}, filterEvent);

	function handleSortFunction(parSortBy, parSortDir) {
		setSortBy(parSortBy);

		if (parSortDir === 'asc') {
			setOrderDir(-1);
		} else if (parSortDir === 'desc') {
			setOrderDir(1);
		} else console.error('invalid ' + parSortBy);
		const tmpEvent = `${parSortBy}-${parSortDir}`;
		setFilterEvent([tmpEvent]);
	}

	function handleFilterFunction(shoeProp, query) {
		setQueryType(query);
		const tmpEvent = `${shoeProp}-${query}`;
		setFilterEvent([tmpEvent]);
	}

	function onCheckBoxesChange(label, values) {
		// setCheckBoxLabel(label);
		const obj = new Object({ name: label, values: values });
		setCheckBoxObj(obj);
		const tmpEvent = `${label}-${values}`;
		setFilterEvent([tmpEvent]);
	}

	return (
		<div className="text-center">
			<div className="homepage-title text-center mb-4">
				<h1>Mens Footwear</h1>
				<div className="container my-0">
					<p>
						<em>
							“A great pair of shoes and boots can really set your outfit off
							right”
						</em>
						<b className="ml-2"> - Albert Einstein</b>
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
			<NavFilters
				shoes={shoes}
				handleFilterFunction={handleFilterFunction}
				handleSortFunction={handleSortFunction}
				// handleFilterBrand={handleFilterBrand}
				onCheckBoxesChange={onCheckBoxesChange}
			/>
			<p className="text-center">{shoes.length} Products found</p>
			<div className="container d-flex flex-wrap justify-content-center">
				{shoes.map((v) => (
					<div key={v.id} className="my-3">
						<ImgMediaCard shoe={v} />
					</div>
				))}
			</div>
		</div>
	);
};
export default HomePage;
