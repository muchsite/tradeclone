import React, { useState } from "react";
import "./contact.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../images/logo.svg";
const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="contact_container">
      <div className="contact_back">
        <div className="contact_left">
          <img src={logo} alt="" />
          <div className="contact_info">
            <div className="contact_info_div">
              <FaPhoneSquareAlt className="contact_icon" />
              <p>777-777-777</p>
            </div>
            <div className="contact_info_div">
              <IoMail className="contact_icon" />
              <p>example@gmail.com</p>
            </div>
            <div className="contact_info_div">
              <FaLocationDot className="contact_icon" />
              <p>Block G - 31, 1st floor, sectort 3, Nodia PINCODE - 201301</p>
            </div>
          </div>
        </div>
        <div className="contact_right">
          <div className="contact_title">
            <h3>Get in Touch</h3>
            <p>Any question or remarks? Let us know!</p>
          </div>
          <form className="contact_form">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <textarea name="" placeholder="Type your message here"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
