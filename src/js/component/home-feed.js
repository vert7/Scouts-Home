import "../../styles/home-feed.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Avatar from "../../img/user-avatar.jpg";
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
						<img src={store.session.profileImage} className="avatar1" />
						Profile:
						{store.profile[0] && store.profile[0].acf.experience}
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
							<img src={store.session.profileImage} className="avatar2" />
						</Label>
						<Input
							type="textarea"
							name="text"
							id="right-comment-col"
							placeholder="what's up?"
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
						<button className="p-2 bd-highlight" id="btn-commentbox">
							...
						</button>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<Link to="/">
							<div id="feed-main-header-text">{store.session.username}</div>
						</Link>
					</div>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
