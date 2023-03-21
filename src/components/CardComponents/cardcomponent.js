import CardItem from "./carditems";
import CardData from "../../Data/card-component-data";
import "../CardComponents/cardcomponent.css";

const CardContainer = () => {
	return (
		<section className="section">
			<div className="container-wrapper">
				<div className="h1-h3-container">
					<h1 className="h1">Välkommen till Björnbacka</h1>
					<h3 className="h3">
						En oas för meningsfulla möten söder om Stockholm
					</h3>
				</div>
				<div className="card-item-wrapper">
					{CardData.map((item) => (
						<CardItem
							image={item.image}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardContainer;
