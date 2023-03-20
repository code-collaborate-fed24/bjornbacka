import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Nav/Navbar";
import CardComponents from "../../components/CardComponents/cardcomponent";
import PartnerLogos from "../../components/partnersLogos";
import Testimonial from "../../components/Testimonials";
import ImageCarousel from "../../components/ImageCarousel";
import "./home.css";

import Map from "../../components/Map";
import Hero from "../../components/Hero";

function index() {
	return (
		<>
			<div className="homepage-container">
				<Navbar />
				<CardComponents />
				<Hero />
				<Testimonial />
				<PartnerLogos />
				<ImageCarousel />
				<Map />
				<Footer />
			</div>
		</>
	);
}

export default index;
