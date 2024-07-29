import React from "react";
import "./footer.scss";
import logo from "../../images/footerlogo.svg";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer_links">
        <Link to="/">Home</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link>Products</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/refunds">Refund Policy</Link>
        <Link to="/disclaimer">Disclaimer </Link>
        <Link to="/cookies">Cookies Policy</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className="footer_media">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagramSquare />
      </div>
    </footer>
  );
};

export default Footer;
