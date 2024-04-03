import React, { useState } from "react";
import "./calc.scss";
const Calc = () => {
  const [activeNav, setActiveNav] = useState("inter");
  const [cur, setCur] = useState("inr");
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
            onClick={() => setActiveNav("inter")}
            className={`${activeNav == "inter" ? "active_calc_btn" : ""}`}
          >
            Export/Import Finance
          </button>
        </div>
        <div className="calc_button">
          <p>Domestic</p>
          <button
            onClick={() => setActiveNav("dom")}
            className={`${activeNav == "dom" ? "active_calc_btn" : ""} `}
          >
            Local LC Bill Discounting
          </button>
        </div>
      </div>
      <div className="calc_currency">
        <h3>Currency</h3>
        <div className="calc_cs">
          <button
            onClick={() => setCur("usd")}
            className={`${cur == "usd" ? "active_calc_btn" : ""} `}
          >
            USD
          </button>
          <button
            onClick={() => setCur("euro")}
            className={`${cur == "eur" ? "active_calc_btn" : ""} `}
          >
            EURO
          </button>
          <button
            onClick={() => setCur("yan")}
            className={`${cur == "yan" ? "active_calc_btn" : ""} `}
          >
            YEN
          </button>
          <button
            onClick={() => setCur("inr")}
            className={`${cur == "inr" ? "active_calc_btn" : ""} `}
          >
            INR
          </button>
        </div>
      </div>
      <div className="calc_inp_graph">
        <div className="calc_inputs">
          <div className="calc_f_input">
            <div className="calc_f_input_left">
              <h4>Normal Cost</h4>
              <div className="calc_inp_container">
                <p>Principal</p>
                <input type="text" />
              </div>
            </div>
            <div className="calc_f_input_right">
              <h4>Trade Flair Cost</h4>
              <div className="calc_inp_container">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="calc_s_input">
            <div className="calc_s_input_left">
              <div className="calc_inp_container">
                <p>Tenor</p>
                <input type="text" />
              </div>
            </div>
            <div className="calc_s_input_right">
              <div className="calc_inp_container">
                <input type="text" />
              </div>
            </div>
          </div>
          {activeNav == "inter" ? (
            <>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Bench Mark Rate (SOFR)`} </p>
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
                    <p>{`Spread`} </p>
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
                    <p>{`Total Charges (In USD) )`} </p>
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
                    <p>{`Total Charges (In INR) )`} </p>
                    <input type="text" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="calc_s_input">
                <div className="calc_s_input_left">
                  <div className="calc_inp_container">
                    <p>{`Rate Of Intrest`} </p>
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
                    <p>{`Bank Charges`} </p>
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
                    <p>{`Total Cost (In INR) )`} </p>
                    <input type="text" />
                  </div>
                </div>
                <div className="calc_s_input_right">
                  <div className="calc_inp_container">
                    <input type="text" />
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
              <p>In USD</p>
              <p>In INR</p>
            </div>
            <div className="graph_middle_line"></div>
            <div className="calc_graph_item">
              <h4>TradeFlair Cost</h4>
              <p>In USD</p>
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
