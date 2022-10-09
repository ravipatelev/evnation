import React, { useContext } from "react";
import "./AboutUs.css";
import { menuMarginContext } from "../../App";

const AboutUs = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div
      className={
        menuMargin
          ? "text-center comingSoon pageMargin"
          : "text-center comingSoon"
      }
    >
      <span className="textEvGreen">Coming</span>{" "}
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default AboutUs;
