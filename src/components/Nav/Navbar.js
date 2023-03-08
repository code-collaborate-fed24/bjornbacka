import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";
import "./navbar.css";

const Nav = styled.nav`
	width: 100%;
	height: 80px;
	border-bottom: 2px solid #f1f1f1;
	padding: 1rem 1.2rem;
	display: flex;
	align-items: center;
	background-color: black;
	justify-content: space-evenly;
	@media (max-width: 992px) {
		justify-content: space-evenly;
		gap: 1rem;
		padding: 1rem 0;
	}
	.logo {
		padding: 15px 0;
	}
`;

const Navbar = () => {
	return (
		<Nav>
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
			<Burger />
		</Nav>
	);
};

export default Navbar;
