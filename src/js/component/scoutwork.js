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
					<CardText>
						My artist is performing tonight at The House of Blues. Show starts at 10pm, see you there!
					</CardText>
					<CardImg
						top
						width="100%"
						src="https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="Card image cap"
					/>
				</CardBody>
			</Card>
			<Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
				<CardTitle>EDC is coming Soon</CardTitle>
				<CardText>Want to make your way onto the big stage? Contact me for details.</CardText>
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
				<CardTitle>This Saturday</CardTitle>
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
					<CardTitle>New Project Underway</CardTitle>
					<CardSubtitle>Evan Michaels collaboration</CardSubtitle>
					<CardText>The new album is going to be amazing! Cannot wait for everyone to hear it.</CardText>
				</CardBody>
			</Card>
			<Card>
				<CardTitle>Songwriters are in high demand</CardTitle>
				<CardText>Your lyrics have the potential to be heard worldwide.</CardText>
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
