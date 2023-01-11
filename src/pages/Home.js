import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.scss";
import PC from "../components/PC.js";
import Header from "../components/Header.js";

const Home = () => {
	const [isConn, setIsConn] = useState();

	return (
		<div>
			<div className="home-wrap">
				<Header />
				<div className="home-title-box">ds</div>
				<PC />
			</div>
		</div>
	);
};

export default Home;
