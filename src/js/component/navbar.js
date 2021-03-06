import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Scout-Nav-Logo4.png";
import { Context } from "../store/appContext.js";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<nav className="navbar navbar-light bg-light">
								<Link to="/">
									<span className="navbar-brand mb-0 h1">
										<img className="Logo-Nav" src={Logo} />
									</span>
								</Link>
								<Link to="/discover">
									<button className="btn btn-primary">Discover</button>
								</Link>
								<div className="ml-auto">
									<Link to="/signup">
										<button className="btn btn-primary">Join now</button>
									</Link>
									<Link to="/login">
										<button className="btn btn-secondary">Sign in</button>
									</Link>
								</div>
							</nav>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
