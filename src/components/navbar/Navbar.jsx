import React, { useState } from "react";
import "./navbar.scss";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import of from "../../images/of.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const [navHover, setNavHover] = useState(-1);
  const [openHam, setOpaenHam] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const handleIndex = (i) => {
    if (i == 1 && openIndex !== 1) {
      setOpenIndex(1);
    }
    if (i == 1 && openIndex == 1) {
      setOpenIndex(null);
    }
    if (i == 2 && openIndex !== 2) {
      setOpenIndex(2);
    }
    if (i == 2 && openIndex == 2) {
      setOpenIndex(null);
    }
    if (i == 3 && openIndex !== 3) {
      setOpenIndex(3);
    }
    if (i == 3 && openIndex == 3) {
      setOpenIndex(null);
    }
  };
  return (
    <nav className="nav_container">
      <div className="nav_footer">
        <div className="nav_icons">
          <FaFacebookSquare color="#fff" />
          <FaLinkedin color="#fff" />
          <FaInstagramSquare color="#fff" />
        </div>
        <div className="nav_numbers">
          <div className="nav_number_container nav_phone">
            <FaPhoneAlt color="#fff" />
            <p>777-777-777</p>
          </div>
          <div className="nav_number_container ">
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
                <p>Trade Finance</p>
                <IoMdArrowDropdown />
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute nav_link_absolute_first ${
                navHover == 0 && "display_block"
              }`}
            >
              <div className="nav_link_absolute_solutions">
                <h3>SOLUTIONS</h3>
                <ul>
                  <li>Unlock Lowest Trade Finane</li>
                  <li>Intrest Rates</li>
                  <li>Optimazed Funding Solutions</li>
                  <li>Ensure Smooth Financing Operation For Buisnesses</li>
                </ul>
              </div>
              <div className="nav_link_absolute_inter">
                <h3>INTERNATIONAL</h3>
                <div className="ds_flex">
                  <div className="import_finance">
                    <h4>Import Finance</h4>
                    <ul>
                      <li>Buyer's Credit</li>
                      <li>Supplier's Credit</li>
                      <li>RA Financing </li>
                    </ul>
                  </div>
                  <div className="import_finance">
                    <h4>Import Finance</h4>
                    <ul>
                      <li>Export Finance</li>
                      <li>
                        Export Letter Of <br /> Credit Discounting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav_link_absolute_domestic">
                <h3>DOMESTIC</h3>
                <ul>
                  <li>Local Letter Of Credit Bill Discounting</li>
                  <li>Discounting</li>
                </ul>
              </div>
            </div>
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
                <p>Resources</p>
                <IoMdArrowDropdown />
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute nav_link_absolute_second ${
                navHover == 1 && "display_block"
              }`}
            >
              <div className="link_chash">
                <h3>Enhance Cash Flows</h3>
                <p>
                  Discover how to enhance operating cash flows and recuce
                  interest expenses through TradeFlair on global and local trade
                  finance transactions, by establishing tailored proceses and
                  lowest financing rates in the market.
                </p>
              </div>
              <div className="link_publications">
                <h3>Publications</h3>
                <Link to="/blogs">Blogs</Link>
                <Link to="/cases">Case Stdies</Link>
                <p>FAQs</p>
              </div>
              <div className="link_calc">
                <h3>Cost Calculators</h3>
                <Link to="/calculator">Domestic Finance</Link>
                <Link to="/calculator">Import / Export Finance</Link>
              </div>
            </div>
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
                <p>Company</p>
                <IoMdArrowDropdown />
              </NavLink>
            </div>
            <div
              className={`nav_link_absolute nav_link_absolute_third ${
                navHover == 2 && "display_block"
              }`}
            >
              <div className="nav_vision">
                <h3>Our Vision</h3>
                <p>
                  TradeFlair aims to redefine trade finance, offering tailored
                  and local financing solutions to businesses designed with
                  simplicity, and speed and offering the lowest interest rates,
                  transactions some time, and cost and enhance efficiency.
                </p>
              </div>
              <div className="nav_company_second">
                <div className="nav_about">
                  <h3>About</h3>
                  <p>
                    We are revolutionizing Trade finance accessibility. Learn
                    more the TradeFlair
                  </p>
                  <button>Learn More</button>
                </div>
                <div className="nav_career">
                  <h3>Career</h3>
                  <p>
                    Become a partner of a rapidly expanding team of experts and
                    visionaries today.
                  </p>
                  <button>Transform with TradeFlair</button>
                </div>
                <div className="nav_contact">
                  <h3>Contact</h3>
                  <p>Connect with a TradeFlair expert today.</p>
                  <p>Trade@tradeflaircorporate.com</p>
                  <p>+91-9458703128</p>
                  <button>Contact Us</button>
                </div>
              </div>
              <div className="nav_company_third">
                <h3>Where to find us</h3>
                <h4>Sector 3, Nodia</h4>
                <div className="find_image_cont">
                  <img src={of} alt="" />
                  <div>
                    <p>Block G - 31, 1st floor, sectort 3, Nodia</p>
                    <p>PINCODE - 201301</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav_btns">
          <button className="start_btn">Get Started</button>
          <div className="ham_container">
            <GiHamburgerMenu
              className={`ham_icon ${openHam && "openHam"}`}
              onClick={() => setOpaenHam(true)}
            />
            <FaWindowClose
              className={`ham_icon ${!openHam && "openHam"}`}
              onClick={() => setOpaenHam(false)}
            />
          </div>
        </div>
      </div>
      <div className={`ham_content_container ${openHam && "top_ham"}`}>
        <div className="ham_nav_link">
          <div className="han_nav_link_inner">
            <div className="ham_nav_link_text_container">
              <div className="ham_nav_link_text" onClick={() => handleIndex(1)}>
                <p>Trade Finance</p>
                <IoIosArrowDropdownCircle />
              </div>
              <div
                className={`ham_wraper ${openIndex == 1 && "ham_wraper_open"}`}
              >
                <div className="ham_expand">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="ham_nav_link_text_container">
              <div className="ham_nav_link_text" onClick={() => handleIndex(2)}>
                <p>Resource</p>
                <IoIosArrowDropdownCircle />
              </div>
              <div
                className={`ham_wraper ${openIndex == 2 && "ham_wraper_open"}`}
              >
                <div className="ham_expand">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                </div>
              </div>
            </div>
            <div className="ham_nav_link_text_container">
              <div className="ham_nav_link_text" onClick={() => handleIndex(3)}>
                <p>Company</p>
                <IoIosArrowDropdownCircle />
              </div>
              <div
                className={`ham_wraper ${openIndex == 3 && "ham_wraper_open"}`}
              >
                <div className="ham_expand">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis, consequatur laborum dolore, voluptatibus alias,
                    explicabo quod quasi molestiae non praesentium consequuntur!
                    Deserunt voluptatibus vero quisquam quibusdam, corrupti a
                    error dolorum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
