import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="" />
      <Link className="navbar-brand" to={"/"}>
        Movies A2Z
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
    </nav>
  );
};

export default nav;
