import React, { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);

  return <>{props.children}</>;
};

export default ScrollToTop;
