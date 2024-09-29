import React, { useEffect, useState } from "react";
import "./calc.scss";
import axios, { spread } from "axios";
import { BASE } from "../../App";
const Calc = ({ calc, setCalc }) => {
  const [cur, setCur] = useState("INR");
  const setN = (v) => {
    if (v === "i") {
      setCalc("i");
      setCur("USD");
    } else {
      setCalc("d");
      setCur("INR");
    }
  };
  const hanleCurr = (e) => {
    setCur(e);
    if (iTenor >= 0) {
      const val = interData.international_date.find(
        (item) => iTenor >= item.min_days && iTenor < item.max_days
      );
      if (e === "USD") {
        setIBenchB(val.sofr_usd);
      }
      if (e === "EURO") {
        setIBenchB(val.euribor_euro);
      }
      if (e === "YEN") {
        setIBenchB(val.tibor_jpy);
      }
    }
  };

  const [principal, setPrincipal] = useState("");
  const [tenor, setTenor] = useState("");
  const [inrest, setIntrest] = useState("");
  const [charges, setChargers] = useState("");
  const [total, setTotal] = useState("");
  const [domBack, setDomBack] = useState([]);

  //

  const [inrestB, setIntrestB] = useState("");
  const [chargesB, setChargersB] = useState("");
  const [totalB, setTotalB] = useState("");
  useEffect(() => {
    const calcTotalDomC = () => {
      if (principal && tenor && inrest && charges) {
        const t =
          Number(principal) * Number(inrest) * Number(tenor / 365) +
          Number(charges);
        setTotal(t.toFixed(2));
      }
    };
    calcTotalDomC();
    const calcTotalDomT = () => {
      if (domBack.length > 0) {
        const findRate = domBack.find(
          (item) => item.min_days < tenor && item.max_days >= tenor
        );
        if (findRate) {
          setIntrestB(findRate.interest_rate);
          setChargersB(findRate.bank_charges);
        } else {
          if (tenor && tenor > 0) {
            setIntrestB(domBack[domBack.length - 1].interest_rate);
            setChargersB(domBack[domBack.length - 1].bank_charges);
          } else {
            setIntrestB("");
            setChargersB("");
          }
        }
        if (principal && tenor && inrest && charges) {
          const t =
            Number(principal) * Number(inrestB) * Number(tenor / 365) +
            Number(chargesB);
          setTotalB(t.toFixed(2));
        }
      }
    };

    calcTotalDomT();
  }, [principal, tenor, inrest, charges]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(BASE + "/calculator/domestic");
        setDomBack(res.data.data.domestic);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  // InterNational
  const [iPrincipal, setIPrincipal] = useState("");
  const [iTenor, setITenor] = useState("");
  const [iBench, setIBench] = useState("");
  const [iBenchB, setIBenchB] = useState("");
  const [iSpread, setISpread] = useState("");
  const [iSpreadB, setISpreadB] = useState("");
  const [iRio, setIRio] = useState("");
  const [iBch, setIBch] = useState("");
  const [iTotalC, setITotalC] = useState("");
  const [iTotalI, setITotalI] = useState("");
  const [interData, setInterData] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(BASE + "/calculator/international");
        setInterData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleTenorInter = (e) => {
    setITenor(e);
    if (iTenor >= 0) {
      const val = interData.international_date.find(
        (item) => e >= item.min_days && e < item.max_days
      );
      if (cur === "USD") {
        setIBenchB(val.sofr_usd);
      }
      if (cur === "EURO") {
        setIBenchB(val.euribor_euro);
      }
      if (cur === "YEN") {
        setIBenchB(val.tibor_jpy);
      }
    }
  };
  const handlePrinInter = (e) => {
    setIPrincipal(e);
    if (iSpread >= 0) {
      const val = interData.international_principle.find(
        (item) => e >= item.min_principle && e < item.max_principle
      );
      setIBch(val.bank_charges);
      setISpreadB(val.tentative_interest_rate);
    }
  };
  // console.log(interData);
  return (
    <div className="calc_container">
      <div className="calc_title">
        <h2>Trade Finance Calculator</h2>
        <p>
          Quickly estimate and compare your finance cost to plan your financing
          effortlessly.
        </p>
      </div>
      <div className="calc_nav">
        <div className={`calc_button`}>
          <p>Inetrnational</p>
          <button
            onClick={() => setN("i")}
            className={`${calc === "i" ? "active_calc_btn" : ""}`}
          >
            Export/Import Finance
          </button>
        </div>
        <div className="calc_button">
          <p>Domestic</p>
          <button
            onClick={() => setN("d")}
            className={`${calc === "d" ? "active_calc_btn" : ""} `}
          >
            Local LC Bill Discounting
          </button>
        </div>
      </div>
      <div className="calc_currency">
        <h3>Currency</h3>
        <div className="calc_cs">
          {calc === "i" ? (
            <>
              <button
                onClick={() => hanleCurr("USD")}
                className={`${cur === "USD" ? "active_calc_btn" : ""} `}
              >
                USD
              </button>
              <button
                onClick={() => hanleCurr("EURO")}
                className={`${cur === "EURO" ? "active_calc_btn" : ""} `}
              >
                EURO
              </button>
              <button
                onClick={() => hanleCurr("YEN")}
                className={`${cur === "YEN" ? "active_calc_btn" : ""} `}
              >
                YEN
              </button>
            </>
          ) : (
            <button
              onClick={() => hanleCurr("INR")}
              className={`${cur === "INR" ? "active_calc_btn" : ""} `}
            >
              INR
            </button>
          )}
        </div>
      </div>
      <div className="calc_inp_graph">
        <div className="calc_inputs">
          {calc === "i" ? (
            <>
              <div className="calc_f_input">
                <div className="calc_f_input_left">
                  <h4>Normal Cost</h4>
                  <div className="calc_inp_container">
                    <p>Principal</p>
                    <input
                      type="number"
                      value={iPrincipal}
                      onChange={(e) => handlePrinInter(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_f_input_right">
                  <h4>Trade Flair Cost</h4>
                  <div className="calc_inp_container">
                    <input type="text" value={iPrincipal} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Tenor (days)`}</p>
                    <input
                      type="number"
                      value={iTenor}
                      onChange={(e) => handleTenorInter(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" value={iTenor} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Bench Mark Rate (SOFR)`} </p>
                    <input
                      type="number"
                      value={iBench}
                      onChange={(e) => setIBench(e.target.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" value={iBenchB} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Spread`} </p>
                    <input
                      type="number"
                      value={iSpread}
                      onChange={(e) => setISpread(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" value={iSpreadB} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Total RIO/Annum`} </p>
                    <input type="text" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Bank Charges (Documens, Handling, Swift )`} </p>
                    <input type="number" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Total Charges (In ${cur}) )`} </p>
                    <input type="number" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Total Charges (In INR) )`} </p>
                    <input type="number" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="number" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="calc_f_input">
                <div className="calc_f_input_left">
                  <h4>Normal Cost</h4>
                  <div className="calc_inp_container">
                    <p>Principal</p>
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_f_input_right">
                  <h4>Trade Flair Cost</h4>
                  <div className="calc_inp_container">
                    <input type="text" value={principal} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Tenor (days)`}</p>
                    <input
                      type="number"
                      value={tenor}
                      onChange={(e) => setTenor(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" value={tenor} />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Rate Of Intrest`} </p>
                    <input
                      type="number"
                      value={inrest}
                      onChange={(e) => setIntrest(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input
                      type="text"
                      value={inrest > 0 && inrest ? inrestB : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Bank Charges`} </p>
                    <input
                      type="number"
                      value={charges}
                      onChange={(e) => setChargers(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input
                      type="text"
                      value={charges > 0 && charges ? chargesB : ""}
                    />
                  </div>
                </div>
              </div>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Total Cost (In INR) )`} </p>
                    <input type="text" value={total} />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" value={totalB} />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="calc_inp_btns">
            <button>Save Normal Cost</button>
            <button>Save Comparison</button>
          </div>
        </div>
        <div className="calc_graph">
          <div className="calc_graph_top">
            <div className="calc_graph_item">
              <h4>Normal Cost</h4>

              {calc === "i" && <p>In {cur}</p>}
              <p>In INR</p>
            </div>
            <div className="graph_middle_line"></div>
            <div className="calc_graph_item">
              <h4>TradeFlair Cost</h4>
              {calc === "i" && <p>In {cur}</p>}
              <p>In INR</p>
            </div>
          </div>
          <div className="graph_text">
            <h3>Congratulation</h3>
            <p>
              With TradeFlair, you Could save USD XXX / INR XXX on this
              transaction
            </p>
          </div>
          <button>Save Cost Now</button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
