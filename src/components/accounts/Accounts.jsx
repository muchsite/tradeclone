import React, { useState } from "react";
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
import t from "../../images/banks/11.png";
import f from "../../images/banks/12.png";
import g from "../../images/banks/13.png";
import h from "../../images/banks/14.png";
import v from "../../images/banks/15.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Accounts = () => {
  const arr = [q, w, t, a, s, d, f, g, z, x, c, v, h, e, r];
  const [left, setLEft] = useState(0);
  const hadleClick = (e) => {
    if (e < 0 && left > 0) {
      setLEft(left - 1);
    }
    if (e > 0) {
      setLEft(left + 1);
    }
  };
  return (
    <div className="acc_container">
      <h2>Serving retirement savers with trusted firms</h2>
      <div className="acc_slider_container">
        <FaAngleLeft
          className="acc_icon acc_left"
          onClick={() => hadleClick(-1)}
        />
        <div className="acc_slider" style={{ left: `-${left * 25}vw` }}>
          {arr.map((item, index) => {
            return <img src={item} id={index} alt="" />;
          })}
        </div>
        <FaAngleRight
          className="acc_icon acc_right"
          onClick={() => hadleClick(1)}
        />
      </div>
    </div>
  );
};

export default Accounts;
