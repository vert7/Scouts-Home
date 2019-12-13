import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const Artistbio = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<strong>
					<CardTitle>Goals:</CardTitle>
				</strong>
				<CardText>{store.profile[3] && store.profile[3].acf.goals}</CardText>
				<strong>
					<CardSubtitle>Influences:</CardSubtitle>
				</strong>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				</CardText>
				<strong>
					<CardSubtitle>Experience:</CardSubtitle>
				</strong>
				<CardText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				</CardText>
			</CardBody>
		</Card>
	);
};

export default Artistbio;
