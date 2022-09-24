import React, { useState, useEffect } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = ({ src, ...props }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoader(false);
    };
  }, [src]);

  return (
    <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <img {...{ src: src, ...props }} alt={props.alt || "image"} />
      )}
    </div>
  );
};

export default ProgressiveImage;
