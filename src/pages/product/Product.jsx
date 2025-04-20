import React, { useEffect, useRef, useState } from "react";
import "./product.scss";
import axios from "axios";
import { BASE } from "../../App";
import pImage from "../../images/ProcessFlow.png";
import Contact from "../../components/contact/Contact";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";
import FaqC from "../../components/Faq/FaqC";
import LoadingSpiner from "../../components/loading/LoadingSpiner";
import { FaCommentDollar, FaCalculator } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const Product = () => {
  const [solutions, setSolutions] = useState([]);
  const [process, setProcess] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [d, setD] = useState({});
  const { productId } = useParams();

  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newId = e.target.value;
    setSelected(newId);
    setRes({});
    navigate(`/product/${newId}`);
  };

  useEffect(() => {
    if (productId) {
      setSelected(productId);
    }
  }, [productId]);
  const productMap = [
    {
      product: "Reimbursement Authorization",
      id: 10,
    },
    {
      product: "Buyer’s Credit",
      id: 8,
    },
    {
      product: "Confirmation-Backed Import",
      id: 11,
    },
    {
      product: "Supplier’s Credit",
      id: 9,
    },
    {
      product: "Export LC Bill Discounting",
      id: 12,
    },
    {
      product: "Local Letter of Credit Bill Discounting",
      id: 13,
    },
  ];

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
    if (ar === "sol") {
      if (solRef.current) {
        const top =
          solRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          700;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "proc") {
      if (procRef.current) {
        const top =
          procRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "ben") {
      if (benRef.current) {
        const top =
          benRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "con") {
      if (conRef.current) {
        const top =
          conRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "fa") {
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

  const [res, setRes] = useState({
    "Benchmark Rate": null,
    "financing Spread": null,
    "total interest rate": null,
  });

  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState();
  const [tenor, setTenor] = useState();
  const [company_name, setCompanyName] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const submit = async (e) => {
    e.preventDefault();
    const body = {
      currency,
      amount,
      tenor,
      company_name,
      phone_number,
      email,
      product: productId,
    };
    setSending(true);
    setErrors({});
    try {
      const res = await axios.post(BASE + "/cal/", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRes(res.data);
      setSending(false);
      setErrors({});
    } catch (error) {
      setErrors(error.response.data);
      setSending(false);
      console.log(error);
    }
  };

  return (
    <div className="product_container">
      <div className="product_hero_container">
        <div className="product_hero_container_content">
          <div className="product_hero">
            <h2>{d.title}</h2>
            <p>{d.description}</p>
          </div>
          <div className="product_calc">
            <form onSubmit={submit}>
              <div className="product_clac_lef">
                <button className="reset_button">
                  Rates starts from 1.00% p.a.
                </button>
                <div className="product_calc_top">
                  <div className="product_calc_input">
                    <label htmlFor="">Product</label>
                    <select required value={selected} onChange={handleChange}>
                      {productMap.map((item, index) => {
                        return (
                          <option value={item.id} key={index}>
                            {item.product}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="product_calc_input">
                    <label htmlFor="">Currency</label>
                    <select
                      required
                      onChange={(e) => setCurrency(e.currentTarget.value)}
                      value={currency}
                      className={`${"currency" in errors && "error_input"}`}
                    >
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                      <option value="EUR">EURO</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                </div>
                <div className="product_calc_top">
                  <div className="product_calc_input">
                    <label htmlFor="">Amount</label>
                    <input
                      type="number"
                      required
                      onChange={(e) => setAmount(e.currentTarget.value)}
                      value={amount}
                      className={`${"amount" in errors && "error_input"}`}
                    />
                  </div>
                  <div className="product_calc_input">
                    <label htmlFor="">Tenor</label>
                    <input
                      type="number"
                      required
                      onChange={(e) => setTenor(e.currentTarget.value)}
                      value={tenor}
                      className={`${"tenor" in errors && "error_input"}`}
                    />
                  </div>
                </div>
                <div className="product_calc_bottom">
                  <div className="product_calc_input">
                    <label htmlFor="">Importer Name</label>
                    <input
                      type="text"
                      required
                      onChange={(e) => setCompanyName(e.currentTarget.value)}
                      value={company_name}
                    />
                  </div>
                  <div className="product_calc_input">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      required
                      onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                      className={`${"phone_number" in errors && "error_input"}`}
                      value={phone_number}
                    />
                  </div>
                  <div className="product_calc_input">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      required
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      className={`${"email" in errors && "error_input"}`}
                      value={email}
                    />
                  </div>
                </div>
                <div className="product_btn_container">
                  <button>{sending ? <LoadingSpiner /> : "Get Quote"}</button>

                  <div className="error_text">
                    {errors &&
                      Object.entries(errors).map(([field, messages]) =>
                        messages.map((msg, i) => (
                          <p key={`${field}-${i}`}>{msg}</p>
                        ))
                      )}
                  </div>
                </div>
              </div>
            </form>

            <div className="product_calc_right">
              <h2>INTEREST RATE</h2>
              <div className="product_calc_div">
                <FaSackDollar className="product_calc_div_icon" />
                <div>
                  <p>Benchmark Rate 3-Month SOFR</p>
                  {res["Benchmark Rate"] ? (
                    <h3>
                      {res["Benchmark Rate"]} <span>p.a</span>
                    </h3>
                  ) : (
                    <h3>--</h3>
                  )}
                </div>
              </div>
              <div className="product_calc_div">
                <FaCommentDollar className="product_calc_div_icon" />
                <div>
                  <p>Financing Spread</p>
                  {res["financing Spread"] ? (
                    <h3>
                      {res["financing Spread"]} <span>p.a</span>
                    </h3>
                  ) : (
                    <h3>--</h3>
                  )}
                </div>
              </div>
              <div className="product_calc_div">
                <FaCalculator className="product_calc_div_icon" />
                <div>
                  <p>Total Interest Rate</p>
                  {res["total interest rate"] ? (
                    <h3>
                      {res["total interest rate"]} <span>p.a</span>
                    </h3>
                  ) : (
                    <h3>--</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky_nav_container">
        <div className="sticky_nav">
          <button
            className={`sticky_btn ${active === "sol" && "sticky_btn_active"}`}
            onClick={() => scrollTo("sol")}
          >
            Solutions
          </button>
          <button
            className={`sticky_btn ${active === "proc" && "sticky_btn_active"}`}
            onClick={() => scrollTo("proc")}
          >
            Process
          </button>
          <button
            className={`sticky_btn ${active === "ben" && "sticky_btn_active"}`}
            onClick={() => scrollTo("ben")}
          >
            Benefits
          </button>
          <button
            className={`sticky_btn ${active === "con" && "sticky_btn_active"}`}
            onClick={() => scrollTo("con")}
          >
            Contact
          </button>
          <button
            className={`sticky_btn ${active === "fa" && "sticky_btn_active"}`}
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
            <div className="solutions_left_container">
              <div className="solutions_left" ref={sol}>
                {solutions?.map((item, index) => {
                  return (
                    <div
                      className={`solution_item ${
                        index % 2 !== 0 && "margin_t"
                      }`}
                      key={index}
                    >
                      <img src={item.p_sol_image} alt="" />
                      <p>{item.p_sol_paragraph}</p>
                    </div>
                  );
                })}
              </div>
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
