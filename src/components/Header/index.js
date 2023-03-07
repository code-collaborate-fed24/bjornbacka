import React from "react";
import "./header.css";
const Header = () => {
	return (
		<div className="header">
			<div className="icon">
				<img src="./images/logo.svg" alt="logo" />
				<img src="./images/logotxt.svg" alt="logotext" />
			</div>
			<div className="searchbar">
				<img
					className="searchbar__img"
					src="./images/iconsearch.svg"
					alt="search"
				/>
				<input type="text" placeholder="Search" />
			</div>
			<div className="items">
				<a href="www.google.com">FORETAG</a>
				<a href="www.google.com">PRIVAT</a>
				<a href="www.google.com">KURSER OCH RETREATS</a>
				<a href="www.google.com">BOKA</a>
			</div>
		</div>
	);
};

export default Header;
