import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ModelsData from "../../Constants/ModelsData";
import S3_IMAGES from "../../Constants/S3Images";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const Footer = () => {
  return (
    <div className="container overflow-hidden">
      <footer className="row my-5 text-white marginTop992">
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 mb-2 d-flex flex-column">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 text-white text-decoration-none"
          >
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
              className="footerLogo"
            />
          </Link>
          <p className="text-white me-5 margin768">
            EVnation is committed to create awareness regarding Electrical
            (Battery) Scooters and helping India GO GREEN !!
            <br /> Let's Electrify your ride with battery !!
          </p>
          <div className="fs-5 mt-1">
            <a
              href="https://wa.me/918233024290"
              target="_blank"
              rel="noreferrer"
              className="me-5 margin399"
            >
              <i className="bi bi-whatsapp text-white myBi"></i>
            </a>
            <a
              href="https://wa.me/918233024290"
              target="_blank"
              rel="noreferrer"
              className="me-5 margin399"
            >
              <i className="bi bi-facebook text-white myBi"></i>
            </a>
            <a
              href="https://wa.me/918233024290"
              target="_blank"
              rel="noreferrer"
              className="me-5 margin399"
            >
              <i className="bi bi-instagram text-white myBi"></i>
            </a>
            <a
              href="https://wa.me/918233024290"
              target="_blank"
              rel="noreferrer"
              className="me-5 margin399"
            >
              <i className="bi bi-twitter text-white myBi"></i>
            </a>
          </div>
          <div className="mt-4 marginBottom992">
            <p>Authorized District Dealer of Okinawa Scooters</p>
            <ProgressiveImage
              src={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN +
                "/" +
                S3_IMAGES.S3_MAIN.OKINAWA_LOGO_WHITE +
                ".png"
              }
              reducedImgSrc={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
                "/" +
                S3_IMAGES.S3_MAIN.OKINAWA_LOGO_WHITE +
                ".png"
              }
              alt="electric scooter of okinawa logo"
              className="footerLogo"
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-3 col399">
          <h5 className="fw-bold myBorder mb-4">Our Products</h5>
          {ModelsData.map((item, index) => {
            return (
              <ul className="nav flex-column" key={index}>
                <li className="nav-item mb-2 text-start">
                  <Link to={item.Url} className="nav-link p-0 text-white">
                    {item.Name}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-3 col399">
          <h5 className="fw-bold myBorder mb-4">
            <span>Explore</span>
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 text-start">
              <Link to="/" className="nav-link p-0 text-white">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 text-start">
              <Link to="/about-us" className="nav-link p-0 text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item mb-2 text-start">
              <Link to="/blogs" className="nav-link p-0 text-white">
                Blogs
              </Link>
            </li>
            <li className="nav-item mb-2 text-start">
              <Link to="/faqs" className="nav-link p-0 text-white">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2 text-start">
              <Link to="/privacy-policy" className="nav-link p-0 text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item mb-2 text-start">
              <Link to="/tnc" className="nav-link p-0 text-white">
                TnC
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3 d-flex flex-column col399">
          <Link to="/contact-us" className="nav-link text-white">
            <h5 className="fw-bold myBorder mb-4">
              <span>Contact Us</span>
            </h5>
          </Link>
          <ul className="nav flex-column textToBottom">
            <div className="d-flex mb-3">
              <a
                href="tel:918233024290"
                className="d-flex text-white text-decoration-none myHover"
              >
                <li>
                  <i className="bi bi-telephone text-white me-3"></i>
                </li>
                <li className="text-start mob399">+91 82330 24290</li>
              </a>
            </div>
            <div className="d-flex mb-3">
              <a
                href="mailto:evnationkota@gmail.com"
                className="d-flex text-white text-decoration-none myHover"
              >
                <li>
                  <i className="bi bi-envelope text-white me-3"></i>
                </li>
                <li className="text-start">evnationkota@gmail.com</li>
              </a>
            </div>
            <div className="d-flex mb-3 myHover position768">
              <a
                href="https://maps.app.goo.gl/F33SZH7M4HWp1MDr5"
                target="_blank"
                rel="noreferrer"
                className="d-flex text-white text-decoration-none myHover"
              >
                <li>
                  <i className="bi bi-geo-alt text-white me-3"></i>
                </li>
                <li className="text-start">
                  15, Vallabh Nagar, Near Ghode Wale Baba Chauraha,
                  Kota(Rajasthan), 324007
                </li>
              </a>
            </div>
          </ul>
          {/* <p>Timings: 9:00 AM - 8:30 PM</p> */}
          <div className="text-end position768 feedback576">
            <Link to="/feedback" className="btn myButton">
              FEEDBACK
            </Link>
          </div>
        </div>
        <p className="text-white text-center text-muted mt-3">
          Copyrights &copy; 2022 All Rights Reserved by evnation.in
        </p>
      </footer>
    </div>
  );
};

export default Footer;
