import React, { useEffect, useRef } from "react";
import "./acc.scss";
import q from "../../images/banks/1.png";
import w from "../../images/banks/2.png";
import e from "../../images/banks/3.png";
import a from "../../images/banks/4.png";
import s from "../../images/banks/5.png";
import d from "../../images/banks/6.png";
import z from "../../images/banks/7.png";
import x from "../../images/banks/8.png";
import c from "../../images/banks/9.png";
import r from "../../images/banks/10.png";
import f from "../../images/banks/12.png";
import g from "../../images/banks/13.png";

import g1 from "../../images/banks/21.png";
import g12 from "../../images/banks/22.png";
import g13 from "../../images/banks/23.png";
import g14 from "../../images/banks/24.png";
import g15 from "../../images/banks/25.png";
import g16 from "../../images/banks/26.png";
import g17 from "../../images/banks/27.png";
import g18 from "../../images/banks/28.png";
import g19 from "../../images/banks/29.png";
import g2 from "../../images/banks/30.png";
import g3 from "../../images/banks/31.png";
import g4 from "../../images/banks/32.png";
import Globe from "react-globe.gl";
import ea from "../../images/world.svg";

import { motion } from "framer-motion";
const Accounts = ({ data }) => {
  const arr = [q, w, a, s, f, g, z, x, e, r];
  const arr2 = [c, d, g1, g12, g13, g14, g15, g16, g17, g18, g19, g2, g3, g4];
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate =
        globeRef.current.controls().autoRotateSpeed *= -1;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().autoRotateSpeed = -3;
    }
  }, []);
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 1.5) * 180,
    startLng: (Math.random() - 1.5) * 360,
    endLat: (Math.random() - 1.5) * 180,
    endLng: (Math.random() - 1.5) * 360,
    color: [
      ["#0f0447", "#120b24", "#0565ff", "#100038"][
        Math.round(Math.random() * 3)
      ],
      ["#0f0447", "#120b24", "#0565ff", "#100038"][
        Math.round(Math.random() * 3)
      ],
    ],
  }));

  const viewportWidth = window.innerWidth;
  return (
    <div className="acc_container">
      <div className="acc_slider_container">
        <h2>INTERNATIONAL PARTNERS</h2>
        <div className="carousel-container">
          <motion.div
            className="carousel-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 100, repeat: Infinity }}
          >
            {[...arr, ...arr, ...arr, ...arr, ...arr].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="carousel"
                className="carousel-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="acc_slider_container">
        <h2>INDIAN PARTNERS</h2>
        <div className="carousel-container">
          <motion.div
            className="carousel-track"
            animate={{ x: ["0%", "50%"] }}
            transition={{ ease: "linear", duration: 105, repeat: Infinity }}
          >
            {[...arr2, ...arr2, ...arr2, ...arr2, ...arr2].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="carousel"
                className="carousel-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="acc_dark">
        <div className="acc_dark_info">
          <h3>
            Our numbers highlight our leadership's expertise. Maximize the
            benefits of our seasoned experience, enriched by a combined
            expertise of over 30 years.
          </h3>
          <div className="acc_dark_numbers">
            <div className="acc_number border_right">
              <h4>{data.field_text_1}</h4>
              <p>{data.number_text_1}+</p>
            </div>
            <div className="acc_number border_right border_right_none">
              <h4>{data.field_text_2}</h4>
              <p>{data.number_text_2} </p>
            </div>
            <div className="acc_number border_right">
              <h4>{data.field_text_3}</h4>
              <p>{data.number_text_3} </p>
            </div>
            <div className="acc_number ">
              <h4>{data.field_text_4}</h4>
              <p> {data.number_text_4} </p>
            </div>
          </div>
        </div>
        <div className="acc_dark_globe">
          <Globe
            ref={globeRef}
            globeImageUrl={ea}
            backgroundColor="rgba(0,0,0,0)"
            polygonSideColor={() => "rgba(0, 0, 0, 0)"}
            width={viewportWidth < 600 ? 250 : 350}
            height={viewportWidth < 600 ? 250 : 350}
            arcsData={arcsData}
            arcColor={"color"}
            arcDashLength={() => 0.5}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            onZoom={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
