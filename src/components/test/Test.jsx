import React, { useState } from "react";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.png";
import "./test.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Test = () => {
  const arr = [
    {
      name: "John Dow1",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t1,
      profession: "Teacher",
    },
    {
      name: "Wade Aidan2",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t2,
      profession: "Teacher",
    },
    {
      name: "Jorge Carlos3",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t3,
      profession: "Teacher",
    },
    {
      name: "Brian Shane4",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t1,
      profession: "Teacher",
    },
    {
      name: "Brian Shane5",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t1,
      profession: "Teacher",
    },
    {
      name: "Brian Shane7",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sit? Adipisci maiores dolores officia minima quos eligendi sapiente fuga nostrum omnis, voluptate illum doloremque quo sed, a sint quae. Consectetur.",
      image: t1,
      profession: "Teacher",
    },
  ];
  const [ind, setInd] = useState(0);
  const handleClick = (arg) => {
    if (arg < 0) {
      if (ind == 0) {
        setInd(3);
      } else {
        setInd(ind - 1);
      }
    }
    if (arg > 0) {
      if (ind == 3) {
        setInd(0);
      } else {
        setInd(ind + 1);
      }
    }
  };
  return (
    <div className="test_container">
      <h2>How Our Clients Rate Us</h2>
      <div className="test_contetnt">
        <AiOutlineLeft
          className="test_arrow test_left"
          onClick={() => handleClick(-1)}
        />
        <AiOutlineRight
          className="test_arrow test_right"
          onClick={() => handleClick(1)}
        />
        {arr.map((item, i) => {
          return (
            <div
              className={`test_item ${
                i == ind
                  ? "firstT"
                  : i == ind + 1
                  ? "secondT"
                  : i == ind + 2
                  ? "thirdT"
                  : i < ind
                  ? "prevT"
                  : "nextT"
              }`}
              id={i}
            >
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
