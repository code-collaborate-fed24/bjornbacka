import React from "react";
import "./testimonials.css";

const Testimonial = () => {
  return (
    <div className="Testimonials-container">
      <div className="One">
        <h2>Testimonials</h2>
        <p>
          "The Leap har gett mig möjligheten att kunna vara sårbar, öppna upp
          och göra genuina skiften inombords som har stor betydelse för mitt
          liv. Gett mig en möjlighet att se på händelser, upplevelser i mitt liv
          som varit jobbiga, smärtsamma och skrämmande men också få möjlighet
          att uttrycka och växa i min kraft, lycka och glädje vilket är det jag
          längtar efter. Upplevelserna och insikterna har inneburit stora
          skillnader generellt och även i min yrkesroll."
        </p>
        <p>
          <strong>Gustav Widström - Egen företagare</strong>
        </p>
      </div>
      <div className="Two">
        <img src="./images/leadershipsimage.png" alt="leadershipsimage" />
        <h1>
          <u>Leadership Labs</u>
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
