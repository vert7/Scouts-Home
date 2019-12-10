import "../../styles/home-feed.scss";
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
						<img src={store.session.profileImage} className="avatar1" />
						Profile:
						{store.session.username}
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
					<div className="crt-post">Create post</div>
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
							<i className="fas fa-images" />
							Photo/Video
						</button>
						<button className="p-2 bd-highlight" id="btn-commentbox">
							<i className="fas fa-user-tag" />
							Tag Amigos
						</button>
						<button className="p-2 bd-highlight" id="btn-commentbox">
							...
						</button>
					</div>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
