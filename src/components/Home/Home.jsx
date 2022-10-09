import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModelsData from "../../Constants/ModelsData";
import S3_IMAGES from "../../Constants/S3Images";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { menuMarginContext } from "../../App";

const Home = () => {
  const [menuMargin] = useContext(menuMarginContext);
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
    <div
      className={
        menuMargin ? "container mt-3 pb-5 pageMargin" : "container mt-3 pb-5"
      }
    >
      <div className="row mb-4 margin576">
        <div className="col-lg-6 col-sm-12 my-auto textBoxPadding text-center">
          <div className="mt-4">
            <h3>
              Authorized District Dealer <br /> of Okinawa Scooters
            </h3>
            <ProgressiveImage
              src={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN +
                "/" +
                S3_IMAGES.S3_MAIN.OKINAWA_LOGO_RED +
                ".png"
              }
              reducedImgSrc={
                S3_IMAGES.GENEREL.S3_PATH +
                "/" +
                S3_IMAGES.S3_FOLDER.MAIN_LIGHT +
                "/" +
                S3_IMAGES.S3_MAIN.OKINAWA_LOGO_RED +
                ".png"
              }
              alt="electric scooter of okinawa logo"
              className="w-40"
            />
          </div>
          <h1 className="p-4">
            Let's <span className="textEvGreen">Electrify</span> your ride
            <br /> with <span className="textEvBlue">battery</span> !!
          </h1>
        </div>
        <div className="col-lg-6 col-sm-12">
          <ProgressiveImage
            src={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MODELS +
              "/" +
              S3_IMAGES.S3_MODELS.OKHI_90_RED +
              ".png"
            }
            reducedImgSrc={
              S3_IMAGES.GENEREL.S3_PATH +
              "/" +
              S3_IMAGES.S3_FOLDER.MODELS_LIGHT +
              "/" +
              S3_IMAGES.S3_MODELS.OKHI_90_RED +
              ".png"
            }
            alt="front page okinawa electric scooter model okhi-90"
            className="img-fluid"
          />
        </div>
      </div>

      <Carousel responsive={responsive} infinite={true}>
        {ModelsData.map((item, index) => {
          return (
            <div className="card h-100 mx-4" key={index}>
              <Link to={item.Url} className="text-decoration-none text-dark">
                <ProgressiveImage
                  src={item.ImgSrc}
                  reducedImgSrc={item.reducedImgSrc}
                  className="card-img-top absolutePaddingBottomHome mt-3"
                  alt={"okinawa electric scooter model " + item.Name}
                />
                <div className="fixed-bottom position-absolute zIndexM text-start">
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
