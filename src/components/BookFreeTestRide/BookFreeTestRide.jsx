import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./BookFreeTestRide.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { menuMarginContext } from "../../App";
import S3_IMAGES from "../../Constants/S3Images";

const BookFreeTestRide = () => {
  const [menuMargin] = useContext(menuMarginContext);
  const [values, setValues] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Area: "",
    Message: "I would like to book free test drive! ",
  });
  const [initialState, setInitialState] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.Name && values.Contact) {
      setInitialState(false);
      setValid(true);
      emailjs.sendForm(
        "EVnation_Service_ID",
        "EVnation_Template_ID",
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
    }
    setSubmitted(true);
  };

  return (
    <div
      className={`container freeRideContainer py-4 pb-5 ${
        menuMargin && "pageMargin"
      }`}
    >
      <h1 className="text-center freeRideContainerh1 pb-4 mb-3">
        Book <span className="textEvGreen">Free</span> Test
        <span className="textEvBlue">Drive</span>
      </h1>
      <div className="row">
        <div className="col-md-6 px-5">
          <p className="fw-bold fs-4 text-center pb-3 freeRideContainerp">
            Let's drive it!
          </p>
          <ProgressiveImage
            src={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN +
              "/" +
              S3_IMAGES.S3_MAIN.FREE_DRIVE +
              ".jpg"
            }
            reducedImgSrc={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
              "/" +
              S3_IMAGES.S3_MAIN.FREE_DRIVE +
              ".jpg"
            }
            alt="free test drive img"
            className="col-md-12 calcImgWidth"
          />
        </div>
        <div className="col-md-6 px-5">
          <div className="row">
            {/* <div className="col-md-2"></div> */}
            <form className="col-md-12" onSubmit={handleSubmit}>
              {initialState && (
                <div>
                  {!valid && (
                    <div className="mb-3">
                      <input
                        id="Name"
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="Name"
                        value={values.Name}
                        onChange={handleChange}
                      />
                      {submitted && !values.Name && (
                        <span className="text-danger px-1">
                          Please enter your Name
                        </span>
                      )}
                    </div>
                  )}

                  {!valid && (
                    <div className="mb-3">
                      <input
                        id="Contact"
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        placeholder="Mobile Number"
                        name="Contact"
                        value={values.Contact}
                      />
                      {submitted && !values.Contact && (
                        <span className="text-danger px-1">
                          Please enter your Mobile Number
                        </span>
                      )}
                    </div>
                  )}

                  {!valid && (
                    <div className="mb-3">
                      <input
                        id="Email"
                        className="form-control"
                        type="text"
                        placeholder="Email Id"
                        name="Email"
                        value={values.Email}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {!valid && (
                    <div className="mb-3">
                      <input
                        id="Area"
                        className="form-control"
                        type="text"
                        placeholder="Area"
                        name="Area"
                        value={values.Area}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {!valid && (
                    <div className="mb-3">
                      <textarea
                        id="Message"
                        className="form-control"
                        type="text"
                        rows="4"
                        name="Message"
                        value={values.Message}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {!valid && (
                    <div className="text-center">
                      <button className="btn myButton mt-3" type="submit">
                        Book now
                      </button>
                    </div>
                  )}
                </div>
              )}
              {submitted && valid && (
                <div className="text-center">
                  <div className="fs-4">
                    <p>We have received your response.</p>
                    <p>
                      <span className="textEvGreen">Thank</span>
                      <span className="textEvBlue">you!</span>
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link to="/" className="btn myButton">
                      Return to Home
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFreeTestRide;
