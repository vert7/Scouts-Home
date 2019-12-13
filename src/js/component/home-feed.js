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
					<div className="d-flex justify-content-start" id="feed-main2">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-start" id="feed-main">
						<div id="feed-main-header">
							<img src={Avatar} className="avatar2" />
						</div>
						<div className="list-detail">
							<Link to="/">
								<div id="feed-main-header-text">{store.session.username}</div>
							</Link>
							<div className="feed-user-detail">
								3 hrs <i className="fas fa-binoculars" />
								<p className="feed-content">
									If you are a young indie band, we want to work with you. We are a National-Wide
									festival that runs all year roind. I am one of there few Talent bookers on this site
									so please reach out to me through here.
								</p>
							</div>
						</div>
					</div>
				</Pane>
			</SplitPane>
		</div>
	);
};

export default Homefeed;
