import React, { useContext } from "react";
import "./AboutUs.css";
import withLayout from "../../withLayout";

const AboutUs = () => {
  return (
    <div className="text-center comingSoon">
      <span className="textEvGreen">Coming</span>
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default withLayout(AboutUs);
