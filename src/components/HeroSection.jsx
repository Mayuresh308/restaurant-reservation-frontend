import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Reserve</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./icecream.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Relish</h1>
                {/* <h1 className="title dishes_title">Dishes</h1> */}
              </div>
              {/* <img className="logo" src="logo.png" alt="logo" /> */}
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="shake2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Repeat</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
