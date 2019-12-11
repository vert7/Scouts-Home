import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Discover } from "./views/discover";
import { Registration } from "./views/registration";
import { Artistprofile } from "./views/artistprofile";
import { Scoutprofile } from "./views/scoutprofile";
import Homefeed from "./component/home-feed";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/Footer";
import { Login } from "./component/login";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/registration" component={Registration} />
							<Route
								path="/"
								render={() => (
									<React.Fragment>
										<Navbar />
										<Switch>
											<Route exact path="/" component={Home} />
											<Route path="/discover" component={Discover} />
											<Route path="/artistsprofile" component={Artistprofile} />
											<Route exact path="/scoutprofile" component={Scoutprofile} />
											<Route path="/homefeed" component={Homefeed} />
										</Switch>
										<Footer />
									</React.Fragment>
								)}
							/>
							<Route render={() => <h1>It is okay :)</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
