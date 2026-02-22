import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        <img src="/Logo.png" alt="SVR Logo" className="loader-logo" />
        <h2 className="loader-title">Shree Vishwanath Roadways</h2>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
