import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE } from "../../App";
import "./partner.scss";
import Loading from "../../components/loading/Loading";

const Partner = () => {
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
        console.log(data);
        setData(data.main_data);
        setAffiliate(data.affiliate);
        setKey(data.key);
        setProduct(data.product);
        setRefferal(data.refferal);
        setTestimonial(data.testimonial);
        setWho(data.why);
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
          
        </div>
      </div>
    </div>
  );
};

export default Partner;
