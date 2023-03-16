import React from "react";
import "./testimonials.css";
import Dropdown from "../Dropdown";

const Testimonial = () => {
  return (
    <div className="Testimonials-container">
      <div className="One">
        <h3>Testimonials</h3>
        <p>
          The Leap har gett mig möjligheten att kunna vara sårbar, öppna upp och
          göra genuina skiften inombords som har stor betydelse för mitt
          liv.Gett mig en möjlighet att se på händelser, upplevelser i mitt liv
          som varit jobbiga , smärtsamma och skrämmande men också få möjlighet
          att uttrycka och växa i min kraft, lycka och glädje vilket är det jag
          längtar efter.Upplevelserna och insikterna har inneburit stora
          skillnader generellt och även i min yrkesroll – kan t.ex sitta i ett
          möte och om det uppstår utmaningar så vet jag bättre hur jag kan
          relatera till dom. Om vi skall utföra uppgifter så kan jag lättare
          samla mig och generera fokus.the Leap har verkligen hjälpt mig på så
          många plan…
        </p>
        <h4>Gustav Widström - egen företagare</h4>
        <p>
          "Björnbacka är en oas i Sverige, en plats där njutningen av den
          estetisk vackra naturen kombineras med noga genomtänkt arkitektur och
          inredning vars utformning skapar en trygg, tillitsfull atmosfär. Det
          är i sådana miljöer vi som människor kan ta till oss den information
          vi behöver för att kunna utvecklas på riktigt och våga ta kliv som gör
          oss genuint bättre för oss själva och för andra. De kurser och
          retreats Björnbacka erbjuder håller en oerhört hög nivå, och det märks
          tydligt vilket engagemang och genuin vilja ägarna lägger ned i varje
          möte för att samtliga deltagare skall kunna komma så långt som möjligt
          i sin utveckling"
        </p>
        <h4>Sunniva Fallan Röd</h4>
        <h5>VD Sturebadet / tidigare VD Yasuragi</h5>
      </div>
      <div className="Two">
        <img src="./images/leadershipsimage.png" alt="leadershipsimage" />
        <Dropdown />
      </div>
    </div>
  );
};

export default Testimonial;
