import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Kurser from "../../components/Kurser";
import Partners from "../../components/Partners";
import "./home.css";
function index() {
	return (
		<>
			<div className="homepage-container">
				<Header />
				<Partners />
				<Kurser />
				<Footer />
			</div>
		</>
	);
}

export default index;
