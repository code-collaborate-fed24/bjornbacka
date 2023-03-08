import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	li {
		padding: 18px 10px;
		color: #ffffff;
	}
	li a {
		color: #ffffff;
	}
	@media (max-width: 992px) {
		flex-flow: column nowrap;
		background-color: #00000080;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>
				<Link to={"/"}>FORETAG</Link>
			</li>
			<li>
				<Link to={"/"}>PRIVAT</Link>
			</li>
			<li>
				<Link to={"/"}>KURSER OCH RETREATS</Link>
			</li>
			<li>
				<Link to={"/booking"}>BOKA</Link>
			</li>
		</Ul>
	);
};

export default RightNav;
