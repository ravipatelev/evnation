import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ContactUs.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { menuMarginContext } from "../../App";
import S3_IMAGES from "../../Constants/S3Images";

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
        "ev_nation_gmail",
        "template_c7plaon",
        e.target,
        "SBgp-fY6Jnv4W6GN0"
      );
    }
    setSubmitted(true);
  };

  return (
    <div
      className={`container contactUsContainer pt-3 pb-5 ${
        menuMargin && "pageMargin"
      }`}
    >
      <h1 className="text-center contactUsContainerh1 pb-4 mb-3">
        <span className="textEvGreen">Contact</span>{" "}
        <span className="textEvBlue">Us</span>
      </h1>
      <div className="row">
        <div className="col-md-6 px-5">
          <p className="fw-bold fs-4 text-center pb-3 contactUsContainerp">
            We're here for you!
          </p>
          <ProgressiveImage
            src={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN +
              "/" +
              S3_IMAGES.S3_MAIN.CONTACT_US +
              ".jpg"
            }
            reducedImgSrc={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
              "/" +
              S3_IMAGES.S3_MAIN.CONTACT_US +
              ".jpg"
            }
            alt="contact us img"
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
                        id="HowDidYouHear"
                        className="form-control"
                        type="text"
                        placeholder="How did you hear about us?"
                        name="HowDidYouHear"
                        value={values.HowDidYouHear}
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
                        placeholder="Message"
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
                        Send Message
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
                      <span className="textEvGreen">Thank</span>{" "}
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

export default ContactUs;
