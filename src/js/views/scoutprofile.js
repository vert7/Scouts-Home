import React from "react";
import "../../styles/scoutprofile.scss";
import Scoutbio from "../component/scoutbio";
import Scoutcoverphoto from "../component/scoutcoverphoto";
import Scoutcolumn from "../component/scoutpic";
import Scoutwork from "../component/scoutwork";
import Scoutfeature from "../component/scoutfeature";

export const Scoutprofile = () => (
	<div className="wrapper">
		<div className="scout-col">
			<Scoutcolumn />
		</div>
		<div className="scoutfeature-col">
			<Scoutfeature />
		</div>
		<div className="container col-lg-7">
			<Scoutcoverphoto />
			<Scoutbio />
		</div>
		<div className="container col-lg-7">
			<Scoutwork />
		</div>
	</div>
);
