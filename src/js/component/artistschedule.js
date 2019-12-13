import { Context } from "../store/appContext.js";
import { Card, CardTitle, CardBody } from "reactstrap";
import React, { useContext } from "react";
const Artistschedule = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<strong>
					<CardTitle>Event Schedule</CardTitle>
				</strong>
				Friday December 13th, 2019 at 8pm
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
						<p>
							{" "}
							<img className="venuepic" src={store.venue[0] && store.venue[0].acf.image.url} />
						</p>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Artistschedule;
