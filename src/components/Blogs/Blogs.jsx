import React, { useContext } from "react";
import withLayout from "../../withLayout";

const Blogs = () => {
  return (
    <div className="text-center comingSoon">
      <span className="textEvGreen">Coming</span>
      <span className="textEvBlue">Soon!</span>
    </div>
  );
};

export default withLayout(Blogs);
