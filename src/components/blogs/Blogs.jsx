import React, { useState } from "react";
import "./blogs.scss";
import b1 from "../../images/blog1.jpeg";
import b2 from "../../images/blog2.jpeg";
import b3 from "../../images/blog3.jpg";

import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { BASE } from "../../App";
const Blogs = ({ data }) => {
  console.log(data);
  const [hover, setHover] = useState(-1);
  const [click, setClik] = useState(-1);
  const handleClick = (index) => {
    if (index == click) {
      setClik(-1);
    } else {
      setClik(index);
    }
  };

  return (
    <div className="blogs_container">
      <h2>Our Blogs</h2>
      <div className="blogs_content">
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
                  className={`blog_icon ${click == index ? "blog_icon_0" : ""}`}
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
      </div>
    </div>
  );
};

export default Blogs;
