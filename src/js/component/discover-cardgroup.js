import React from "react";
import { Card, CardImg, CardColumns, CardBody, CardText, CardTitle } from "reactstrap";
import card1 from "../../img/card1.jpg";
import card2 from "../../img/card2.jpg";
import card3 from "../../img/card3.jpg";
import card4 from "../../img/card4.jpg";
import card5 from "../../img/card5.jpg";
import card6 from "../../img/card6.jpg";
const DiscoverCards = () => {
	return (
		<div>
			<div className="row-group">
				<CardColumns className="card-columns">
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card3} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card className="p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card1} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card bg="primary" text="white" className="text-center p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="text-center">
						<CardBody>
							<CardTitle>Card title</CardTitle>
							<CardText>
								This card has supporting text below as a natural lead-in to additional content.{" "}
							</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card2} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card className="cards-discover">
						<CardBody>
							<CardTitle>Card title</CardTitle>
							<CardText>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card4} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card className="p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card5} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card bg="primary" text="white" className="text-center p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="text-center">
						<CardBody>
							<CardTitle>Card title</CardTitle>
							<CardText>
								This card has supporting text below as a natural lead-in to additional content.{" "}
							</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
					<Card className="flip-card">
						<CardBody className="flip-card-inner">
							<div className="flip-card-front">
								<CardImg src={card6} />
							</div>
							<div className="flip-card-back">
								<h1>John Doe</h1>
								<p>Architect and Engineer</p>
								<p>We love that guy</p>
							</div>
						</CardBody>
					</Card>
					<Card className="text-right">
						<blockquote className="blockquote mb-0 card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="cards-discover">
						<CardBody>
							<CardTitle>Card title</CardTitle>
							<CardText>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
				</CardColumns>
			</div>
		</div>
	);
};

export default DiscoverCards;
