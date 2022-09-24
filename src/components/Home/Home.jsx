import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModelsData from "../../Constants/ModelsData";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 672 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 672, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mt-3 pb-5">
      <div className="row mb-4 margin576">
        <div className="col-lg-6 col-sm-12 my-auto pb-5 text-center">
          <div className="mt-4">
            <h3>
              Authorized District Dealer <br /> of Okinawa Scooters
            </h3>
            <ProgressiveImage
              src="https://drive.google.com/uc?export=view&id=1AL5gb1HVgoQYGiyVo4JByO1kDkuQQyeg"
              alt="okinawa logo"
              className="w-40"
            />
          </div>
          <h1 className="p-4">
            Let's <span className="textEvGreen">Electrify</span> your ride
            <br /> with <span className="textEvBlue">battery</span> !!
          </h1>
        </div>

        <img
          src="https://okinawascooters.com/wp-content/uploads/2022/03/okhi-90-red.jpg"
          alt="front page img"
          className="col-lg-6 col-sm-12 img-fluid"
        />
      </div>

      <Carousel responsive={responsive} infinite={true}>
        {ModelsData.map((item) => {
          return (
            <div className="card h-100 mx-4">
              <Link to={item.Url} className="text-decoration-none text-dark">
                <img
                  src={item.ImgSrc}
                  className="card-img-top absolutePaddingBottomHome"
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
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
