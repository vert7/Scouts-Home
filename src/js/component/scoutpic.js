import React from "react";
import { Card, CardBody } from "reactstrap";

const Scoutcolumn = () => {
	return (
		<Card>
			<CardBody>
				<h1>User Profile Name</h1>
				<img
					className="userpic"
					src="https://images.pexels.com/photos/1534/man-person-technology-music.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
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
				<h2>Previous Collaborators</h2>
				<p>
					<strong>Artists comments:</strong> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint
				</p>
			</CardBody>
		</Card>
	);
};
export default Scoutcolumn;
