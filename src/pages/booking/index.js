import React from "react";
import BookingComponent from "../../components/BookingComponent";
import Partners from "../../components/Partners";
import Navbar from "../../components/Nav/Navbar";

import SuggestionParent from "../../components/Suggestion/SuggestionParent";
import "./booking.css";
import Footer from "../../components/Footer";

function index() {
	return (
		<>
			<Navbar />
			<div className="booking-background ">
				<div className="booking-title">BJÖRNBACKA ORIGINAL</div>
			</div>
			<div className="bookpage-container">
				<p className="booking--paragraph">
					En fristående byggnad med totalt 10 sängplatser.Ett imponerande
					nybygge med makalös utsikt över åkrarna. Ovanvåning: ca 210 kvm öppet
					rum med flexibel utformning/möblering/avgränsningar utifrån era behov.
					Nedervåning: fullt utrustat restaurangkök; flera matbord med
					sittplatser för ca. 60 personer; stor umgängesyta med soffor, bardisk
					m.m.; 5 sovrum; 2 badrum med 3 duschar i varje; 6 WC;
					bastu/SPA-avdelning; utomhuspool och badtunna samt 2 uteduschar; 80
					kvm stor utomhusterrass; stor trädgård för umgänge och lekar.
				</p>
				<BookingComponent />
				<h3>Suggestion</h3>
				<SuggestionParent />
				<Footer />
			</div>
		</>
	);
}

export default index;
