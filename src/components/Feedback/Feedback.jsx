import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Feedback.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const ContactUs = () => {
  const [values, setValues] = useState({
    Name: "",
    Contact: "",
    Email: "",
    HowDidYouHear: "",
    Message: "",
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
    <div className="container py-4">
      <h1 className="text-center pb-4 mb-3">
        <span className="textEvGreen">Feedback</span>
        <span className="textEvBlue"></span>
      </h1>
      <div className="row">
        <div className="col-md-6 px-5">
          <p className="fw-bold fs-4 text-center pb-3">We're here for you!</p>
          <ProgressiveImage
            src="https://drive.google.com/uc?export=view&id=1zdhL3xWoYQsmGkPn1ELxO4uYBDqE0JCp"
            alt="feedback image"
            className="col-md-12 calcImgWidth"
          />
        </div>
        <div className="col-md-6 px-5">
          <div className="row">
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
                        className="form-control"
                        type="text"
                        placeholder="Mobile Number"
                        name="Contact"
                        value={values.Contact}
                        onChange={handleChange}
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
                      <textarea
                        id="Message"
                        className="form-control"
                        type="text"
                        rows="4"
                        placeholder="Your Feedback"
                        name="Message"
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {!valid && (
                    <button
                      className="btn myButton fw-normal mt-3"
                      type="submit"
                    >
                      Send Feedback
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

export default ContactUs;
