import "./carditems.css";
import { Link } from "react-router-dom";
import Booking from "../BookingComponent";
// import Pic1 from "../../Assets/CardComponentImages/pic1.jpg";
// import Pic2 from "../../Assets/CardComponentImages/pic2.JPEG";
// import Pic3 from "../../Assets/CardComponentImages/pic3.JPG";

const CardItem = (props) => {
  return (
    <div className="item-container">
      <img height={200} className="images" src={props.image} />
      <div className="text-wrapper">
        <p className="visit-title">{props.title}</p>
        <div className="description-wrapper">
          <p className="description">{props.description}</p>
        </div>
        <div className="btns-wrapper">
          <div className="left-btn">Läs mer</div>
          <div className="right-btn">
            <Link to="/booking">Boka</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
