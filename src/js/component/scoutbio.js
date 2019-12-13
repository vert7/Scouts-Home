import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const Scoutbio = () => {
	const { store } = useContext(Context);
	return (
		<Card>
			<CardBody>
				<strong>
					<CardTitle>Looking for:</CardTitle>
				</strong>
				<CardText>Pop singers with an edge. Someone that is ready to put in work and reach stardom.</CardText>
				<strong>
					<CardSubtitle>Experience:</CardSubtitle>
				</strong>
				<CardText>{store.profile[2] && store.profile[2].acf.experience}</CardText>
				<strong>
					<CardSubtitle>Artists Hired:</CardSubtitle>
				</strong>
				<CardText>Sia, Dua Lipa, Billie Eilish, James Blake</CardText>
			</CardBody>
		</Card>
	);
};

export default Scoutbio;
