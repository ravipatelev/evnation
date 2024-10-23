import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import S3_IMAGES from "../../Constants/S3Images";

const Header = () => {
  const handleCollapse = () => {
    var nav = document.getElementById("collapseExample");
    nav.classList.remove("show");
  };

  return (
    <div className=" navbar navbar-expand-lg ms-5 zIndex">
      <div className="container container-fluid position-static py-1 d-flex">
        <div className="text-decoration-none w-25">
          <NavLink to="/" onClick={handleCollapse}>
            <ProgressiveImage
              src={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN +
                "/" +
                S3_IMAGES.S3_MAIN.EVNATION_LOGO +
                ".png"
              }
              reducedImgSrc={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
                "/" +
                S3_IMAGES.S3_MAIN.EVNATION_LOGO +
                ".png"
              }
              alt="evnation logo"
              className="evLogo"
            />
          </NavLink>
        </div>
        <div>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white fs-1"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapseExample"
        >
          <ul className="navbar-nav justify-content-center align-items-center">
            <li className="">
              <NavLink
                to="/"
                className="nav-link headerNavLink text-white home992 pb-0"
              >
                <span className="">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ev-calculator"
                className="nav-link headerNavLink text-white pb-0"
              >
                <span className="">Savings Calculator</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/models"
                className="nav-link headerNavLink text-white pb-0"
              >
                <span className="">Models</span>
              </NavLink>
            </li>
            <li className="mx-4 freeRide992">
              <NavLink
                to="/book-free-test-ride"
                type="button"
                className="btn myButton"
              >
                Book Free Test Drive
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
