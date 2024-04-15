import React, { useState } from "react";
import "./blogs.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE } from "../../App";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

const Blogs = ({ data }) => {
  const [hover, setHover] = useState(-1);
  const [click, setClik] = useState(-1);
  const handleClick = (index) => {
    if (index == click) {
      setClik(-1);
    } else {
      setClik(index);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="blogs_container">
      <h2>Our Blogs</h2>
      <div className="blogs_content slider-container">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div
                className={`blog ${hover == index && "top_0"}`}
                key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
              >
                <img src={BASE + item.image} alt="Blog" />
                <h3>{item.title}</h3>
                <div className={`blog_hover ${hover == index && "top_0"}`}>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                  <button>Learn More</button>
                </div>
                <div className={`blog_click ${click == index && "top_0"}`}>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                  <button>Learn More</button>
                </div>
                <div className="blog_click_container">
                  <AiFillPlusSquare
                    onClick={() => handleClick(index)}
                    className={`blog_icon ${
                      click == index ? "blog_icon_0" : ""
                    }`}
                  />
                  <AiFillMinusSquare
                    className={`blog_icon ${
                      click !== index ? "blog_icon_0" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
