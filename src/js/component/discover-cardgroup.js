import React from "react";
import { Card, CardImg, CardColumns, CardSubtitle, CardBody, CardText, CardTitle, Button } from "reactstrap";
import card1 from "../../img/card1.jpg";
import card2 from "../../img/card2.jpg";
import card3 from "../../img/card3.jpg";
import card4 from "../../img/card4.jpg";
import card5 from "../../img/card5.jpg";
import card6 from "../../img/card6.jpg";
const DiscoverCards = () => {
	return (
		<div>
			<CardColumns className="row-group">
				<Card>
					<CardImg top width="100%" src={card1} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg top width="100%" src={card2} alt="Card image cap" />
				</Card>
				<Card>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This card has supporting text below as a natural lead-in to additional content.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg top width="100%" src={card3} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg top width="100%" src={card4} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg top width="100%" src={card5} alt="Card image cap" />
				</Card>
				<Card>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This card has supporting text below as a natural lead-in to additional content.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg top width="100%" src={card6} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</CardColumns>
		</div>
	);
};

export default DiscoverCards;
