import React from "react";
import { Jumbotron, Container } from "reactstrap";
import JumboBack from "../../img/man-mic.png";

const Homejumbotron = () => {
	return (
		<Jumbotron className="Jumbo1">
			<img className="JumboBack" src={JumboBack} />
			<Container fluid className="row" id="Jumbo1-row">
				<div className="col-first">
					<h1 className="main-head">ScoutMaster</h1>
					<p className="sub-head">Where musicians amplify together</p>
				</div>
				<div className="col-second" />
			</Container>
		</Jumbotron>
	);
};

export default Homejumbotron;
