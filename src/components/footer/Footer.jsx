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
        <Link>Home</Link>
        <Link>Contact</Link>
        <Link>About</Link>
        <Link>Products</Link>
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
