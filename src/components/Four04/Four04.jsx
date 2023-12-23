import React, { useContext } from "react";
import withLayout from "../../withLayout";
import { menuMarginContext } from "../../Layout";

const Four04 = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div className={`text-center comingSoon ${menuMargin && "pageMargin"}`}>
      <span className="textEvGreen">Page</span>
      <span className="textEvBlue">not found!</span>
    </div>
  );
};

export default withLayout(Four04);
