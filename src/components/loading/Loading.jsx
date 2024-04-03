import React from "react";
import "./loading.scss";
const Loading = ({ title }) => {
  return (
    <div className="loader_container">
      {title ? <h2>{title}</h2> : ""}
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
