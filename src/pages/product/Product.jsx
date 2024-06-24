import React, { useEffect, useRef, useState } from "react";
import "./product.scss";
import axios from "axios";
import { BASE } from "../../App";
import f from "../../images/1.svg";
import s from "../../images/2.svg";
import t from "../../images/3.svg";
import r from "../../images/4.svg";
import pImage from "../../images/process.svg";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/Faq/Faq";
import { useInView } from "react-intersection-observer";
import cost from "../../images/product/save.svg";
import flex from "../../images/product/flex.svg";
import quck from "../../images/product/time.svg";
import global from "../../images/product/global.svg";
import funds from "../../images/product/funds.svg";
import pro from "../../images/product/undraw_processing_thoughts_d8ha.svg";
import doc from "../../images/product/doc.svg";
import office from "../../images/product/office.svg";
const Product = () => {
  const barray = [cost, flex, quck, global, funds, pro, doc, office];
  const [solutions, setSolutions] = useState([]);
  const [process, setProcess] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const imgs = [f, s, t, r];
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(BASE + "/product");
        const sol = res.data.data.product_page_data.filter(
          (item) => item.category == "Solution"
        );
        const pro = res.data.data.product_page_data.filter(
          (item) => item.category == "Process"
        );
        const ben = res.data.data.product_page_data.filter(
          (item) => item.category == "Benefits"
        );
        setSolutions(sol);
        setProcess(pro);
        setBenefits(ben);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const { ref: sol, inView: solW } = useInView({
    threshold: 0.2,
  });
  const { ref: proc, inView: procW } = useInView({
    threshold: 0.2,
  });
  const { ref: ben, inView: benW } = useInView({
    threshold: 0.2,
  });
  const { ref: con, inView: conW } = useInView({
    threshold: 0.4,
  });
  const { ref: fa, inView: faW } = useInView({
    threshold: 0.2,
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
    console.log({ benW, procW });
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
          350;
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
        <h2>BUYER'S CREDIT</h2>
        <h3>FOR IMPORTERS</h3>
        <h3>UNLOCK EASY IMPORT FINANCING AT LOWEST RATES</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo
          vitae accusamus sunt voluptatum a sit veritatis nisi! Voluptates
          officia ut sint quis quos ea quod voluptas magnam omnis quam.
        </p>
        <button>Rates starts from 1.00% p.a.</button>
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
                    <img src={imgs[index]} alt="" />
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="solutions_right">
              <h3 ref={solRef}>OUR SMART SOLUTION</h3>
              <p>
                TradeFlair offers low-cost and fast processing for buyer’s
                credit transactions, ensuring importers save on costs and time
                while guaranteeing timely payments to supplier
              </p>
              <button>Schedule a call with our team</button>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="process_text" ref={procRef}>
            <h3 ref={proc}>How buyer’ credit (SBLC backed) financing works</h3>
            <p>
              Remit funds to your international supplier within 2 days by
              issuing an SBLC. Avail credit for imports: up to 360 days for raw
              materials and up to 1080 days for capital goods.
            </p>
          </div>
          <div className="process_body">
            <div className="process_left">
              {process.map((item, index) => {
                return (
                  <div className="process_item" key={index}>
                    <h4>• {item.title}</h4>
                    <p>- {item.description}</p>
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
                  <img src={barray[index]} alt="" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={con}>
          <div ref={conRef}></div>
          <Contact />
        </div>
        <div ref={fa}>
          <div ref={faRef}></div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Product;
