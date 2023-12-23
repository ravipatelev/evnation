import React, { useContext } from "react";
import "./Faqs.css";
import withLayout from "../../withLayout";
import { menuMarginContext } from "../../Layout";

const Faqs = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div className={`text-center comingSoon ${menuMargin && "pageMargin"}`}>
      <span className="textEvGreen">Coming</span>
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default withLayout(Faqs);
