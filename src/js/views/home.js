import React from "react";
import { Jumbotron } from "reactstrap";
import Social from "../../img/music_business.jpg";
import Collab from "../../img/collab-musician.jpg";
import "../../styles/index.scss";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div>
			<div>
				<Jumbotron>
					<div className="row">
						<div className="column1">
							<h1 className="display-3">ScoutMaster</h1>
							<p className="lead">Where musicians amplify together</p>
							<input className="searchbar" type="text" name="search" placeholder="Find gigs or artists" />
						</div>
						<div className="column2">
							<img className="JumboPic" src={Social} />
						</div>
					</div>
				</Jumbotron>
			</div>
			<div>
				<div>
					<div className="row" id="suggest-row">
						<div className="column3">
							<h1 className="foot-h1">Find the right event or artist for you</h1>
						</div>
						<div className="column4">
							<h2 className="foot-h2">SUGGESTIONS</h2>
							<table className="button-box">
								<tr>
									<th>
										<button className="btn suggest">Electronic</button>
									</th>
									<th>
										<button className="btn suggest">Hip-Hop</button>
									</th>
									<th>
										<button className="btn suggest">Rock</button>
									</th>
								</tr>
								<tr>
									<td>
										<button className="btn suggest">Rhymes and Blues</button>
									</td>
									<td>
										<button className="btn suggest">Country</button>
									</td>
								</tr>
								<tr>
									<td>
										<button className="btn suggest">Dubstep</button>
									</td>
									<td>
										<button className="btn suggest">Jazz</button>
									</td>
									<td>
										<button className="btn suggest">Reggae</button>
									</td>
								</tr>
								<tr>
									<td>
										<button className="btn suggest">Alternative</button>
									</td>
									<td>
										<button className="btn suggest">Techno</button>
									</td>
									<td>
										<button className="btn suggest">Classical</button>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<div className="row" id="row-2">
					<div className="column3">
						<img className="foot-pic" src={Collab} />
					</div>
					<div className="column4" id="right-col">
						<h1 className="foot-h3">Who is ScoutMaster for?</h1>
						<h2 className="foot-h4">Artists looking to expand</h2>
						<button className="btns-foot" id="btn-amplify1">
							Find a possible collaborator
						</button>
						<button className="btns-foot" id="btn-amplify2">
							Find a Gig
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
