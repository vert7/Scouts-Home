import React from "react";
import "../../styles/artistprofile.scss";
import Artistwork from "../component/artistwork";
import Artistbio from "../component/artistbio";
import Artistschedule from "../component/artistschedule";
import Artistcoverphoto from "../component/artistcoverphoto";
import Artistcolumn from "../component/artistpic";

export const Artistprofile = () => (
	<div className="wrapper">
		<div className="artist-col">
			<Artistcolumn />
		</div>
		<div className="events-col">
			<Artistschedule />
		</div>

		<div className="container col-lg-7">
			<Artistcoverphoto />
			<Artistbio />
		</div>

		<div className="container col-lg-7">
			<Artistwork />
		</div>
	</div>
);
