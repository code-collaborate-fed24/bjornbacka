import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Booking from "../Booking";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<div className="icon">
					<img src="./images/logo.svg" alt="logo" />
					<img src="./images/logotxt.svg" alt="logotext" />
				</div>
			</Link>

			<div className="searchbar">
				<img
					className="searchbar__img"
					src="./images/iconsearch.svg"
					alt="search"
				/>
				<input type="text" placeholder="Search" />
			</div>
			<div className="items">
				<Link to="/">FORETAG</Link>
				<Link to="/partners">PRIVAT</Link>
				<Link to="/partners">KURSER OCH RETREATS</Link>
				<Link to="/booking">BOKA</Link>
			</div>
		</div>
	);
};

export default Header;
