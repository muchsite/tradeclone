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

const Test = () => {
  const data = [
    {
      img: test1,
      text: "Fast, reliable, and transparent service. They made financing simple and stress-free!",
      text2: "See More!",
      name: "Sarah Thompson",
      position: "Chief Financial Officer",
    },
    {
      img: test2,
      text: "Excellent customer support and flexible payment options. Highly recommend!",
      text2: "See More!",
      name: "Emily Martinez",
      position: "Marketing Director",
    },
    {
      img: test3,
      text: "Quick approval process and competitive rates. Our go-to financing partner!",
      text2: "See More!",
      name: "James Anderson",
      position: "Chief Executive Officer",
    },
    {
      img: test4,
      text: "Professional and efficient. They made our business expansion possible.",
      text2: "See More!",
      name: "Jessica Lee",
      position: "Chief Marketing Officer",
    },
    {
      img: test5,
      text: "Outstanding service! They tailored the perfect financing plan for us.",
      text2: "See More!",
      name: "Michael Johnson",
      position: "Chief Investment Officer",
    },
    {
      img: test6,
      text: "Hassle-free experience with great communication. Truly trustworthy and efficient.",
      text2: "See More!",
      name: "David Patel",
      position: "Chief Technology Officer",
    },
  ];
  var settings = {
    dots: data.length > 6,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
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
                >
                  <img src={item.img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="test_body">
          <div className="test_body_text">
            <h4>"{data[testInfo].text}"</h4>
            <p>{data[testInfo].text2}</p>
          </div>
          <div className="test_body_info">
            <img src={data[testInfo].img} alt="" />
            <h3>{data[testInfo].name}</h3>
            <p>{data[testInfo].position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
