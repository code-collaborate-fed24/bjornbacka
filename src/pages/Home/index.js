import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Kurser from "../../components/Kurser";
import Partners from "../../components/Partners";
import PartnerLogos from "../../components/partnersLogos";

import ImageCarousel from "../../components/ImageCarousel";
import "./home.css";
function index() {
	return (
		<>
			<div className="homepage-container">
				<Header />
				<Partners />
				<Kurser />
				<PartnerLogos />

				<Footer />
				<ImageCarousel />
			</div>
		</>
	);
}

export default index;
