import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Kurser from "../../components/Kurser";
import Navbar from "../../components/Nav/Navbar";
import Partners from "../../components/Partners";
import PartnerLogos from "../../components/partnersLogos";
import Testimonial from "../../components/Testimonials";

import ImageCarousel from "../../components/ImageCarousel";
import "./home.css";
function index() {
	return (
		<>
			<div className="homepage-container">
				<Navbar />
				<Partners />
				<Kurser />
				<PartnerLogos />
        <Testimonial />
				<ImageCarousel />
				<Footer />
			</div>
		</>
	);
}

export default index;
