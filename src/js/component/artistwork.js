import React from "react";
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from "reactstrap";

const Artistwork = () => {
	return (
		<CardColumns>
			<Card>
				<CardBody color="danger">
					<CardText>3 track album for your enjoyment below</CardText>
					<iframe
						width="100%"
						height="600"
						scrolling="no"
						frameBorder="no"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/913132486&color=%23cb0022&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					/>
				</CardBody>
			</Card>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="Card image cap"
				/>
			</Card>
			<Card>
				<CardBody>
					<CardTitle>Ambient Sounds</CardTitle>
					<CardSubtitle />
					<CardText>
						Check out what I have been working on, been focusing on the instrumentals.
						<iframe
							width="100%"
							height="300"
							scrolling="no"
							frameBorder="no"
							allow="autoplay"
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/656604585&color=%23cb0022&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
						/>
					</CardText>
				</CardBody>
			</Card>
			<Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
				<CardTitle>So many ideas</CardTitle>
				<CardText>
					In need of a producer for my upcoming EP. I am looking to experiment with a different sound.{" "}
				</CardText>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/744321/pexels-photo-744321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="Card image cap"
				/>
			</Card>
			<Card>
				<CardImg
					top
					width="100%"
					src="https://images.pexels.com/photos/935959/pexels-photo-935959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="Card image cap"
				/>
				<CardBody>
					<strong>
						<CardTitle>Always in the booth</CardTitle>
					</strong>
					<CardSubtitle>Stay Tuned!</CardSubtitle>
					<CardText>I got a new set of hits coming at ya</CardText>
				</CardBody>
			</Card>
			<Card body inverse color="danger">
				<CardTitle>Ozora Festival</CardTitle>
				<CardText>
					If you did not make it out there, here is a snippet of what you missed at Ozora Festival this past
					August.
				</CardText>
				<iframe
					width="100%"
					height="300"
					scrolling="no"
					frameBorder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/672699926&color=%23cb0022&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
				/>
			</Card>
		</CardColumns>
	);
};
export default Artistwork;
