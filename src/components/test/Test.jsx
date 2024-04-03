import React, { useState } from "react";
import t1 from "../../images/t1.jpg";
import t2 from "../../images/t2.jpg";
import t3 from "../../images/t3.png";
import "./test.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Test = ({ data }) => {
  const arr = data;
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
              key={i}
            >
              <p className="test_message">{item.testimonial}</p>
              <div className="test_top">
                <div className="test_top_info">
                  <h3>{item.name}</h3>
                  <h4>{item.profession}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
