import React from "react";
import "./suggestion.css";
const Suggestion = () => {
	return (
		<div className="suggestion-container">
			<div className="suggestion-content">
				<h5>BJÖRNBACKA NYA CENTER</h5>
				<p>
					I det nybyggda centret finns den 210 kvm stora öppna kurslokalen med
					en imponerande utsikt över åkrar och hästhagar, den rymliga salongen
					på nedervåningen, 90 kvm takterrass för avslappnade pauser i solen
					eller kvällar med fantastiska solnedgångar...
				</p>
			</div>

			<div className="suggestion-images-container">
				<img src="./images/suggestion.svg" alt="suggestion-image1" />
				<img src="./images/suggestion.svg" alt="suggestion-image2" />
				<img src="./images/suggestion.svg" alt="suggestion-image3" />
				<img src="./images/suggestion.svg" alt="suggestion-image4" />
				<img src="./images/suggestion.svg" alt="suggestion-image5" />
				<img src="./images/suggestion.svg" alt="suggestion-image6" />
				<img src="./images/suggestion.svg" alt="suggestion-image7" />
				<img src="./images/suggestion.svg" alt="suggestion-image8" />
				<img src="./images/suggestion.svg" alt="suggestion-image9" />
			</div>
		</div>
	);
};

export default Suggestion;
