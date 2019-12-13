import { Context } from "../store/appContext.js";
import { Card, CardTitle, CardBody } from "reactstrap";
import React, { useContext } from "react";
const Scoutfeature = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<strong>
					<CardTitle>My Featured Artist</CardTitle>
				</strong>
				<h1>{store.profile[3] && store.profile[3].acf.name}</h1>
				<img className="featuredartist" src={store.profile[3] && store.profile[3].acf.image.url} />
			</CardBody>
		</Card>
	);
};

export default Scoutfeature;
