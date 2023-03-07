import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Partners from "../../components/Partners";
import CardComponents from "../../components/CardComponents/cardcomponent";

function index() {
  return (
    <>
      <Header />
      <CardComponents />
      <Partners />
      <Footer />
    </>
  );
}

export default index;
