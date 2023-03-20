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
function index() {
<<<<<<< HEAD
  return (
    <>
      <div className="homepage-container">
        {/* <Header /> */}
        <Navbar />
        <Partners />
        <Kurser />
        <PartnerLogos />
        <Footer />
      </div>
    </>
  );
=======
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
				<ImageCarousel />
				<Footer />
			</div>
		</>
	);
>>>>>>> 86d3fa9c33df68a732cb55e6e43f63cd1fe738f1
}

export default index;
