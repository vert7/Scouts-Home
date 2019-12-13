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
				<CardText>{store.profile[5] && store.profile[5].acf.goals}</CardText>
				<strong>
					<CardSubtitle>Influences:</CardSubtitle>
				</strong>
				<CardText>
					Biggie, Nas, Tupac, Coolio, Jay-Z, Future, T-Pain, The Strokes, Lil Wayne, A Tribe Called Quest,
					Method Man, Snoop Dogg, Ice Cube, N.W.A.
				</CardText>
				<strong>
					<CardSubtitle>Experience:</CardSubtitle>
				</strong>
				<CardText>
					10 years in the rap game and freestyling since the age of 16. Rap Battles are my forte.
				</CardText>
			</CardBody>
		</Card>
	);
};

export default Artistbio;
