import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./Feedback.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

import S3_IMAGES from "../../Constants/S3Images";
import withLayout from "../../withLayout";
import { menuMarginContext } from "../../Layout";

const ContactUs = () => {
  const [menuMargin] = useContext(menuMarginContext);
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
      className={`container feedbackContainer pt-3 pb-5 ${
        menuMargin && "pageMargin"
      }`}
    >
      <h1 className="text-center pb-4 mb-3">
        <span className="textEvGreen">Feedback</span>
        <span className="textEvBlue"></span>
      </h1>
      <div className="row">
        <div className="col-md-6 px-5">
          <ProgressiveImage
            src={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN +
              "/" +
              S3_IMAGES.S3_MAIN.FEEDBACK +
              ".jpg"
            }
            reducedImgSrc={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
              "/" +
              S3_IMAGES.S3_MAIN.FEEDBACK +
              ".jpg"
            }
            alt="feedback img"
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
                    <div className="text-center">
                      <button
                        className="btn myButton fw-normal mt-3"
                        type="submit"
                      >
                        Send Feedback
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

export default withLayout(ContactUs);
