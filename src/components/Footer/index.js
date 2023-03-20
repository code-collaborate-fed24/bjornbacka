import React from "react";
import "./footer.css";

const footer = () => {
	return (
		<>
			<div className="container-footer">
				<div className="icon-about-wrapper">
					<img
						className="logotype-b"
						src="./images/bjornbacka-logo.svg"
						alt="logotype"
					></img>
					<p>
						"Björnbacka är en oas i Sverige, en plats där njutningen av den
						estetisk vackra naturen kombineras med noga genomtänkt arkitektur
						och inredning vars utformning skapar en trygg, tillitsfull atmosfär.
						Det är i sådana miljöer vi som människor kan ta till oss den
						information vi behöver för att kunna utvecklas på riktigt och våga
						ta kliv som gör oss genuint bättre för oss själva och för andra. De
						kurser och retreats Björnbacka erbjuder håller en oerhört hög nivå,
						och det märks tydligt vilket engagemang och genuin vilja ägarna
						lägger ned i varje möte för att samtliga deltagare skall kunna komma
						så långt som möjligt i sin utveckling."
					</p>
				</div>
				<div className="links-wrapper">
					<div className="footer-links">
						<h4>Ytterligare resurser</h4>
						<div className="links">
							<a href="/">FAQ</a> <br />
							<br />
							<a href="/">Privat policy</a> <br />
							<br />
							<a href="/">Cancellation policy</a> <br />
							<br />
							<a href="/">Terms and conditions</a> <br />
							<br />
						</div>

						<div className="logo">
							<div className="logo-container">
								<img
									className="fb"
									src="./images/facebook.svg"
									alt="facebook"
								></img>
								<img
									className="ig"
									src="./images/instagram.svg"
									alt="instagram"
								></img>
								<img
									className="twitter"
									src="./images/twitter.svg"
									alt="twitter"
								></img>
							</div>
							<div className="business-inc-container">
								© 2023, Björnbacka Retreatcenter
							</div>
						</div>
					</div>
				</div>
				<div className="contact-wrapper">
					<h4>Kontakt</h4>
					<p>○ 070 - 759 02 40 (bokning)</p>
					<br />
					<p>○ MATILDA@BJORNBACKA.SE</p>
					<br />
					<p>○ © 2023, Björnbacka Retreatcenter</p>
					<br />
					<p>○ Von Bahr Group AB 556648-6014</p>
					<br />
					<p>○ Ensta 5, 147 91 GRÖDINGE</p>
					<br />
				</div>
			</div>
		</>
	);
};

export default footer;
