import React, { useState } from "react";
import about from "../../images/about.svg";
import "./about.scss";
const About = () => {
  const [activeAbout, setActiveAbout] = useState(0);

  return (
    <div className="about_container">
      <div className="about_hero">
        <div className="about_text">
          <h3>Global Trade Finance Made Simple</h3>
          <p>
            At TradeFlair, we believe businesses should have seamless access to
            trade finance solutions that empower them to expand globally with
            confidence. We offer services at the lowest interest costs while
            helping clients save on unnecessary bank charges. Our solutions
            simplify complex trade processes, enabling businesses to focus on
            growth.
          </p>
        </div>
        <img src={about} alt="" />
      </div>
      <div className="about_nav">
        <div className="about_nav_top">
          <div
            className={`about_nav_item ${activeAbout === 0 && "active_about"}`}
            onClick={() => setActiveAbout(0)}
          >
            What drives us
          </div>
          <div
            className={`about_nav_item ${activeAbout === 1 && "active_about"}`}
            onClick={() => setActiveAbout(1)}
          >
            Vision
          </div>
          <div
            className={`about_nav_item ${activeAbout === 2 && "active_about"}`}
            onClick={() => setActiveAbout(2)}
          >
            Simplification
          </div>
          <div
            className={`about_nav_item ${activeAbout === 3 && "active_about"}`}
            onClick={() => setActiveAbout(3)}
          >
            Career
          </div>
          <div
            className={`about_nav_item ${activeAbout === 4 && "active_about"}`}
            onClick={() => setActiveAbout(4)}
          >
            Leadship
          </div>
        </div>
        <div className="about_nav_content">
          {activeAbout == 0 && (
            <div className="about_nav_content">
              <img src={about} alt="" />
              <div className=""></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
