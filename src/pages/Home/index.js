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
<<<<<<< HEAD
function index() {
=======
import Map from "../../components/Map";
import Hero from "../../components/Hero";


function index() {

>>>>>>> c0b9e2bd42cd194339cf05bdcb5cc006a65a663d
	return (
		<>
			<div className="homepage-container">
				<Navbar />
				<CardComponents />
<<<<<<< HEAD
				<Events />
				<Testimonial />
				<Partners />
				<Kurser />
				<PartnerLogos />
				<ImageCarousel />
=======
				<Partners />
				<Kurser />
				<PartnerLogos />
				<Hero />
				<Testimonial />
				<ImageCarousel />
				<Map />
>>>>>>> c0b9e2bd42cd194339cf05bdcb5cc006a65a663d
				<Footer />
			</div>
		</>
	);
}

export default index;
