import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  let cardContent = [
    {
      titulo: "Godzilla strikes again!",
      texto:
        "Godzilla is angry. Evacuate the city. Everything is burning down. Mayday! Mayday! Mayday!",
    },
    {
      titulo: "Oh no! Where is my car??",
      texto:
        "I parked my car yesterday morning. I remember blinking seven times. My car is nowhere to be found... I'm confused.",
    },
    {
      titulo: "UFOs in broad daylight... chaos!",
      texto:
        "Remember that alien invasion last year? Well.. it's happening again. Thousands of humans abducted. Aliens refuse to talk.",
    },
    {
      titulo: "50% off in Time Travel 1-day pass!",
      texto:
        "Just for this week! Earth day special: pay 50% less and travel back to better times, breathe fresh air again!",
    }
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="album m-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-4">
            {cardContent.map((item, index) => {
              return (
                <Cards titulo={item.titulo} texto={item.texto} key={index} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
