import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "reactstrap";
import Collab from "../../img/collab-musician.jpg";

const Homerow = () => {
	return (
		<div>
			<div>
				<Jumbotron fluid className="Jumbo2">
					<Container fluid className="row" id="suggest-row">
						<div className="col-third">
							<h1 className="foot-h1">Find the right event or artist for you</h1>
						</div>
						<div className="col-fourth">
							<h2 className="foot-h2">SUGGESTIONS</h2>
							<table className="button-box" id="suggest-table">
								<tr>
									<th>
										<button className="btn-suggest">Electronic</button>
									</th>
									<th>
										<button className="btn-suggest">Hip-Hop</button>
									</th>
									<th>
										<button className="btn-suggest">Rock</button>
									</th>
								</tr>
								<tr>
									<td>
										<button className="btn-suggest">Rhymes and Blues</button>
									</td>
									<td>
										<button className="btn-suggest">Country</button>
									</td>
								</tr>
								<tr>
									<td>
										<button className="btn-suggest">Dubstep</button>
									</td>
									<td>
										<button className="btn-suggest">Jazz</button>
									</td>
									<td>
										<button className="btn-suggest">Reggae</button>
									</td>
								</tr>
								<tr>
									<td>
										<button className="btn-suggest">Alternative</button>
									</td>
									<td>
										<button className="btn-suggest">Techno</button>
									</td>
									<td>
										<button className="btn-suggest">Classical</button>
									</td>
								</tr>
							</table>
						</div>
					</Container>
				</Jumbotron>
			</div>
		</div>
	);
};

export default Homerow;
