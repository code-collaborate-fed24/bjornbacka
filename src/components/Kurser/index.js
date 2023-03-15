import React from "react";
import "./kurser.css";
const Kurser = () => {
	return (
		<div className="kurser">
			<div className="first-content">
				<div className="first-content__one">
					<img
						src="../../images/iconeprofile.png"
						width={64}
						height={64}
						alt="backgroundimages"
					/>
					<p>innerjourneys</p>
				</div>
				<div className="first-content__two">
					<p>Kurser och retreats på Björnbacka</p>
				</div>
			</div>
			<div className="second-content">
				<p>
					Intresserad av att gå en av våra kurser eller retreats? Mer
					information och bokning hittar ni på Inner Journeys <br />
					<span>www.innerjourneys.org</span> Kurserna hålls även framöver på
					Björnbacka.
				</p>
				<button className="second-content__btn">LÄS MER HÄR</button>
			</div>
		</div>
	);
};

export default Kurser;
