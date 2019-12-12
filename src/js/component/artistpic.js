import React from "react";
import { Card, CardBody } from "reactstrap";

const Artistcolumn = () => {
	return (
		<Card>
			<CardBody>
				<h1>User Profile Name</h1>
				<img
					className="userpic"
					src="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				/>
				<h2>Artist Miami,FL</h2>
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
				<h2>Genre</h2>
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
