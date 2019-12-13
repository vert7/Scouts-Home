import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardSubtitle, CardColumns, CardBody, CardText, CardTitle, Button } from "reactstrap";
import card1 from "../../img/card1.jpg";
import card2 from "../../img/card2.jpg";
import card3 from "../../img/card3.jpg";
import card4 from "../../img/card4.jpg";
import card5 from "../../img/card5.jpg";
import card6 from "../../img/card6.jpg";
import card7 from "../../img/card7.jpg";
import card8 from "../../img/card8.jpg";
import Smiley from "../../img/ScoutLogo.jpg";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.jpg";
import avatar3 from "../../img/avatar3.jpg";
import avatar4 from "../../img/avatar4.jpg";
import avatar5 from "../../img/avata5.png";
import avatar6 from "../../img/avatar6.png";
import avatar8 from "../../img/avatar8.jpg";

const DiscoverCards = () => {
	return (
		<div>
			<CardColumns className="row-group">
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardTitle className="discover-card-title">
							<img className="avatar1" src={Smiley} />
							Profile Name
						</CardTitle>
						<CardImg top width="100%" src={card1} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardSubtitle>
								Live at the &quot;Le Chat Nior&quot;, had a great time with the rest of the crew and the
								locals were very welcoming.
							</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardImg top width="100%" src={card8} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar6} />
								Patrick James
							</CardTitle>
							<CardSubtitle>
								In my Zone! Not only that but my performance had a standing ovation tonight.
							</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardImg top width="100%" src={card5} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar8} />
								DaisyDaze
							</CardTitle>
							<CardSubtitle>
								Music is my refuge. I crawl into the space between the notes and curl my back to
								loneliness.
							</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardImg top width="100%" src={card3} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar3} />
								Old Timer &apos;Al
							</CardTitle>
							<CardSubtitle>
								I played at Central Park today and was forcably given money from on-goers that enjoyed
								me having a good time.
							</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardImg top width="100%" src={card4} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar5} />
								John FitsGuitar
							</CardTitle>
							<CardSubtitle>Music is universal, dude.</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardTitle className="discover-card-title">
							<img className="avatar1" src={avatar2} />
							Instrolectual
						</CardTitle>
						<CardImg top width="100%" src={card6} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardSubtitle>We are the music makers, and we are the dreamers of dreams.</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar4} />
								Boris Rodriguez
							</CardTitle>
							<CardSubtitle>
								&quot;Without music, life would be a mistake&quot; ― Friedrich Nietzsche.
							</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
				<Link className="blur" to="/homefeed">
					<Card className="cards-edit">
						<CardImg top width="100%" src={card7} alt="Card image cap" />
						<CardBody className="cardbody-text-padding">
							<CardTitle className="discover-card-title">
								<img className="avatar1" src={avatar1} />
								Liane Witsy
							</CardTitle>
							<CardSubtitle>Art is what you make it. Book me!</CardSubtitle>
						</CardBody>
					</Card>
				</Link>
			</CardColumns>
		</div>
	);
};

export default DiscoverCards;
