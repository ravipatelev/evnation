import React from "react";
import "./Models.css";
import { Link } from "react-router-dom";
import ModelsData from "../../Constants/ModelsData";

const Models = () => {
  return (
    <div className="container pb-5 px-4">
      <div className="row py-4">
        {ModelsData.map((item) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 nthChild">
              <div className="card h-100">
                <Link to={item.Url} className="text-decoration-none text-dark">
                  <img
                    src={item.ImgSrc}
                    className="card-img-top absolutePaddingBottom"
                    alt={item.Name}
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
