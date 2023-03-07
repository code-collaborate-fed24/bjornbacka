import "./carditems.css";
import Pic1 from "../../Assets/CardComponentImages/pic1.jpg";
import Pic2 from "../../Assets/CardComponentImages/pic2.JPEG";
import Pic3 from "../../Assets/CardComponentImages/pic3.JPG";

const CardItem = (props) => {
  return (
    <div className="item-container">
      <img className="img1" src={Pic1} />
      <div className="text-wrapper">
        <p className="visit-title">{props.title}</p>
        <div className="description-wrapper">
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
