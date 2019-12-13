import { Card, CardBody } from "reactstrap";
import { Context } from "../store/appContext.js";
import React, { useContext } from "react";

const Artistcolumn = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<h1>{store.profile[1] && store.profile[1].acf.name}</h1>
				<img className="userpic" src={store.profile[1] && store.profile[1].acf.image.url} />
				<h2>Artist</h2>
				<h3>{store.profile[1] && store.profile[1].acf.location}</h3>
				<div className="socialmediabuttons">
					<a href="http://www.instagram.com" className="fab fa-instagram" />
					<a href="http://soundcloud.com" className="fab fa-soundcloud" />
					<a href="http://twitter.com" className="fab fa-twitter" />
					<a href="http://facebook.com" className="fab fa-facebook" />
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
				<h2>{store.profile[1] && store.profile[1].acf.genre}</h2>
				<p>
					<strong>Scouts comments:</strong> He truly is a versatile and one-of-kind artist. His passion for
					rap is unmatched and he continously delivers.
				</p>
			</CardBody>
		</Card>
	);
};
export default Artistcolumn;
