import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Scout-Nav-Logo4.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="Logo-Nav" src={Logo} />
					</span>
				</Link>
				<Link to="/discover">
					<input className="discoverbar" type="text" name="search" placeholder="Discover" />
				</Link>
				<div className="ml-auto">
					<Link to="/registration">
						<button className="btn btn-primary">Join now</button>
					</Link>
					<Link to="">
						<button className="btn btn-secondary">Sign in</button>
					</Link>
				</div>
			</nav>
		);
	}
}
