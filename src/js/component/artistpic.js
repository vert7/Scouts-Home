import { Card, CardBody } from "reactstrap";
import { Context } from "../store/appContext.js";
import React, { useContext } from "react";

const Artistcolumn = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<h1>{store.profile[3] && store.profile[3].acf.name}</h1>
				<img
					className="userpic"
					src="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				/>
				<h2>Artist</h2>
				<h3>{store.profile[3] && store.profile[3].acf.location}</h3>
				<div className="socialmediabuttons">
					<a href="#" className="fab fa-instagram" />
					<a href="#" className="fab fa-soundcloud" />
				</div>
				<div className="userrating">
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
					<i className="fas fa-star" />
				</div>
				<button type="button" className="btn btn-default">
					Message me
				</button>
				<h2>{store.profile[3] && store.profile[3].acf.genre}</h2>
				<p>
					<strong>Scouts comments:</strong> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint
				</p>
			</CardBody>
		</Card>
	);
};
export default Artistcolumn;
