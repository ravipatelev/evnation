import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const Header = () => {
  const handleCollapse = () => {
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("menuBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };

  return (
    <nav className="navbar navbar-expand-lg ms-5 zIndex">
      <div className="container-fluid position-static py-1 d-flex">
        <div className="text-decoration-none w-25">
          <NavLink to="/" onClick={handleCollapse}>
            <ProgressiveImage
              src="https://drive.google.com/uc?export=view&id=1Cy07IA9ERJ0knoMTxZ9HOA8Y2ACoadI-"
              alt="logo"
              className="evLogo"
            />
          </NavLink>
        </div>
        <div>
          <button
            id="menuBtn"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white fs-1"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav justify-content-center">
            <li>
              <NavLink
                onClick={handleCollapse}
                to="/"
                className="nav-link text-white fromLeft home992"
              >
                <span className="hoverMedia">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCollapse}
                to="/ev_calculator"
                className="nav-link text-white fromLeft"
              >
                <span className="hoverMedia">Savings Calculator</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleCollapse}
                to="/models"
                className="nav-link text-white fromLeft"
              >
                <span className="hoverMedia">Models</span>
              </NavLink>
            </li>
            <li className="mx-4 freeRide992">
              <NavLink
                onClick={handleCollapse}
                to="/book_free_test_ride"
                type="button"
                className="btn myButton"
              >
                Book Free Test Drive
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
