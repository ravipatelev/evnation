import React, { useContext } from "react";
import { menuMarginContext } from "../../App";

const Blogs = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div className={`text-center comingSoon ${menuMargin && "pageMargin"}`}>
      <span className="textEvGreen">Coming</span>{" "}
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default Blogs;
