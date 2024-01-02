import React from "react";
import top from "../../images/top.svg";
import bottom from "../../images/bottom.svg";
import mid from "../../images/mid.svg";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_text">
        <h1>A better way to save</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatibus harum, beatae, voluptatem est aut molestiae architecto
          alias commodi consequatur vel nihil repellat, sequi fugit odio nostrum
          cum saepe tempora.
        </p>
        <button>Get Started</button>
      </div>
      <div className="hero_img">
        <img src={top} alt="" className="top" />
        <div className="middle_div">
          <img src={mid} alt="" className="mid" />
          <div className="middle_div_cover middle_left"></div>
        </div>
        <img src={bottom} alt="" className="bottom" />
      </div>
    </div>
  );
};

export default Hero;
