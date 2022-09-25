import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { menuMarginContext } from "../../App";

const Header = () => {
  const [menuMargin, setMenuMargin] = useContext(menuMarginContext);
  const [navClassRemove, setNavClassRemove] = useState(true);
  const [navClassAdd, setNavClassAdd] = useState(true);
  const [btnClassAdd, setBtnClassAdd] = useState(true);

  const handleCollapse = () => {
    menuMargin && setMenuMargin(!menuMargin);
    navClassRemove && setNavClassRemove(!navClassRemove);
    navClassAdd && setNavClassAdd(!navClassAdd);
    btnClassAdd && setBtnClassAdd(!btnClassAdd);

    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("menuBtn");
    nav.classList.remove("show");
    nav.classList.add("collapse");
    btn.classList.add("collapsed");
  };

  const handleMenuMargin = () => {
    setMenuMargin(!menuMargin);
    setNavClassRemove(!navClassRemove);
    setNavClassAdd(!navClassAdd);
    setBtnClassAdd(!btnClassAdd);

    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("menuBtn");
    navClassRemove ? nav.classList.remove("show") : nav.classList.add("show");
    navClassAdd
      ? nav.classList.add("collapse")
      : nav.classList.remove("collapse");
    btnClassAdd
      ? btn.classList.add("collapsed")
      : btn.classList.remove("collapsed");
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
            // data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuMargin}
          >
            <i className="bi bi-list text-white fs-1"></i>
          </button>
        </div>
        <div
          className="navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav justify-content-center">
            <li>
              <NavLink
                onClick={handleMenuMargin}
                to="/"
                className="nav-link text-white fromLeft home992"
              >
                <span className="hoverMedia">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenuMargin}
                to="/ev_calculator"
                className="nav-link text-white fromLeft"
              >
                <span className="hoverMedia">Savings Calculator</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenuMargin}
                to="/models"
                className="nav-link text-white fromLeft"
              >
                <span className="hoverMedia">Models</span>
              </NavLink>
            </li>
            <li className="mx-4 freeRide992">
              <NavLink
                onClick={handleMenuMargin}
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
