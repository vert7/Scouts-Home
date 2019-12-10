import React from "react";
import "../../styles/home-feed.scss";
import SplitPane, { Pane } from "react-split-pane";
import { FormGroup, Label, Input } from "reactstrap";
import Avatar from "../../img/user-avatar.jpg";

const Homefeed = () => {
	return (
		<div>
			<SplitPane split="vertical">
				<Pane initialSize="200px" className="pane-edit">
					<div className="yout1">
						<img src={Avatar} className="avatar1" />
						Profile
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
					<FormGroup className="d-flex justify-content-around align-items-center">
						<Label for="exampleText" className="column" id="left-comment-col">
							<img src={Avatar} className="avatar2" />
						</Label>
						<Input
							type="textarea"
							name="text"
							id="right-comment-col"
							placeholder="what's up?"
							className="column"
						/>
					</FormGroup>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
