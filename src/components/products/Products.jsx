import React from "react";
import "./products.scss";
import impor from "../../images/import.svg";
import exprot from "../../images/export.svg";
import domestic from "../../images/domestic.svg";

const Products = () => {
  const items = [
    {
      img: impor,
      title: "Import Finance",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nihil dolorem asperiores. Inventore est, soluta earum, officia nostrum numquam omnis eveniet ipsa, natus veniam esse blanditiis voluptatibus impedit quas deserunt.",
    },
    {
      img: exprot,
      title: "Export Finance",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nihil dolorem asperiores. Inventore est, soluta earum, officia nostrum numquam omnis eveniet ipsa, natus veniam esse blanditiis voluptatibus impedit quas deserunt.",
    },
    {
      img: domestic,
      title: "Domestic Financing",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nihil dolorem asperiores. Inventore est, soluta earum, officia nostrum numquam omnis eveniet ipsa, natus veniam esse blanditiis voluptatibus impedit quas deserunt.",
    },
  ];
  return (
    <div className="products_container">
      <h2>We provide solutions for</h2>
      <div className="products_items_container">
        {items.map((item, index) => {
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
