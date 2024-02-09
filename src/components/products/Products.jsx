import React, { useEffect, useState } from "react";
import "./products.scss";
import impor from "../../images/import.svg";
import exprot from "../../images/export.svg";
import domestic from "../../images/domestic.svg";

const Products = () => {
  const [activeP, setActiveP] = useState(true);
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setActiveP(!activeP);
    setClicked(true);
  };
  const items = [
    {
      img: impor,
      title: "IMPORT FINANCE",
      desc: "SUPPLIER'S CREDIT",
    },
    {
      img: exprot,
      title: "IMPORT FINANCE",
      desc: "BUYER'S CREDIT",
    },
    {
      img: domestic,
      title: "EXPORT FINANCE",
      desc: "LC DISCOUNTING",
    },
  ];
  const items2 = [
    {
      img: impor,
      title: "LOCAL LETTER OF CREDIT BILL DISCOUNTING",
      // desc: "SUPPLIER'S CREDIT",
    },
    {
      img: exprot,
      title: "INVOICE DISCOUNTING",
      // desc: "BUYER'S CREDIT",
    },
  ];
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
          ? items.map((item, index) => {
              return (
                <div className="product" key={index}>
                  <img src={item.img} alt="" />
                  <div className="products_info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <button>Learn More!</button>
                  </div>
                </div>
              );
            })
          : items2.map((item, index) => {
              return (
                <div className="product" key={index}>
                  <img src={item.img} alt="" />
                  <div className="products_info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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
