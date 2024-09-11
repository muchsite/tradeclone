import React, { useState } from "react";
import "./pop.scss";
import axios from "axios";
import { BASE } from "../../App";
import LoadingForm from "../loading/LoadingForm";
import y from "../../images/y.svg";
import close from "../../images/close.svg";
import logo from "../../images/logo.svg";
import LoadingSmall from "../loading/LoadingSmall";
const Pop = ({ setOpenC, openC }) => {
  const [full_name, setfull_name] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setError] = useState({});
  const states = { full_name, email, message, number };
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
      setNumber("");
      setSent(true);
    } catch (error) {
      setSending(false);
      setError(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className={`pop_container ${openC && "top_z"}`}>
      {openC && (
        <div className="pop_back" onClick={() => setOpenC(false)}></div>
      )}
      <div className={`pop_form ${openC && "top_0"}`}>
        <div className="pop_close" onClick={() => setOpenC(false)}>
          <img src={close} alt="" />
        </div>
        <div className={`contact_logo `}>
          <img src={logo} alt="" />
          <h3>Contact Us!</h3>
        </div>
        <form className={`contact_form `} onSubmit={handleSubmit}>
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
            <input
              type="text"
              placeholder="Enter your number"
              required
              value={number}
              onChange={(e) => setNumber(e.currentTarget.value)}
            />
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
            {sending && <LoadingSmall />}
            {sent && <img src={y} alt="" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pop;
