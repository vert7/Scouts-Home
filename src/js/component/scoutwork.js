import React from "react";
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from "reactstrap";

const Scoutwork = () => {
	return (
		<CardColumns>
			<Card>
				<CardBody color="danger">
					<CardText>Looking for singers for a new project</CardText>
					<CardImg
						top
						width="100%"
						src="https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Card image cap"
					/>
				</CardBody>
			</Card>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Card image cap"
				/>
			</Card>
			<Card>
				<CardBody>
					<CardTitle>Check it out</CardTitle>
					<CardText>My artist is performing tonight.</CardText>
					<CardImg
						top
						width="100%"
						src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Card image cap"
					/>
				</CardBody>
			</Card>
			<Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
				<CardTitle>Special Title Treatment</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Card image cap"
				/>
			</Card>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Card image cap"
				/>
			</Card>
			<Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
				<CardTitle>Special Title Treatment</CardTitle>
				<CardText>Performers needed for Nightclub opening</CardText>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/1449795/pexels-photo-1449795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="Card image cap"
				/>
			</Card>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/159376/turntable-top-view-audio-equipment-159376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</CardText>
				</CardBody>
			</Card>
			<Card>
				<CardTitle>Songwriters are in high demand</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="Card image cap"
				/>
			</Card>
		</CardColumns>
	);
};

export default Scoutwork;
