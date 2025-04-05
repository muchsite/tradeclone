import React, { useEffect, useState } from "react";
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
import of from "../../images/city.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Pop from "../pop/Pop";
import axios from "axios";
import { BASE } from "../../App";

const Navbar = ({ setOpenC, openC, setCalc }) => {
  const [navHover, setNavHover] = useState(-1);
  const [openHam, setOpaenHam] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const handleIndex = (i) => {
    if (i === 1 && openIndex !== 1) {
      setOpenIndex(1);
    }
    if (i === 1 && openIndex === 1) {
      setOpenIndex(null);
    }
    if (i === 2 && openIndex !== 2) {
      setOpenIndex(2);
    }
    if (i === 2 && openIndex === 2) {
      setOpenIndex(null);
    }
    if (i === 3 && openIndex !== 3) {
      setOpenIndex(3);
    }
    if (i === 3 && openIndex === 3) {
      setOpenIndex(null);
    }
  };
  const [tr, setTr] = useState("");
  const [tr1, setTr1] = useState("");
  const [tr2, setTr2] = useState("");
  const [importLink, setImport] = useState([]);
  const [exportLink, setExport] = useState([]);
  const [domesticLink, setDomestic] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(BASE + "/navbar/");
        const p = res.data.data.navbar;
        setTr(p.trade_finance);
        setTr1(p.resource);
        setTr2(p.company);
        const links = res.data.data.product_navbar;
        setImport([]);
        setExport([]);
        setDomestic([]);
        for (let i = 0; i < links.length; i++) {
          if (links[i].category.sub_category === "Import Finance") {
            setImport((prev) => [...prev, links[i]]);
          }
          if (links[i].category.sub_category === "Export Finance") {
            setExport((prev) => [...prev, links[i]]);
          }
          if (links[i].category.sub_category === "Domestic Finance") {
            setDomestic((prev) => [...prev, links[i]]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Pop setOpenC={setOpenC} openC={openC} />
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
              <p>+91 9810911531</p>
            </div>
            <div className="nav_number_container ">
              <MdEmail color="#fff" />
              <p>sales@tradeflaircorporate.com</p>
            </div>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
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
                    navHover === 0 && "hover_link"
                  }`}
                >
                  <p>Trade Finance</p>
                  <IoMdArrowDropdown />
                </NavLink>
              </div>
              <div
                className={`nav_link_absolute nav_link_absolute_first ${
                  navHover === 0 && "display_block"
                }`}
              >
                <div className="nav_link_absolute_solutions">
                  <h3>SOLUTIONS</h3>
                  {tr && <p className="unlock_div">{tr}</p>}
                </div>
                <div className="nav_link_absolute_inter">
                  <h3>INTERNATIONAL</h3>
                  <div className="ds_flex">
                    <div className="import_finance">
                      <h4>Import Finance</h4>
                      <ul>
                        {importLink.map((item, i) => {
                          return (
                            <Link key={item.id} to={`/product/${item.id}`}>
                              {item.title}
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="import_finance">
                      <h4>Export Finance</h4>
                      <ul>
                        {exportLink.map((item, i) => {
                          return (
                            <Link key={item.id} to={`/product/${item.id}`}>
                              {item.title}
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="nav_link_absolute_domestic">
                  <h3>DOMESTIC</h3>
                  <ul>
                    {domesticLink.map((item, i) => {
                      return (
                        <Link key={item.id} to={`/product/${item.id}`}>
                          {item.title}
                        </Link>
                      );
                    })}
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
                    navHover === 1 && "hover_link"
                  }`}
                >
                  <p>Resources</p>
                  <IoMdArrowDropdown />
                </NavLink>
              </div>
              <div
                className={`nav_link_absolute nav_link_absolute_second ${
                  navHover === 1 && "display_block"
                }`}
              >
                <div className="link_chash">
                  <h3>Enhance Cash Flows</h3>
                  {tr1 && <p>{tr1}</p>}
                </div>
                <div>
                  <div className="link_publications">
                    <h3>Publications</h3>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/cases">Case Stdies</Link>
                    <Link to="/faq">FAQs</Link>
                  </div>
                  <div>
                    <div className="link_publications_benchark">
                      <h3>Benchmark Rates</h3>
                      <p>
                        Explore latest benchmark rates of the world's leading
                        currencies: the US Dollar, Euro, Japanese Yen
                      </p>
                      <Link to="">Explore rates</Link>
                    </div>
                  </div>
                </div>
                <div className="link_calc">
                  <h3>Cost Calculators</h3>
                  <Link to="/calculator" onClick={() => setCalc("d")}>
                    Domestic Finance
                  </Link>
                  <Link to="/calculator" onClick={() => setCalc("i")}>
                    Import / Export Finance
                  </Link>
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
                <div
                  className={`${({ isActive }) =>
                    isActive ? "active" : ""} nav_link ${
                    navHover === 2 && "hover_link"
                  }`}
                >
                  <p>Company</p>
                  <IoMdArrowDropdown />
                </div>
              </div>
              <div
                className={`nav_link_absolute nav_link_absolute_third ${
                  navHover === 2 && "display_block"
                }`}
              >
                <div className="nav_vision">
                  <h3>Our Vision</h3>
                  {tr2 && <p>{tr2}</p>}
                </div>
                <div className="nav_company_second">
                  <div className="nav_career">
                    <h3>About</h3>
                    <p>
                      We are revolutionizing Trade finance accessibility. Learn
                      more the TradeFlair
                    </p>
                    <Link to="/about">Learn More</Link>
                  </div>
                  <div className="nav_career">
                    <h3>Career</h3>
                    <p>
                      Become a partner of a rapidly expanding team of experts
                      and visionaries today.
                    </p>
                    <Link to="/career">Transform with TradeFlair</Link>
                  </div>
                  <div className="nav_career">
                    <h3>Contact</h3>
                    <p>Connect with a TradeFlair expert today.</p>
                    <p>Trade@tradeflaircorporate.com</p>
                    <p>+91-9458703128</p>
                    <Link to="/contact" onClick={() => setOpaenHam(false)}>
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="nav_company_third">
                  <h3>Where to find us</h3>
                  <div className="find_image_cont">
                    <img src={of} alt="" />
                    <div>
                      <p>1st Floor, G-31, Block G, Sector 3, Noida 201301</p>
                      <p>PINCODE - 201301</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_btns">
            <button className="start_btn" onClick={() => setOpenC(true)}>
              Get Started
            </button>
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
                <div
                  className="ham_nav_link_text"
                  onClick={() => handleIndex(1)}
                >
                  <p>Trade Finance</p>
                  <IoIosArrowDropdownCircle />
                </div>
                <div
                  className={`ham_wraper ${
                    openIndex === 1 && "ham_wraper_open"
                  }`}
                >
                  <div className="ham_expand">
                    <div>
                      <h3>SOLUTIONS</h3>
                      <p>{tr}</p>
                    </div>
                    <div>
                      <h3>INTERNATIONAL</h3>
                      <div className="nav_links_mobile_container">
                        {[...exportLink, ...importLink].map((item, index) => {
                          return (
                            <Link
                              key={item.id}
                              onClick={() => setOpaenHam(false)}
                              to={`/product/${index}`}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h3>DOMESTIC</h3>
                      <div className="nav_links_mobile_container">
                        {domesticLink.map((item, index) => {
                          return (
                            <Link
                              key={item.id}
                              onClick={() => setOpaenHam(false)}
                              to={`/product/${index}`}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ham_nav_link_text_container">
                <div
                  className="ham_nav_link_text"
                  onClick={() => handleIndex(2)}
                >
                  <p>Resource</p>
                  <IoIosArrowDropdownCircle />
                </div>
                <div
                  className={`ham_wraper ${
                    openIndex === 2 && "ham_wraper_open"
                  }`}
                >
                  <div className="ham_expand">
                    <div>
                      <h3>Enhance Cash Flows</h3>
                      <p>{tr1}</p>
                    </div>
                    <div className="nav_links_mobile_container">
                      <h3>Publications</h3>
                      <Link onClick={() => setOpaenHam(false)} to="/blogs">
                        Blogs
                      </Link>
                      <Link onClick={() => setOpaenHam(false)} to="/cases">
                        Case Stdies
                      </Link>
                      <Link onClick={() => setOpaenHam(false)} to="/faq">
                        FAQs
                      </Link>
                    </div>
                    <div className="nav_links_mobile_container">
                      <h3>Cost Calculators</h3>
                      <Link
                        to="/calculator"
                        onClick={() => {
                          setCalc("d");
                          setOpaenHam(false);
                        }}
                      >
                        Domestic Finance
                      </Link>
                      <Link
                        to="/calculator"
                        onClick={() => {
                          setCalc("i");
                          setOpaenHam(false);
                        }}
                      >
                        Import / Export Finance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ham_nav_link_text_container">
                <div
                  className="ham_nav_link_text"
                  onClick={() => handleIndex(3)}
                >
                  <p>Company</p>
                  <IoIosArrowDropdownCircle />
                </div>
                <div
                  className={`ham_wraper ${
                    openIndex === 3 && "ham_wraper_open"
                  }`}
                >
                  <div className="ham_expand">
                    <div>
                      <h3>Our Vision</h3>
                      <p>{tr2}</p>
                    </div>
                    <div className="">
                      <div className="nav_career_mobile">
                        <h3>About</h3>
                        <p>
                          We are revolutionizing Trade finance accessibility.
                          Learn more the TradeFlair
                        </p>
                        <Link to="/about">Learn More</Link>
                      </div>
                      <div className="nav_career_mobile">
                        <h3>Career</h3>
                        <p>
                          Become a partner of a rapidly expanding team of
                          experts and visionaries today.
                        </p>
                        <Link to="/about">Transform with TradeFlair</Link>
                      </div>
                      <div className="nav_career_mobile">
                        <h3>Contact</h3>
                        <p>Connect with a TradeFlair expert today.</p>
                        <p>Trade@tradeflaircorporate.com</p>
                        <p>+91-9458703128</p>
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </div>
                    <div className="nav_company_third_mobile">
                      <h3>Where to find us</h3>
                      <div className="find_image_cont_mobile">
                        <img src={of} alt="" />
                        <div>
                          <p>
                            1st Floor, G-31, Block G, Sector 3, Noida 201301
                          </p>
                          <p>PINCODE - 201301</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav_height"></div>
    </>
  );
};

export default Navbar;
