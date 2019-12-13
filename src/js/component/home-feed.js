import "../../styles/home-feed.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import SplitPane, { Pane } from "react-split-pane";
import { FormGroup, Label, Input } from "reactstrap";

const Homefeed = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<SplitPane split="vertical">
				<Pane initialSize="200px" className="pane-edit">
					<div className="yout1">
						<img src={store.profile[2] && store.profile[2].acf.image.url} className="avatar1" />
						{store.profile[2] && store.profile[2].acf.name} <i className="fas fa-paint-brush" />
					</div>
					<div className="yout2">
						<i className="far fa-newspaper" />
						News Feed
					</div>
					<div className="yout1">
						<i className="far fa-envelope" />
						Messenger
					</div>
					<div className="yout1">
						<i className="fas fa-users" />
						Groups
					</div>
					<div className="yout1">
						<i className="far fa-calendar-minus" />
						Events
					</div>
				</Pane>
				<Pane initialSize="25%" minSize="10%" maxSize="500px" className="pane-main">
					<div className="crt-post">Create Post</div>
					<FormGroup className="d-flex align-items-start">
						<Label for="exampleText" className="column" id="left-comment-col">
							<img src={store.profile[2] && store.profile[2].acf.image.url} className="avatar2" />
						</Label>
						<Input
							type="textarea"
							name="text"
							id="right-comment-col"
							placeholder="Wasabi?"
							className="column"
						/>
					</FormGroup>
					<div className="d-flex flex-row bd-highlight mb-3">
						<button className="p-2 bd-highlight" id="btn-commentbox">
							<i className="fas fa-images" id="btn-commentbox-icon" />
							Photo/Video
						</button>
						<button className="p-2 bd-highlight" id="btn-commentbox">
							<i className="fas fa-user-tag" id="btn-commentbox-icon" />
							Tag Amigos
						</button>
						<Link to="/">
							<button className="p-2 bd-highlight" id="btn-commentbox">
								...
							</button>
						</Link>
					</div>
					<div className="d-flex justify-content-start" id="feed-main2">
						<div id="feed-main-header">
							<img src={store.profile[3] && store.profile[3].acf.image.url} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.profile[3] && store.profile[3].acf.name}</div>
							</Link>
							<div className="feed-user-detail">
								4 hrs <i className="fas fa-paint-brush" />
								<p className="feed-content">{store.profile[3] && store.profile[3].acf.comments}</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={store.profile[4] && store.profile[4].acf.image.url} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/scoutprofile">
								<div id="feed-main-header-text">{store.profile[4] && store.profile[4].acf.name}</div>
							</Link>
							<div className="feed-user-detail">
								10 min <i className="fas fa-binoculars" />
								<p className="feed-content">{store.profile[4] && store.profile[4].acf.comments}</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={store.profile[1] && store.profile[1].acf.image.url} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/artistprofile">
								<div id="feed-main-header-text">{store.profile[1] && store.profile[1].acf.name}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-paint-brush" />
								<p className="feed-content">{store.profile[1] && store.profile[1].acf.comments}</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={store.profile[0] && store.profile[0].acf.image.url} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.profile[0] && store.profile[0].acf.name}</div>
							</Link>
							<div className="feed-user-detail">
								10 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">{store.profile[0] && store.profile[0].acf.comments}</p>
							</div>
						</div>
					</div>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
