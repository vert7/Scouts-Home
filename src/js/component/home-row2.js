import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Collab from "../../img/collab-musician.jpg";

const Homerow2 = () => {
	return (
		<div>
			<Container fluid className="row" id="row-2">
				<div className="column3">
					<img className="foot-pic" src={Collab} />
				</div>
				<div className="column4" id="right-col">
					<h1 className="foot-h3">Who is ScoutMaster for?</h1>
					<h2 className="foot-h4">Artists looking to expand</h2>
					<Link to="/discover">
						<button className="btns-foot" id="btn-amplify1">
							Find a possible collaborator
						</button>
					</Link>
					<Link to="/">
						<button className="btns-foot" id="btn-amplify2">
							Find a Gig
						</button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Homerow2;
