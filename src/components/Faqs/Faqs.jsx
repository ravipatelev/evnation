import React, { useContext } from "react";
import "./Faqs.css";
import { menuMarginContext } from "../../App";

const Faqs = () => {
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

export default Faqs;
