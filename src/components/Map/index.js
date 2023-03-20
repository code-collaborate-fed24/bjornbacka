/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./map.css";
const Map = () => {
	return (
		<div className="map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.511306776157!2d17.763380334802896!3d59.17402762276769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f6d4fedeef677%3A0xcfc7fc67ec3f0b0b!2sInner%20Journeys%20Retreat%20Sverige!5e0!3m2!1sen!2sse!4v1678921225645!5m2!1sen!2sse"
				width="50%"
				height="400"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default Map;
