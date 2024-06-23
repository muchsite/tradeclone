import React, { useEffect, useState } from "react";
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

const Product = () => {
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
      <div className="product_calc">
        <div className="product_calc_left"></div>
      </div>
      <div className="solutions">
        <div className="solutions_left">
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
          <h3>OUR SMART SOLUTION</h3>
          <p>
            TradeFlair offers low-cost and fast processing for buyer’s credit
            transactions, ensuring importers save on costs and time while
            guaranteeing timely payments to supplier
          </p>
          <button>Schedule a call with our team</button>
        </div>
      </div>
      <div className="process">
        <div className="process_text">
          <h3>How buyer’ credit (SBLC backed) financing works</h3>
          <p>
            Remit funds to your international supplier within 2 days by issuing
            an SBLC. Avail credit for imports: up to 360 days for raw materials
            and up to 1080 days for capital goods.
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
      <div className="benefits">
        <h3>KEY BENEFITS OF BUYER’S CREDIT WITH TRADEFLAIR</h3>
        <div className="benefits_items">
          {benefits?.map((item, index) => {
            return (
              <div className="benefits_item">
                <img src={imgs[3]} alt="" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Contact />
      <Faq />
    </div>
  );
};

export default Product;
