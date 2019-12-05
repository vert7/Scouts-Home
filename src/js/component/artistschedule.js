import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const Artistschedule = () => {
	return (
		<Card>
			<CardBody>
				<strong>
					<CardTitle>Event schedule</CardTitle>
				</strong>
				<div className="mapouter">
					<div className="gmap_canvas">
						<iframe
							width="250"
							height="250"
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=the%20fillmore%20miami%20beach&t=&z=13&ie=UTF8&iwloc=&output=embed"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
						/>
						<h1>add calendar widget</h1>
						<p>
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lore
							sed do
						</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Artistschedule;
