import React, { useEffect, useRef, useState } from "react";
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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Accounts = ({ data }) => {
  const arr = [q, w, a, s, f, g, z, x, e, r];
  const arr2 = [c, d, g1, g12, g13, g14, g15, g16, g17, g18, g19, g2, g3, g4];
  const globeRef = useRef(null);
  console.log(data);
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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="acc_container">
      <div className="acc_slider_container">
        <h2>INTERNATIONAL PARTNERS</h2>

        <Carousel
          swipeable={true} // Changed to true to allow swiping
          draggable={true} // Changed to true to allow dragging
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Adjusted speed for better visibility
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {arr.map((item, index) => (
            <img src={item} id={index} alt="" key={index} />
          ))}
        </Carousel>
      </div>
      <div className="acc_slider_container">
        <h2>INDIAN PARTNERS</h2>
        <Carousel
          swipeable={true} // Changed to true to allow swiping
          draggable={true} // Changed to true to allow dragging
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Adjusted speed for better visibility
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          rtl={true}
        >
          {arr2.map((item, index) => (
            <img src={item} id={index} alt="" key={index} />
          ))}
        </Carousel>
      </div>
      <div className="acc_dark">
        <div className="acc_dark_info">
          <h3>
            This figures speaks about our leadership. <br /> Take the advantage
            of our vast experience.
          </h3>
          <div className="acc_dark_numbers">
            <div className="acc_number border_right">
              <h4>{data.field_text_1}</h4>
              <p>{data.number_text_1}+</p>
            </div>
            <div className="acc_number border_right">
              <h4>{data.field_text_2}</h4>
              <p>{data.number_text_2}+</p>
            </div>
            <div className="acc_number border_right">
              <h4>{data.field_text_3}</h4>
              <p>{data.number_text_3}+</p>
            </div>
            <div className="acc_number ">
              <h4>{data.field_text_4}</h4>
              <p>{data.number_text_4}+</p>
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
