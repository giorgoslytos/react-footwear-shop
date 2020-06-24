import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../components/ImgMediaCard';
import NavFilters from '../components/NavFilters';

const HomePage = () => {
	const [shoes, setShoes] = useState([]);
	const [sortBy, setSortBy] = useState('date');
	const [orderDir, setOrderDir] = useState(1);
	const [queryType, setQueryType] = useState(['shoes', 'boots']);
	const [filterEvent, setFilterEvent] = useState('date-desc');
	const [checkBoxObj, setCheckBoxObj] = useState({
		brand: [],
		style: [],
		brogues: [],
		color: [],
		sole: [],
		lacingSystem: [],
		construction: [],
		leatherType: [],
		size: [],
	});

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
						return false;
					})
					.filter((item) => {
						if (
							checkBoxObj['leatherType'].length === 0 &&
							checkBoxObj['construction'].length === 0 &&
							checkBoxObj['lacingSystem'].length === 0 &&
							checkBoxObj['sole'].length === 0 &&
							checkBoxObj['color'].length === 0 &&
							checkBoxObj['brogues'].length === 0 &&
							checkBoxObj['style'].length === 0 &&
							checkBoxObj['brand'].length === 0
						)
							return true;
						else if (
							checkBoxObj['leatherType']
								.map((item) => item.toLowerCase())
								.includes(item['leatherType'].toLowerCase()) ||
							checkBoxObj['construction']
								.map((item) => item.toLowerCase())
								.includes(item['construction'].toLowerCase()) ||
							checkBoxObj['lacingSystem']
								.map((item) => item.toLowerCase())
								.includes(item['lacingSystem'].toLowerCase()) ||
							checkBoxObj['sole']
								.map((item) => item.toLowerCase())
								.includes(item['sole'].toLowerCase()) ||
							checkBoxObj['color']
								.map((item) => item.toLowerCase())
								.includes(item['color'].toLowerCase()) ||
							checkBoxObj['brogues']
								.map((item) => item.toLowerCase())
								.includes(item['brogues'].toLowerCase()) ||
							checkBoxObj['style']
								.map((item) => item.toLowerCase())
								.includes(item['style'].toLowerCase()) ||
							checkBoxObj['brand']
								.map((item) => item.toLowerCase())
								.includes(item['brand'].toLowerCase())
						)
							return true;
						else return false;
					})
					.filter((item) => {
						if (checkBoxObj['size'].length === 0) return true;
						for (let i = 0; i < checkBoxObj['size'].length; i++) {
							if (item['size'].includes(parseInt(checkBoxObj['size'][i])))
								return true;
						}
						return false;
					});
				setShoes(shoesRes);
			});
	}, [filterEvent, checkBoxObj, orderDir, queryType, sortBy]);

	function handleSortFunction(parSortBy, parSortDir) {
		setSortBy(parSortBy);

		if (parSortDir === 'asc') {
			setOrderDir(-1);
		} else if (parSortDir === 'desc') {
			setOrderDir(1);
		} else console.error('invalid ' + parSortBy);
		const tmpEvent = `${parSortBy}-${parSortDir}`;
		setFilterEvent(tmpEvent);
	}

	function handleFilterFunction(shoeProp, query) {
		setQueryType(query);
		const tmpEvent = `${shoeProp}-${query}`;
		setFilterEvent(tmpEvent);
	}

	function onCheckBoxesChange(label, values) {
		let obj = checkBoxObj;
		obj[label] = values;
		setCheckBoxObj(obj);
		const tmpEvent = `${label}-${values}`;
		setFilterEvent(tmpEvent);
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
