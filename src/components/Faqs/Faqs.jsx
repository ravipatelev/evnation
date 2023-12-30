import React, { useContext } from "react";
import "./Faqs.css";
import withLayout from "../../withLayout";

const Faqs = () => {
  return (
    <div className="text-center comingSoon">
      <span className="textEvGreen">Coming</span>
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default withLayout(Faqs);
