import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./BookFreeTestRide.css"
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const BookFreeTestRide = () => {
  const [values, setValues] = useState({
    Name: "",
    Contact: "",
    Email: "",
    HowDidYouHear: "",
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
        "ev_nation_gmail",
        "template_c7plaon",
        e.target,
        "SBgp-fY6Jnv4W6GN0"
      );
    }
    setSubmitted(true);
  };

  return (
    <div className="container freeRideContainer py-4">
      <h1 className="text-center pb-4 mb-3">Book{" "}
        <span className="textEvGreen">Free</span>{" "}Test{" "}
        <span className="textEvBlue">Ride</span>
      </h1>
      <div className="row">
        <div className="col-md-6 px-5">
          <p className="fw-bold fs-4 text-center pb-3">Let's drive it!</p>
          <ProgressiveImage
            src="https://drive.google.com/uc?export=view&id=1cIuEDjFMj9lExM2N8MFOa9-Yrbt6KWhs"
            alt="contact us image"
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
                    <button className="btn btn-info mt-3" type="submit">
                      Book now
                    </button>
                  )}
                </div>
              )}
              {submitted && valid && (
                <div>
                  <p>We have received your response.</p>
                  <Link to="/" className="btn btn-info">
                    Return to Home
                  </Link>
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