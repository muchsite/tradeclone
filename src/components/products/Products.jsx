import React, { useEffect, useState } from "react";
import "./products.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Products = (data) => {
  const [domestic, setDomestic] = useState([]);
  const [importFinance, setImport] = useState([]);
  const [exportFinance, setExport] = useState([]);

  const [activeP, setActiveP] = useState(0);
  const [clicked, setClicked] = useState(false);
  const handleclick = (num) => {
    setActiveP(num);
    setClicked(true);
  };

  useEffect(() => {
    setDomestic([]);
    setImport([]);
    setExport([]);
    data.data.forEach((item) => {
      const cat = item.category.sub_category;
      if (cat === "Export Finance") setExport((prev) => [...prev, item]);
      if (cat === "Import Finance") setImport((prev) => [...prev, item]);
      if (cat === "Domestic Finance") setDomestic((prev) => [...prev, item]);
    });
  }, []);

  useEffect(() => {
    if (!clicked) {
      const intervalId = setInterval(() => {
        setActiveP((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [clicked]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="products_container">
        <h2>TAILORED TRADE FINANCE SOLUTIONS</h2>
        <div className="product_btns">
          <p
            className={`${activeP === 0 ? "active_product" : ""}`}
            onClick={() => handleclick(0)}
          >
            IMPORT
          </p>
          <p
            className={`${activeP === 1 ? "active_product" : ""}`}
            onClick={() => handleclick(1)}
          >
            EXPORT
          </p>
          <p
            className={`${activeP === 2 ? "active_product" : ""}`}
            onClick={() => handleclick(2)}
          >
            DOMESTIC
          </p>
        </div>
        <div className="products_items_container">
          {activeP === 0 &&
            (importFinance.length < 3 ? (
              importFinance.map((item, index) => (
                <div className="product product_single" key={index}>
                  <img src={item.image} alt="Image" />
                  <div className="products_info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`}>Learn More!</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="slider_container">
                <Slider {...settings}>
                  {importFinance.map((item, index) => (
                    <div key={index}>
                      <div className="product">
                        <img src={item.image} alt="Image" />
                        <div className="products_info">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <Link to={`/product/${item.id}`}>Learn More!</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          {activeP === 1 &&
            (exportFinance.length < 3 ? (
              exportFinance.map((item, index) => (
                <div className="product product_single" key={index}>
                  <img src={item.image} alt="Image" />
                  <div className="products_info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`}>Learn More!</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="slider_container">
                <Slider {...settings}>
                  {exportFinance.map((item, index) => (
                    <div key={index}>
                      <div className="product">
                        <img src={item.image} alt="Image" />
                        <div className="products_info">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <Link to={`/product/${item.id}`}>Learn More!</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          {activeP === 2 &&
            (domestic.length < 3 ? (
              domestic.map((item, index) => (
                <div className="product product_single" key={index}>
                  <img src={item.image} alt="Image" />
                  <div className="products_info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/product/${item.id}`}>Learn More!</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="slider_container">
                <Slider {...settings}>
                  {domestic.map((item, index) => (
                    <div key={index}>
                      <div className="product">
                        <img src={item.image} alt="Image" />
                        <div className="products_info">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <Link to={`/product/${item.id}`}>Learn More!</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
