import React from "react";
import "../../styles/scoutprofile.scss";
import Scoutbio from "../component/scoutbio";
import Scoutcoverphoto from "../component/scoutcoverphoto";
import Scoutcolumn from "../component/scoutpic";
import Scoutwork from "../component/scoutwork";

export const Scoutprofile = () => (
	<div className="wrapper">
		<div className="scout col-sm-2 text-center float-left">
			<Scoutcolumn />
		</div>
		<div className="col-sm-2 float-right" />
		<div className="container col-lg-7">
			<Scoutcoverphoto />
			<Scoutbio />
		</div>
		<div className="container col-lg-7">
			<Scoutwork />
		</div>
	</div>
);
