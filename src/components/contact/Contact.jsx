import React, { useEffect, useState } from "react";
import "./contact.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../images/logo.svg";
import axios from "axios";
import { BASE } from "../../App";
import LoadingForm from "../loading/LoadingForm";
import y from "../../images/y.svg";
const Contact = ({ myElementRef }) => {
  const [full_name, setfull_name] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setError] = useState({});
  const states = { full_name, email, message };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError({});
    try {
      const res = await axios.post(BASE + "/contact/", states);
      setSending(false);
      setemail("");
      setMessage("");
      setfull_name("");
      setSent(true);
    } catch (error) {
      setSending(false);
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="contact_container" ref={myElementRef}>
      <div className="contact_back">
        <div className="contact_left">
          <div className="contact_title">
            <h3>Get in Touch</h3>
            <p>Any question or remarks? Let us know!</p>
          </div>
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
          <div className="contact_logo">
            <img src={logo} alt="" />
            <h3>Contact Us!</h3>
          </div>
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="contact_div">
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={full_name}
                onChange={(e) => setfull_name(e.currentTarget.value)}
              />
            </div>
            <div className={`contact_div ${"email" in err && "outline_red"}`}>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setemail(e.currentTarget.value)}
              />
              {"email" in err && <p>Please Enter Valid Email!</p>}
            </div>
            <div className="contact_div">
              <textarea
                name=""
                placeholder="Type your message here"
                value={message}
                required
                onChange={(e) => setMessage(e.currentTarget.value)}
              ></textarea>
            </div>
            <div className="form_btn_container">
              <button>Submit</button>
              {sending && <LoadingForm />}
              {sent && <img src={y} alt="" />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
