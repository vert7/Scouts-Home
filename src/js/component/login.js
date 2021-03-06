import React from "react";
import "../../styles/login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="bg-image">
			<div className="container login">
				<form>
					<div className="scout-masters-logo" />

					<div className="sign-in d-flex flex-column align-items-center">
						<Link to="/">
							<h2 className="signintext">Sign in</h2>
						</Link>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" />
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" />
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<Link to="/homefeed">
							<button type="submit" className="btn btn-danger ">
								Submit
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

// <Context.Consumer>
// 	{({ store, actions }) => {
// 		if (store.session.isLoggedIn === true) {
// 			return <CommentForm barID={this.props.match.params.theid} />;
// 		} else {
// 			return <h6 className="text-muted">Please Log In</h6>;
// 		}
// 	}}
// </Context.Consumer>
