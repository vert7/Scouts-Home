import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/ScoutMaster.jpg";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="Logo-Nav" src={Logo} />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn primary">Join now</button>
						<button className="btn secondary">Sign in</button>
					</Link>
				</div>
			</nav>
		);
	}
}
