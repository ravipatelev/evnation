import React, { useContext } from "react";
import "./AboutUs.css";
import withLayout from "../../withLayout";
import { menuMarginContext } from "../../Layout";

const AboutUs = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div className={`text-center comingSoon ${menuMargin && "pageMargin"}`}>
      <span className="textEvGreen">Coming</span>
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default withLayout(AboutUs);
