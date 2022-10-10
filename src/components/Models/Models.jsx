import React, { useContext } from "react";
import "./Models.css";
import { Link } from "react-router-dom";
import ModelsData from "../../Constants/ModelsData";
import { menuMarginContext } from "../../App";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const Models = () => {
  const [menuMargin] = useContext(menuMarginContext);

  return (
    <div className={`container pb-5 px-4 ${menuMargin && "pageMargin"}`}>
      <h1 className="text-center py-3">
        <span className="textEvGreen">EV</span>{" "}
        <span className="textEvBlue">Models</span>
      </h1>
      <div className="row">
        {ModelsData.map((item) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 nthChild">
              <div className="card h-100">
                <Link to={item.Url} className="text-decoration-none text-dark">
                  <ProgressiveImage
                    src={item.ImgSrc}
                    reducedImgSrc={item.reducedImgSrc}
                    className="card-img-top absolutePaddingBottom"
                    alt={"okinawa electric scooter model " + item.Name}
                  />
                  <div className="fixed-bottom position-absolute zIndexM">
                    <div className="card-body">
                      <p className="card-text">
                        Range: <b>{item.RangeCharge}</b>
                      </p>
                      <p className="card-text">
                        Top Speed: <b>{item.Speed}</b>
                      </p>
                      <p className="card-text">
                        Battery: <b>{item.BatteryShort}</b>
                      </p>
                    </div>
                    <div className="card-footer bg-dark text-center priceColor fw-bold">
                      {item.Name}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
