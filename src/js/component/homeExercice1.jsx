import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import { JumboTron, Jumbotron } from "./JumboTron.jsx";
import { NavBar } from "./NavBar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid" class="container-sm">
			<NavBar />
			<div>
				<JumboTron />
				<div class="d-flex align-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
