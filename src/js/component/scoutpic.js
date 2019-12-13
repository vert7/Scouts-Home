import { Card, CardBody } from "reactstrap";
import { Context } from "../store/appContext.js";
import React, { useContext } from "react";

const Scoutcolumn = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<h1>{store.profile[2] && store.profile[2].acf.name}</h1>
				<img className="userpic" src={store.profile[2] && store.profile[2].acf.image.url} />
				<h2>Scout Ft.Lauderdale,FL</h2>
				<div className="socialmediabuttons">
					<a href="#" className="fab fa-instagram" />
					<a href="#" className="fab fa-soundcloud" />
					<a href="#" className="fab fa-twitter" />
					<a href="#" className="fab fa-facebook" />
				</div>
				<div className="userrating">
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
				</div>
				<button type="button" className="btn btn-default">
					Message me
				</button>
				<p>
					<strong>Artists comments:</strong> I am very thankful for everything they have done for me. Could
					not imagine myself where I am today without their guidance and support.
				</p>
			</CardBody>
		</Card>
	);
};
export default Scoutcolumn;
