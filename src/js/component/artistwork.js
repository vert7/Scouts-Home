import React from "react";
import { Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from "reactstrap";

const Artistwork = () => {
	return (
		<CardColumns>
			<Card>
				<CardBody color="danger">
					<CardText>3 track album</CardText>
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
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						This card has supporting text below as a natural lead-in to additional content.
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
				<CardTitle>Special Title Treatment</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</CardText>
				</CardBody>
			</Card>
			<Card body inverse color="danger">
				<CardTitle>Special Title Treatment</CardTitle>
				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
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
