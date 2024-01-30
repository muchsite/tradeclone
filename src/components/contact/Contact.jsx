import React, { useState } from "react";
import "./contact.scss";
import { FaMessage } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import logo from "../../images/footerlogo.svg";
const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="contact_container">
      <div className={`contact_form_container ${open && "contact_diplay"}`}>
        <div className="contact_form_head">
          <img src={logo} alt="" />
          <p>Contact Us!</p>
        </div>
        <form action="">
          <div className="contact_input_container">
            <div className="contact_input">
              <label htmlFor="">Name:</label>
              <input type="text" />
            </div>
            <div className="contact_input">
              <label htmlFor="">Emial:</label>
              <input type="text" />
            </div>
            <div className="contact_input">
              <label htmlFor="">Message:</label>
              <textarea type="text" />
            </div>
          </div>
          <button>Send</button>
        </form>
      </div>
      <div className="message_icon_container ">
        <FaMessage
          className={`message_icon ${open && "close_message"}`}
          onClick={() => setOpen(true)}
        />
        <FaWindowClose
          className={`message_icon ${!open && "close_message"}`}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default Contact;
