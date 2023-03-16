import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Booking from "../BookingComponent";

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
        <a href="www.google.com">FORETAG</a>
        <a href="www.google.com">PRIVAT</a>
        <a href="www.google.com">KURSER OCH RETREATS</a>
        <Link to="/booking">BOKA</Link>
      </div>
    </div>
  );
};

export default Header;
