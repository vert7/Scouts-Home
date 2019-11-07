import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Social from "../../img/Social.jpg";

export const Body = props => {
	return (
		<div>
			<Jumbotron>
				<div className="row">
					<div className="column1">
						<h1 className="display-3">Scout</h1>
						<p className="lead">Where the perfect party begins</p>
					</div>
					<div className="column2">
						<img className="JumboPic" src={Social} />
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};
