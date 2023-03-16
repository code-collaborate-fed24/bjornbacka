import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BookingComponent from "../../components/BookingComponent";
import Partners from "../../components/Partners";
import Navbar from "../../components/Nav/Navbar";
import SuggestionParent from "../../components/Suggestion/SuggestionParent";
import "./booking.css";

function index() {
	return (
		<div className="booking-page">
			<Navbar />

			<BookingComponent />
			<h3>Suggestion</h3>
			<SuggestionParent />
		</div>
	);
}

export default index;
