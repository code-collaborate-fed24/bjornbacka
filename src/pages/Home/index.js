import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Kurser from "../../components/Kurser";
import Partners from "../../components/Partners";
import PartnerLogos from "../../components/partnersLogos";
import Testimonial from "../../components/Testimonials";

import "./home.css";
function index() {
  return (
    <>
      <div className="homepage-container">
        <Header />
        <Partners />
        <Kurser />
        <PartnerLogos />
        <Testimonial />

        <Footer />
      </div>
    </>
  );
}

export default index;
