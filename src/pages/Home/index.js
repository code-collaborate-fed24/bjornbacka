import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Kurser from "../../components/Kurser";
import Navbar from "../../components/Nav/Navbar";
import Partners from "../../components/Partners";
import CardComponents from "../../components/CardComponents/cardcomponent";
import PartnerLogos from "../../components/partnersLogos";
import Testimonial from "../../components/Testimonials";
import ImageCarousel from "../../components/ImageCarousel";
import Events from "../../components/Events";
import "./home.css";

import Map from "../../components/Map";
import Hero from "../../components/Hero";

function index() {
	return (
		<>
			<div className="homepage-container">
				<Navbar />
				<CardComponents />
				<Events />
				<Testimonial />
				<Partners />
				<Kurser />
				<PartnerLogos />
				<Hero />
				<Testimonial />
				<ImageCarousel />
				<Map />
				<Footer />
			</div>
		</>
	);
}

export default index;
