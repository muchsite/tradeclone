import React, { useEffect, useState } from "react";
import "./products.scss";
import impor from "../../images/import.svg";
import exprot from "../../images/export.svg";
import domestic from "../../images/domestic.svg";
import { BASE } from "../../App";

const Products = ({ data, loading }) => {
  const [activeP, setActiveP] = useState(true);
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setActiveP(!activeP);
    setClicked(true);
  };
  const items = data;

  useEffect(() => {
    if (!clicked) {
      const intervalId = setInterval(() => {
        setActiveP((activeP) => !activeP);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [clicked]);
  return (
    <div className="products_container">
      <h2>TAILORED TRADE FINANCE SOLUTIONS</h2>
      <div className="product_btns">
        <p
          className={`${activeP ? "active_product" : ""}`}
          onClick={handleclick}
        >
          INTERNATIONAL
        </p>
        <p
          className={`${!activeP ? "active_product" : ""}`}
          onClick={handleclick}
        >
          DOMESTIC
        </p>
      </div>
      <div className="products_items_container">
        {activeP
          ? items
              .filter((i) => i.service_type == "International")
              .map((item, index) => {
                return (
                  <div className="product" key={index}>
                    <img src={item.image} alt="Image" />
                    <div className="products_info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button>Learn More!</button>
                    </div>
                  </div>
                );
              })
          : items
              .filter((i) => i.service_type !== "International")
              .map((item, index) => {
                return (
                  <div className="product" key={index}>
                    <img src={item.image} alt="Image" />
                    <div className="products_info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button>Learn More!</button>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Products;
