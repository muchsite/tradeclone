import React, { useState } from "react";
import "./contact.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../images/logo.svg";
import axios from "axios";
import { BASE } from "../../App";
const Contact = () => {
  const [full_name, setfull_name] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const states = { full_name, email, message };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BASE + "/contact", states);
    } catch (error) {
      console.log(error);
    }
  };
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
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="contact_div">
              <input
                type="text"
                placeholder="Enter your name"
                value={full_name}
                onChange={(e) => setfull_name(e.currentTarget.value)}
              />
            </div>
            <div className="contact_div">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.currentTarget.value)}
              />
            </div>
            <div className="contact_div">
              <textarea
                name=""
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
