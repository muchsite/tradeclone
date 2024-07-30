import React from "react";
import logo from "../../images/logo.svg";
import "./cp.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="cp_container">
      <div className="cp_back_top">
        <div className="cp_left_title">
          <h1>Conect With Our Team Of Experts</h1>
          <p>
            Contact with our team of dedicated experts today to secure
            competitive financing rates and gain a comprehensive understanding
            of our services
          </p>
        </div>
      </div>
      <div className="cp_bottom">
        <div className="cp_left">
          <div className="cp_left_info">
            <p>
              Give us a call or fill out our contact form, and one of our
              TradeFlair team members will be in touch
            </p>
            <ul>
              <div className="cp_info_icons">
                <RiHome2Line color="#356bb3" />
                <p>
                  <span>Office timing:</span> 9:00 am - 7:00 pm (Monday -
                  Saturday)
                </p>
              </div>
              <div className="cp_info_icons">
                <MdOutlineLocalPhone color="#356bb3" />
                <p>
                  <span>Phone Number:</span> 999-999-999
                </p>
              </div>
              <li className="email_list">
                <div className="cp_info_icons">
                  <MdOutlineMailOutline color="#356bb3" />
                  <span>Email:</span>
                </div>
                <div>
                  <p>sales@tradeflaircorporate.com</p>
                  <p>support@tradeflaircorporate.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cp_right">
          <div className="cp_form_title">
            <h2>Contact Us! </h2>
            <img src={logo} alt="" />
          </div>
          <form action="">
            <div className="cp_input_div">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="cp_input_div">
              <label htmlFor="">Email address</label>
              <input type="text" placeholder="Email address" />
            </div>
            <div className="cp_input_div">
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="cp_radio">
              <h3>Interested In:</h3>
              <div className="cp_radio_input">
                <input type="radio"></input>
                <p>Import Finance</p>
              </div>
              <div className="cp_radio_input">
                <input type="radio"></input>
                <p>Export Finance</p>
              </div>
              <div className="cp_radio_input">
                <input type="radio"></input>
                <p>Domestic Finance</p>
              </div>
            </div>
            <textarea
              name=""
              placeholder="Leave your message here"
              id=""
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
