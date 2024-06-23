import React from "react";
import "./loadingForm.scss";
const LoadingForm = ({ title }) => {
  return (
    <div className="loader_container_form">
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

export default LoadingForm;
