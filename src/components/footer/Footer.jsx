import React, { useEffect, useState } from "react";
import "./footer.scss";
import logo from "../../images/footerlogo.svg";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { BASE } from "../../App";

const Footer = () => {
  const [importLink, setImport] = useState([]);
  const [exportLink, setExport] = useState([]);
  const [domesticLink, setDomestic] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(BASE + "/navbar/");
        const p = res.data.data.navbar;

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
    <footer>
      <div className="footer_container">
        <div className="footer_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p>Trade flais Corporate Services put Ltd</p>
        </div>
        <div className="footer_links">
          <div className="footer_links_item">
            <h3>Import Finance</h3>
            <div className="footer_import_finance_container">
              {importLink.map((item) => {
                return (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <div className="footer_links_item" style={{ marginBottom: "1rem" }}>
              <h3>Domestic finance</h3>
              <div className="footer_import_finance_container">
                {domesticLink.map((item) => {
                  return (
                    <Link key={item.id} to={`/product/${item.id}`}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="footer_links_item">
              <h3>Expert Finance</h3>
              <div className="footer_import_finance_container">
                {exportLink.map((item) => {
                  return (
                    <Link key={item.id} to={`/product/${item.id}`}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer_links_item">
            <div className="footer_import_finance_container">
              <Link to={`/about`} style={{ whiteSpace: "nowrap" }}>
                About us
              </Link>
              <Link to={`/career`} style={{ whiteSpace: "nowrap" }}>
                Career
              </Link>
              <Link to={`/blogs`} style={{ whiteSpace: "nowrap" }}>
                Blogs
              </Link>
              <Link to={`/contact`} style={{ whiteSpace: "nowrap" }}>
                Contact us
              </Link>
              <Link to={`/faq`}>FAQS</Link>
              <Link to={`/faq`} style={{ whiteSpace: "nowrap" }}>
                Partner withus
              </Link>
            </div>
          </div>
          <div className="footer_links_item">
            <h3>Contact us</h3>
            <div className="footer_import_finance_container">
              <p>Adress</p>
              <p>+91 9810911531</p>
              <p>sales@tradeflaircorporate.com</p>
            </div>
          </div>
        </div>
        <div className="footer_media">
          <FaFacebookSquare />
          <FaLinkedin />
          <FaInstagramSquare />
        </div>
      </div>
      <div className="footer_bottom">
        <p>Copyright @2025 Trade Flair. All rights reserved</p>
        <div className="footer_bottom_links">
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/refunds">Refund Policy</Link>
          <Link to="/disclaimer">Disclaimer </Link>
          <Link to="/cookies">Cookies Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
