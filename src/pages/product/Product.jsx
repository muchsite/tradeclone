import React, { useEffect, useRef, useState } from "react";
import "./product.scss";
import axios from "axios";
import { BASE } from "../../App";

import pImage from "../../images/process.svg";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/Faq/Faq";
import { useInView } from "react-intersection-observer";

import { useParams } from "react-router-dom";
import FaqC from "../../components/Faq/FaqC";
const Product = () => {
  const [solutions, setSolutions] = useState([]);
  const [process, setProcess] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [d, setD] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(BASE + `/product/${productId}`);

        setSolutions(res.data.data.product_solutions);
        setProcess(res.data.data.product_process);
        setBenefits(res.data.data.product_benefits);
        setD(res.data.data.product_page);
        setFaqData(res.data.data.faqs);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [productId]);
  const { ref: sol, inView: solW } = useInView({
    threshold: 0.6,
  });
  const { ref: proc, inView: procW } = useInView({
    threshold: 1,
  });
  const { ref: ben, inView: benW } = useInView({
    threshold: 0.5,
  });
  const { ref: con, inView: conW } = useInView({
    threshold: 0.5,
  });
  const { ref: fa, inView: faW } = useInView({
    threshold: 0.5,
  });
  const [active, setActive] = useState("sol");
  useEffect(() => {
    if (solW && !procW) {
      setActive("sol");
    }
    if (procW && !solW) {
      setActive("proc");
    }
    if (procW && !solW) {
      setActive("proc");
    }

    if (benW && !procW) {
      setActive("ben");
    }
    if (conW && !benW) {
      setActive("con");
    }
    if (faW && !conW) {
      setActive("fa");
    }
  }, [solW, procW, benW, conW, faW]);
  const procRef = useRef();
  const solRef = useRef();
  const benRef = useRef();
  const conRef = useRef();
  const faRef = useRef();
  const scrollTo = (ar) => {
    if (ar == "sol") {
      if (solRef.current) {
        const top =
          solRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          700;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar == "proc") {
      if (procRef.current) {
        const top =
          procRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar == "ben") {
      if (benRef.current) {
        const top =
          benRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar == "con") {
      if (conRef.current) {
        const top =
          conRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar == "fa") {
      if (faRef.current) {
        const top =
          faRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="product_container">
      <div className="product_hero">
        <h2>{d.title}</h2>
        <p>{d.description}</p>
        <button>Rates starts from 1.00% p.a.</button>
      </div>
      <div className="product_calc">
        <div className="product_clac_lef">
          <div className="product_calc_top">
            <div className="product_calc_input">
              <label htmlFor="">Product</label>
              <select name="cars" id="cars">
                <option value="Buyer's Credit">Buyer's Credit</option>
              </select>
            </div>
            <div className="product_calc_input">
              <label htmlFor="">Currency</label>
              <select name="cars" id="cars">
                <option value="Buyer's Credit">USD</option>
                <option value="Buyer's Credit">INR</option>
                <option value="Buyer's Credit">EURO</option>
                <option value="Buyer's Credit">JPY</option>
              </select>
            </div>
            <div className="product_calc_input">
              <label htmlFor="">Amount</label>
              <input type="text" name="" id="" />
            </div>
            <div className="product_calc_input">
              <label htmlFor="">Tenor</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="product_calc_bottom">
            <div className="product_calc_input">
              <label htmlFor="">Importer Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="product_calc_input">
              <label htmlFor="">Phone Number</label>
              <input type="text" name="" id="" />
            </div>
            <div className="product_calc_input">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <button>FIND BEST RATE</button>
        </div>
        <div className="product_calc_riht">
          <h2>INTEREST RATE</h2>
          <div className="product_calc_div">
            <p>Benchmark Rate</p>
            <h3>3 month</h3>
          </div>
          <div className="product_calc_div">
            <p>Financing Spread</p>
            <h3>00000000</h3>
          </div>
          <div className="product_calc_div">
            <p>Total Interest Rate</p>
            <h3>33333333</h3>
          </div>
          <div className="product_calc_right_buttons">
            <button>Get Quote</button>
            <button>Calculate Cost</button>
          </div>
        </div>
      </div>
      <div className="sticky_nav_container">
        <div className="sticky_nav">
          <button
            className={`sticky_btn ${active == "sol" && "sticky_btn_active"}`}
            onClick={() => scrollTo("sol")}
          >
            Solutions
          </button>
          <button
            className={`sticky_btn ${active == "proc" && "sticky_btn_active"}`}
            onClick={() => scrollTo("proc")}
          >
            Process
          </button>
          <button
            className={`sticky_btn ${active == "ben" && "sticky_btn_active"}`}
            onClick={() => scrollTo("ben")}
          >
            Benefits
          </button>
          <button
            className={`sticky_btn ${active == "con" && "sticky_btn_active"}`}
            onClick={() => scrollTo("con")}
          >
            Contact
          </button>
          <button
            className={`sticky_btn ${active == "fa" && "sticky_btn_active"}`}
            onClick={() => scrollTo("fa")}
          >
            F.A.Q
          </button>
        </div>
        <div className="product_calc">
          <div className="product_calc_left"></div>
        </div>
        <div>
          <div className="solutions">
            <div className="solutions_left" ref={sol}>
              {solutions?.map((item, index) => {
                return (
                  <div
                    className={`solution_item ${index % 2 !== 0 && "margin_t"}`}
                    key={index}
                  >
                    <img src={item.p_sol_image} alt="" />
                    <p>{item.p_sol_paragraph}</p>
                  </div>
                );
              })}
            </div>
            <div className="solutions_right">
              <h3 ref={solRef}>{d.solution_heading}</h3>
              <p>{d.solution_paragraph}</p>
              <button>Schedule a call with our team</button>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="process_text" ref={procRef}></div>
          <div className="process_body">
            <div className="process_left">
              <h2>{d.process_heading}</h2>
              <p ref={proc}>{d.process_paragraph}</p>
              {process.map((item, index) => {
                return (
                  <div className="process_item" key={index}>
                    <h4>• {item.p_product_heading}</h4>
                    <p>- {item.p_product_paragraph}</p>
                  </div>
                );
              })}
            </div>
            <img src={pImage} alt="" />
          </div>
        </div>
        <div className="benefits" ref={benRef}>
          <h3 ref={ben}>KEY BENEFITS OF BUYER’S CREDIT WITH TRADEFLAIR</h3>
          <div className="benefits_items">
            {benefits?.map((item, index) => {
              return (
                <div className="benefits_item" key={index}>
                  <img src={item.p_benefit_image} alt="" />
                  <div>
                    <h4>{item.p_benefit_heading}</h4>
                    <p>{item.p_benefit_paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={con}>
          <div ref={conRef}></div>
          <Contact h={d.contact_heading} p={d.contact_paragraph} />
        </div>
        <div ref={fa}>
          <div ref={faRef}></div>
          <FaqC data={faqData} />
        </div>
      </div>
    </div>
  );
};

export default Product;
