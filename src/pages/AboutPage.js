import React from 'react';
import SimpleAccordion from '../components/SimpleAccordion'

class AboutPage extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="text-center my-4">About</h1>
				<SimpleAccordion/>
				{/* <p>ES6</p>
				<p>Set</p>
				<p>Map</p>
				<p>localStorage()</p> */}
			</div>
		);
	}
}

export default AboutPage;
