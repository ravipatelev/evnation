import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ContactUs.css";
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
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 px-5">
          <p className="fw-bold fs-4 text-center pb-3">We're here for you!</p>
          {/* <ProgressiveImage
          src="https://drive.google.com/uc?export=view&id=1-V82H21MWb7Sil-_bQlhT-KjsUFSNFyG"
          alt="contact us image"
          className="col-md-12"
        /> */}
          {/* <ProgressiveImage
          src="https://drive.google.com/uc?export=view&id=12t_diNLhqEiL1sX_JFmiDLBEvW-nTpHV"
          alt="contact us image"
          className="col-md-12"
        /> */}
          {/* <ProgressiveImage
          src="https://drive.google.com/uc?export=view&id=1Q24q-1ZvbrGwKU8jdNbNDInzDpt59Wgq"
          alt="contact us image"
          className="col-md-12"
        /> */}
          <ProgressiveImage
            src="https://drive.google.com/uc?export=view&id=1zdhL3xWoYQsmGkPn1ELxO4uYBDqE0JCp"
            alt="contact us image"
            className="col-md-12"
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
                    <button className="btn myButton fw-normal mt-3" type="submit">
                      Send Message
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
