import React, { useState } from "react";
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
  const [navHover, setNavHover] = useState(-1);
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
          <div
            className={`nav_link_relative ${
              navHover === 0 && "nav_link_relative_active"
            }`}
            onMouseEnter={() => setNavHover(0)}
            onMouseLeave={() => setNavHover(-1)}
          >
            <div className="nav_link_overflow">
              <NavLink
                to="/"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} nav_link ${
                  navHover == 0 && "hover_link"
                }`}
              >
                Home
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute ${
                navHover == 0 && "display_block"
              }`}
            ></div>
          </div>
          <div
            className={`nav_link_relative ${
              navHover === 1 && "nav_link_relative_active"
            } `}
            onMouseEnter={() => setNavHover(1)}
            onMouseLeave={() => setNavHover(-1)}
          >
            <div className="nav_link_overflow">
              <NavLink
                to="/contact"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} nav_link ${
                  navHover == 1 && "hover_link"
                }`}
              >
                Contact
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute ${
                navHover == 1 && "display_block"
              }`}
            ></div>
          </div>
          <div
            className={`nav_link_relative ${
              navHover === 2 && "nav_link_relative_active"
            }`}
            onMouseEnter={() => setNavHover(2)}
            onMouseLeave={() => setNavHover(-1)}
          >
            <div className="nav_link_overflow">
              <NavLink
                to="/about"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} nav_link ${
                  navHover == 2 && "hover_link"
                }`}
              >
                About
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute ${
                navHover == 2 && "display_block"
              }`}
            ></div>
          </div>
        </div>
        <div className="nav_btns">
          <button className="start_btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
