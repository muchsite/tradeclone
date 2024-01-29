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
import globe from "../../images/globe.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { GrDocumentTransfer } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa6";
import { BiSolidUserAccount } from "react-icons/bi";
const Accounts = () => {
  const arr = [q, w, t, a, s, d, f, g, z, x, c, v, h, e, r];
  const [left, setLEft] = useState(0);
  const hadleClick = (e) => {
    if (e < 0 && left > 0) {
      setLEft(left - 1);
    }
    if (e > 0 && left < 11) {
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
        <div className="acc_slider" style={{ left: `-${left * 23.75}vw` }}>
          {arr.map((item, index) => {
            return <img src={item} id={index} alt="" />;
          })}
        </div>
        <FaAngleRight
          className="acc_icon acc_right"
          onClick={() => hadleClick(1)}
        />
      </div>
      <div className="acc_dark">
        <div className="acc_dark_info">
          <h3>
            This figures speaks about our leadership. <br /> Take the advantage
            of our vast experience.
          </h3>
          <div className="acc_dark_numbers">
            <div className="acc_number border_right">
              <h4>5000+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="acc_number border_right">
              <h4>200+</h4>
              <p>Ongoing Projects</p>
            </div>
            <div className="acc_number border_right">
              <h4>700+</h4>
              <p>Retuning Clients</p>
            </div>
            <div className="acc_number ">
              <h4>10+</h4>
              <p>Awards</p>
            </div>
          </div>
        </div>
        <div className="acc_dark_globe">
          <img src={globe} alt="" className="globe" />
          {/* <div className="dark_car">
            <div className="dark_car_item dark_car_item_1">
              <FaMoneyBillWave />
              <p>Title One1</p>
            </div>
            <div className="dark_car_item dark_car_item_2">
              <RiMoneyDollarBoxFill />
              <p>Title One2</p>
            </div>
            <div className="dark_car_item dark_car_item_3">
              <GrDocumentTransfer />
              <p>Title One3</p>
            </div>
            <div className="dark_car_item dark_car_item_4">
              <FaCalculator />
              <p>Title One4</p>
            </div>
            <div className="dark_car_item dark_car_item_5">
              <BiSolidUserAccount />
              <p>Title One5</p>
            </div>
            <div className="dark_car_item dark_car_item_6">
              <GrDocumentTransfer />
              <p>Title One6</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
