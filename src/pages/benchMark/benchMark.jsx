import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BASE } from "../../App";
import Loading from "../../components/loading/Loading";
import html2canvas from "html2canvas";
import "./benchMark.scss";
import { Link } from "react-router-dom";

const BenchMark = () => {
  const [loading, setLoading] = useState(true);
  const [euro, setEruo] = useState([]);
  const [dolar, setDolar] = useState([]);
  const [jpy, setJpy] = useState([]);

  const tableRefDolar = useRef();
  const tableRefEuro = useRef();
  const tableRefJpy = useRef();

  const handleScreenshot = async (ref) => {
    const canvas = await html2canvas(ref.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "table_screenshot.png";
    link.click();
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const resEuro = await axios(BASE + `/cal/api/rates/eur/`);
        const resUsd = await axios(BASE + `/cal/api/rates/usd/`);
        const resJpy = await axios(BASE + `/cal/api/rates/jpy/`);
        setLoading(false);
        setEruo(resEuro.data);
        setDolar(resUsd.data);
        setJpy(resJpy.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="benchmark_container">
      <div className="benchmark_hero">
        <h1>Benchmark Rates</h1>
        <h2>Stay Updated with the Latest Market Trends</h2>
        <p>
          At TradeFlair, we provide up-to-date benchmark rates for major global
          currencies, enabling businesses to make informed trade finance
          decisions. Access Term SOFR (USD), Euribor (EUR), and Japanese TIBOR
          (JPY). Our comprehensive and transparent rate tables are tailored to
          support your global trade and financial planning needs.
        </p>
      </div>
      <div className="rates_tabls">
        <div className="rates_table_container">
          <div ref={tableRefDolar} className="screen_container">
            <h2>Dolar</h2>
            <div className="rates_table">
              <table className="rates_table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>1 MONTH</th>
                    <th>3 MONTH</th>
                    <th>6 MONTH</th>
                    <th>12 MONTH</th>
                    <th>OVERNIGHT</th>
                  </tr>
                </thead>
                <tbody>
                  {dolar?.map((row, index) => (
                    <tr key={index}>
                      <td>{row.date}</td>
                      <td>{Number(row.one_month).toFixed(2)}</td>
                      <td>{Number(row.three_months).toFixed(2)}</td>
                      <td>{Number(row.six_months).toFixed(2)}</td>
                      <td>{Number(row.twelve_months).toFixed(2)}</td>
                      <td>{Number(row.overnight).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" className="footer-cell">
                      Powered by TradeFlair
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="rates_table_buttons_container">
            <button onClick={() => handleScreenshot(tableRefDolar)}>
              Save Screenshot
            </button>
            <Link to="/product/10">Compare Interest Cost</Link>
          </div>
        </div>
        <div className="rates_table_container white_back">
          <div className="screen_container" ref={tableRefEuro}>
            <h2>Euro</h2>
            <div className="rates_table">
              <table className="rates_table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>1 MONTH</th>
                    <th>3 MONTH</th>
                    <th>6 MONTH</th>
                    <th>12 MONTH</th>
                    <th>OVERNIGHT</th>
                  </tr>
                </thead>
                <tbody>
                  {euro?.map((row, index) => (
                    <tr key={index}>
                      <td>{row.date}</td>
                      <td>{Number(row.one_month).toFixed(2)}</td>
                      <td>{Number(row.three_months).toFixed(2)}</td>
                      <td>{Number(row.six_months).toFixed(2)}</td>
                      <td>{Number(row.twelve_months).toFixed(2)}</td>
                      <td>{Number(row.overnight).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" className="footer-cell">
                      Powered by TradeFlair
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="rates_table_buttons_container">
            <button onClick={() => handleScreenshot(tableRefEuro)}>
              Save Screenshot
            </button>
            <Link to="/product/10">Compare Interest Cost</Link>
          </div>
        </div>
        <div className="rates_table_container">
          <div className="screen_container" ref={tableRefJpy}>
            <h2>Yen</h2>
            <div className="rates_table">
              <table className="rates_table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>1 MONTH</th>
                    <th>3 MONTH</th>
                    <th>6 MONTH</th>
                    <th>12 MONTH</th>
                    <th>OVERNIGHT</th>
                  </tr>
                </thead>
                <tbody>
                  {jpy?.map((row, index) => (
                    <tr key={index}>
                      <td>{row.date}</td>
                      <td>{Number(row.one_month).toFixed(2)}</td>
                      <td>{Number(row.three_months).toFixed(2)}</td>
                      <td>{Number(row.six_months).toFixed(2)}</td>
                      <td>{Number(row.twelve_months).toFixed(2)}</td>
                      <td>{Number(row.overnight).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" className="footer-cell">
                      Powered by TradeFlair
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="rates_table_buttons_container">
            <button onClick={() => handleScreenshot(tableRefJpy)}>
              Save Screenshot
            </button>
            <Link to="/product/10">Compare Interest Cost</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchMark;
