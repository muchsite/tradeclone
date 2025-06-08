import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE } from "../../App";
import "./partner.scss";
import Loading from "../../components/loading/Loading";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const groupByCategory = (items) => {
  const map = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return Object.entries(map).map(([category, items]) => ({
    category,
    items,
  }));
};

const Partner = () => {
  const [openedProduct, setOpenedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [affiliate, setAffiliate] = useState([]);
  const [key, setKey] = useState([]);
  const [product, setProduct] = useState([]);
  const [refferal, setRefferal] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [who, setWho] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios(BASE + `/partner`);
        setLoading(false);
        const data = res.data.data;
        setData(data.main_data);
        setAffiliate(data.affiliate);
        setKey(data.key);
        const productsByCategory = groupByCategory(data.product);
        setProduct(productsByCategory);
        setRefferal(data.refferal);
        setTestimonial(data.testimonial);
        setWho(data.who);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="partner_container">
      <div className="partner_hero">
        <div className="partner_hero_text">
          <h2>{data.head}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="partner_section_container">
        <div className="partner_section_hero">
          <div className="partner_section_text">
            <h3>{data.referal_head}</h3>
            <p>{data.referal_description}</p>
          </div>
          <img src={data.referal_image} alt="" />
        </div>
        <div className="partner_section_list_container">
          <div className="partner_section_list_title">
            {data.referal_subhead}
          </div>
          <ul className="partner_section_list">
            {refferal.map((item) => {
              return (
                <li className="partner_section_list_item" key={item.id}>
                  <strong>{item.head}</strong>
                  <span>{item.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="partner_section_container _affiliate">
        <div className="partner_section_hero">
          <div className="partner_section_text">
            <h3>{data.affilate_head}</h3>
            <p>{data.affilate_description}</p>
          </div>
          <img src={data.affilate_image} alt="" />
        </div>
        <div className="partner_section_list_container">
          <ul className="partner_section_list">
            {affiliate.map((item) => {
              return (
                <li className="partner_section_list_item" key={item.id}>
                  <strong>{item.head}</strong>
                  <span>{item.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="partner_key_container">
        <div className="partner_key_text">
          <h3>{data.key_head}</h3>
          <p>{data.key_description}</p>
        </div>
        <div className="partner_key_items">
          {key.map((item) => {
            return (
              <div className="partner_key_item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="partner_key_item_text">
                  <h4>{item.head}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="partner_join_container">
        <div className="partner_join_text">
          <h3>{data.join_head}</h3>
          <p>{data.join_description}</p>
        </div>
        <div className="partner_join_items">
          {who?.map((item) => {
            return (
              <div className="partner_join_item" key={item.id}>
                <AiOutlineCheck className="check_icon" />
                <h3>{item.head}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="partner_poduct_container">
        <div className="partner_product_text">
          <h3>{data.product_head}</h3>
          <p>{data.product_description}</p>
        </div>
        <div className="partner_product_items">
          {product.map((item, i) => (
            <div
              className="partner_product_item"
              key={i}
              onClick={() => setOpenedProduct(i)}
            >
              <h3>{item.category}</h3>
              <div className="single_product_container">
                {openedProduct === i &&
                  item.items.map((singleProduct, index) => (
                    <div className="single_product_card" key={index}>
                      <h4>{singleProduct.head}</h4>
                      <p>{singleProduct.description}</p>
                      <div className="meta">
                        <span>Category: {singleProduct.category}</span>
                      </div>
                      <Link
                        to={`/product/${singleProduct.id}`}
                        target="_blanck"
                      >
                        See More
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="products_testimonials_container">
        <div className="testimonials_text">
          <h3>Testimonials</h3>
        </div>
        <div className="testimonials_items">
          {testimonial.map((item) => {
            return (
              <div className="testimonial_item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="testimonial_item_text">
                  <h4>{item.name}</h4>
                  <h5>{item.designation}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
