import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Partners from "../../components/Partners";
import "./partners.css";
import { datas } from "../../data";
function index() {
	console.log(datas);
	return (
		<>
			<div className="partners-page">
				<div className="first-content">
					<p>
						Vi samarbetar med några väl utvalda samarbetspartners vilka vi anser
						har stort inflytande på vårt samhälles positiva utveckling. Våra
						partners är med och samskapar Björnbackas riktlinjer med
						meningsfullt innehåll till våra kunders företagskonferenser eller
						andra events. Du som kund är välkommen att vända dig till oss med en
						förfrågan där vi i samråd tar fram ett passande innehåll som är
						förankrade i era behov.
					</p>
				</div>
				{datas.map((user) => {
					return (
						<div key={user.id} class="user-card">
							<div className="user-card__left">
								<img
									alt={user.id}
									src={user.img}
									width="80"
									height="80"
									style={{ borderRadius: "50%" }}
								/>
								<p>{user.name}</p>
							</div>
							<div className="user-card__right">
								<p>{user.content}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default index;
