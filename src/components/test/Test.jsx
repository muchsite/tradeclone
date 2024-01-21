import React from "react";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.png";
import "./test.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Test = () => {
  const arr = [
    {
      name: "John Dow",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t1,
      profession: "Teacher",
    },
    {
      name: "Wade Aidan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t2,
      profession: "Teacher",
    },
    {
      name: "Jorge Carlos",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t3,
      profession: "Teacher",
    },
    // {
    //   name: "Brian Shane",
    //   message:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
    //   image: t1,
    //   profession: "Teacher",
    // },
  ];
  return (
    <div className="test_container">
      <h2>How Our Clients Rate Us</h2>
      <div className="test_contetnt">
        <AiOutlineLeft className="test_arrow test_left" />
        <AiOutlineRight className="test_arrow test_right" />
        {arr.map((item, i) => {
          return (
            <div className="test_item" id={i}>
              <div className="test_top">
                <img src={item.image} alt="" />
                <div className="test_top_info">
                  <h3>{item.name}</h3>
                  <h4>{item.profession}</h4>
                </div>
              </div>
              <div>
                <p className="test_message">{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
