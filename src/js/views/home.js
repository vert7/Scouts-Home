import React from "react";
import Homejumbotron from "../component/home-jumbotron";
import Homerow from "../component/home-row";
import Homerow2 from "../component/home-row2";
import "../../styles/home.scss";
import "../../styles/navbar.scss";

export const Home = () => {
	return (
		<div>
			<div>
				<Homejumbotron />
				<Homerow />
				<Homerow2 />
			</div>
		</div>
	);
};
