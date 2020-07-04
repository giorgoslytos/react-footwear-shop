import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="text-center my-4">About</h1>
				<p>
					<b>EXERCISE:</b> Please create a simple single page browser
					application where from the user can add/remove items into their basket
					from a pool of priced items (dummy, hard-coded within the App).
				</p>
				<p>
					Basket should display total price and allow for quantity changes. When
					total exceeds €100 then apply 10% discount and notify user. A "buy"
					button should log (in console) an XML with the minimum amount of data
					required to describe the state of the basket (assume that this is to
					be sent to the back-end managing the items). Basket should survive
					browser refreshes.
				</p>
				<ul>
					<h6>
						<b>Technical details:</b>
					</h6>
					<li>There is no need to do anything special about styling (CSS).</li>
					<li>
						Please do not implement anything outside of requirements (e.g
						database persistence, users and roles, authentication etc).
					</li>
				</ul>
				<p>ES6</p>
				<p>Set</p>
				<p>Map</p>
				<p>localStorage()</p>
			</div>
		);
	}
}

export default AboutPage;
