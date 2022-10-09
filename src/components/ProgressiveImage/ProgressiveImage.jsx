import React, { useState, useEffect } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = ({ src, reducedImgSrc, ...props }) => {
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
        <img {...{ src: reducedImgSrc, ...props }} alt={props.alt || "img"} />
      ) : (
        <img {...{ src: src, ...props }} alt={props.alt || "img"} />
      )}
    </div>
  );
};

export default ProgressiveImage;
