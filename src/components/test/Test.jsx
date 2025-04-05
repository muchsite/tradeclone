import React, { useState } from "react";
import test1 from "../../images/test/test1.svg";
import test2 from "../../images/test/test2.svg";
import test3 from "../../images/test/test2.svg";
import test4 from "../../images/test/test4.svg";
import test5 from "../../images/test/test5.svg";
import test6 from "../../images/test/test6.svg";

import "./test.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = ({ data }) => {
  var settings = {
    dots: data.length > 6,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
          beforeChange: (current, next) => {
            setHover(next);
            setTestInfo(next);
          },
        },
      },
    ],
  };

  const [testInfo, setTestInfo] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="test">
      <div className="test_container">
        <div className={`test_head `}>
          <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div
                  className={`test_image_container ${
                    testInfo === index && "active_testimonial"
                  } ${hover === index && "active_testimonial"}`}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(-1)}
                  onClick={() => setTestInfo(index)}
                  key={index}
                >
                  <img src={item.logo} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="test_body">
          <div className="test_body_text">
            <h4>"{data[testInfo].testimonial}"</h4>
            {/* <p>{data[testInfo].text2}</p> */}
          </div>
          <div className="test_body_info">
            <img src={data[testInfo].logo} alt="" />
            <h3>{data[testInfo].name}</h3>
            <p>{data[testInfo].profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
