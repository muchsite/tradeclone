import React from "react";
import "./hero.scss";
import landingPhoto from "../../images/landingPhoto.jpg";

const Hero = ({ setOpenC, openC }) => {
  return (
    <>
      <div className="hero_container">
        <div className="hero_text">
          <h3>Welcome to TradeFlair</h3>
          <h1>Financing Trade Made Simple</h1>
          <p>
            Unlock the lowest rates for Import/Export Finance and Local LC
            Discounting, offering fast, personalized solutions tailored to your
            financial needs. Get quotes from more than 250+ banks worldwide.
          </p>
          <button onClick={() => setOpenC(true)}>Get Started</button>
        </div>
        <div className="landing_hero_image">
          <img src={landingPhoto} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
