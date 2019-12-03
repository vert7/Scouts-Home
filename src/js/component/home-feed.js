import React from "react";
import "../../styles/home-feed.scss";
import SplitPane, { Pane } from "react-split-pane";
import Avatar from "../../img/user-avatar.jpg";

const Homefeed = () => {
	return (
		<div>
			<SplitPane split="vertical">
				<Pane initialSize="200px" className="pane-edit">
					<div className="yout1">
						<img src={Avatar} className="avatar" />
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
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
