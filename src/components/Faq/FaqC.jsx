import React, { useState } from "react";
import "./faqC.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

const FaqC = ({ data }) => {
  const [ind, setInd] = useState(-1);
  const handleClick = (index) => {
    if (ind === index) {
      setInd(-1);
    } else {
      setInd(index);
    }
  };
  return (
    <div className="fc_container">
      <h2>F.A.Q</h2>
      <div className="fc_map">
        {data?.slice(0, 6).map((item, index) => {
          return (
            <div className="fc_single" key={index}>
              <div className="fc_q">
                <div
                  className="fc_icon_container"
                  onClick={() => handleClick(index)}
                >
                  {ind == index ? (
                    <AiOutlineMinus color="#ffffff" />
                  ) : (
                    <AiOutlinePlus color="#ffffff" />
                  )}
                </div>
                <p>{item.question}</p>
              </div>
              <div
                className={`fc_ans_container ${
                  ind === index && "fc_ans_container_open"
                }`}
              >
                <p className="fc_ans">{item.answer}</p>
              </div>
            </div>
          );
        })}
        <Link target="_blanck" className="faq_see" to={"/faq"}>
          See All
        </Link>
      </div>
    </div>
  );
};

export default FaqC;
