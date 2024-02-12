import React, { useState } from "react";
import "./blogs.scss";
import b1 from "../../images/blog1.jpeg";
import b2 from "../../images/blog2.jpeg";
import b3 from "../../images/blog3.jpg";
const Blogs = () => {
  const [hover, setHover] = useState(-1);
  const arr = [
    {
      img: b1,
      title: "blog 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: b2,
      title: "blog 2",
      desc: "Sit omnis ducimus mollitia tempore debitis.",
    },
    {
      img: b3,
      title: "blog 3",
      desc: "libero ipsa incidunt laudantium beatae, veritatis placeat rerum rem expedita minima veniam.",
    },
  ];
  console.log(hover);
  return (
    <div className="blogs_container">
      <h2>Our Blogs</h2>
      <div className="blogs_content">
        {arr.map((item, index) => {
          return (
            <div
              className={`blog ${hover == index && "top_0"}`}
              key={index}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
            >
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <div className={`blog_hover ${hover == index && "top_0"}`}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button>Learn More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
