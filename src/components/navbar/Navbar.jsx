import React from "react";
import "./navbar.scss";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_footer">
        <div className="nav_icons">
          <FaFacebookSquare color="#fff" />
          <FaLinkedin color="#fff" />
          <FaInstagramSquare color="#fff" />
        </div>
        <div className="nav_numbers">
          <div className="nav_number_container">
            <FaPhoneAlt color="#fff" />
            <p>777-777-777</p>
          </div>
          <div className="nav_number_container">
            <MdEmail color="#fff" />
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="nav_content">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_links">
          <NavLink
            to="/"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={`${({ isActive }) =>
              isActive ? "active" : ""} nav_link`}
          >
            About
          </NavLink>
        </div>
        <div className="nav_btns">
          {/* <button className="login_btn">Log In</button> */}
          <button className="start_btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
