import React, { useState } from "react";
import "./coin.scss";
import dolar from "../../images/dolar.svg";
const Coin = () => {
  return (
    <div className={`coin `}>
      <img src={dolar} className="side front" alt="" />
      <div className="side back">USD$</div>
    </div>
  );
};

export default Coin;
