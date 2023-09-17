import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: "white" }}
            >
              Home
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Features
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Pricing
            </a>
            <a
              className="nav-link disabled"
              aria-disabled="true"
              style={{ color: "white" }}
            >
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
