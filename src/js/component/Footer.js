import React from "react";

export const Footer = props => {
	return (
		<footer className="footer">
			<div className="row">
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
								<button className="btn suggest">Support</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</footer>
	);
};
