import React, { useState } from "react";
import "./EvCalculator.css";
import ModelsData from "../../Constants/ModelsData";
import ModelsData2 from "../../Constants/ModelsData2";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

const EvCalculator = () => {
  const [values, setValues] = useState({
    FuelPrice: "",
    AvgMilage: "",
    AvgDailyKms: "",
    AvgYearlyMaintenance: "",
    Model: "",
  });
  const [initialState, setInitialState] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [costPerKmEv, setCostPerKmEv] = useState(Number);
  const [annualFuelCostEv, setAnnualFuelCostEv] = useState(Number);
  const [costPerKmCv, setCostPerKmCv] = useState(Number);
  const [annualFuelCostCv, setAnnualFuelCostCv] = useState(Number);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.FuelPrice &&
      values.AvgMilage &&
      values.AvgDailyKms &&
      values.AvgYearlyMaintenance &&
      values.Model &&
      values.Model !== "Select"
    ) {
      setInitialState(false);
      setValid(true);
      setCostPerKmCv(values.FuelPrice / values.AvgMilage);
      setAnnualFuelCostCv(
        (values.FuelPrice / values.AvgMilage) * values.AvgDailyKms * 365 +
          parseInt(values.AvgYearlyMaintenance)
      );
      if (values.Model === "OKHI-90") {
        setCostPerKmEv(
          (ModelsData2.Okhi90.Battery / ModelsData2.Okhi90.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.Okhi90.Battery / ModelsData2.Okhi90.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "IPraise+") {
        setCostPerKmEv(
          (ModelsData2.IPraisePlus.Battery /
            ModelsData2.IPraisePlus.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.IPraisePlus.Battery /
            ModelsData2.IPraisePlus.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "PraisePro") {
        setCostPerKmEv(
          (ModelsData2.PraisePro.Battery / ModelsData2.PraisePro.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.PraisePro.Battery / ModelsData2.PraisePro.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "Ridge+") {
        setCostPerKmEv(
          (ModelsData2.RidgePlus.Battery / ModelsData2.RidgePlus.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.RidgePlus.Battery / ModelsData2.RidgePlus.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "R30") {
        setCostPerKmEv(
          (ModelsData2.R30.Battery / ModelsData2.R30.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.R30.Battery / ModelsData2.R30.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "Lite") {
        setCostPerKmEv(
          (ModelsData2.Lite.Battery / ModelsData2.Lite.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.Lite.Battery / ModelsData2.Lite.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      } else if (values.Model === "DUAL55AH") {
        setCostPerKmEv(
          (ModelsData2.Dual55ah.Battery / ModelsData2.Dual55ah.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit
        );
        setAnnualFuelCostEv(
          (ModelsData2.Dual55ah.Battery / ModelsData2.Dual55ah.RangeCharge) *
            ModelsData2.Generel.ElectricityChargePerUnit *
            values.AvgDailyKms *
            365
        );
      }
    }
    setSubmitted(true);
  };

  const startNewCalculation = () => {
    setInitialState(true);
    setValid(false);
    setSubmitted(false);
    setValues(false);
  };

  return (
    <div className="container calcContainer pt-3 pb-5 mb-3">
      <h1 className="text-center pb-4 mb-2">
        <span className="textEvGreen">Savings</span>{" "}
        <span className="textEvBlue">Calculator</span>
      </h1>
      <form className="" onSubmit={handleSubmit}>
        {initialState && (
          <div className="row">
            <div className="col-md-6 px-5">
              <ProgressiveImage
                src="https://drive.google.com/uc?export=view&id=1GVWQT6CNJ5rS6EWECOQmyqiquV2NNn8T"
                alt="contact us image"
                className="calcImgWidth"
              />
            </div>
            <div className="col-md-6 px-5">
              {!valid && (
                <div className="mb-3">
                  <input
                    id="FuelPrice"
                    className="form-control"
                    type="number"
                    placeholder="Petrol Price"
                    name="FuelPrice"
                    value={values.FuelPrice}
                    onChange={handleChange}
                  />
                  {submitted && !values.FuelPrice && (
                    <span className="text-danger px-1">
                      Please Enter Fuel Price
                    </span>
                  )}
                </div>
              )}

              {!valid && (
                <div className="mb-3">
                  <input
                    id="AvgMilage"
                    className="form-control"
                    type="number"
                    placeholder="Average Mileage (km/litre)"
                    name="AvgMilage"
                    value={values.AvgMilage}
                    onChange={handleChange}
                  />
                  {submitted && !values.AvgMilage && (
                    <span className="text-danger px-1">
                      Please Enter Average Mileage
                    </span>
                  )}
                </div>
              )}

              {!valid && (
                <div className="mb-3">
                  <input
                    id="AvgDailyKms"
                    className="form-control"
                    type="number"
                    placeholder="Average Daily Kilometers"
                    name="AvgDailyKms"
                    value={values.AvgDailyKms}
                    onChange={handleChange}
                  />
                  {submitted && !values.AvgDailyKms && (
                    <span className="text-danger px-1">
                      Please Enter Average Daily Kms
                    </span>
                  )}
                </div>
              )}

              {!valid && (
                <div className="mb-3">
                  <input
                    id="AvgYearlyMaintenance"
                    className="form-control"
                    type="number"
                    placeholder="Average Yearly Maintenance Cost"
                    name="AvgYearlyMaintenance"
                    value={values.AvgYearlyMaintenance}
                    onChange={handleChange}
                  />
                  {submitted && !values.AvgYearlyMaintenance && (
                    <span className="text-danger px-1">
                      Please Enter Average Yearly Maintenance
                    </span>
                  )}
                </div>
              )}

              {!valid && (
                <div className="mb-3">
                  <select
                    className="form-control"
                    id="model"
                    name="Model"
                    value={values.Model}
                    onChange={handleChange}
                  >
                    <option className="form-control">Select EV Model</option>
                    {ModelsData.map((item) => (
                      <option className="form-control">{item.Name}</option>
                    ))}
                  </select>
                  {submitted && !values.Model && (
                    <span className="text-danger px-1">
                      Please Select EV Model
                    </span>
                  )}
                </div>
              )}

              {!valid && (
                <button className="btn myButton fw-normal mt-3" type="submit">
                  Compare
                </button>
              )}
            </div>
          </div>
        )}
        <div>
          {submitted && valid && (
            <div className="row fs-p">
              <div className="col-xl-2 col-lg-1 col-md-0"></div>
              <div className="bgLightBlue p-4 rounded col-xl-8 col-lg-10 col-md-12">
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-0">
                    <table className="table m-3 text-end table-borderless mydNone">
                      <thead>
                        <tr>
                          <th scope="col" className="opacity-0">
                            <div className="row px-1 centerVertically">
                              <div className="col-md-3">
                                <i className="bi bi-fuel-pump fs-2"></i>
                              </div>
                              <div className="col-md-9">
                                Conventional Vehicle
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Cost per km</th>
                        </tr>
                        <tr>
                          <th scope="row">Annual Fuel Cost</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="col-md-4 col-sm-4 col-6 table2">
                    <table className="table m-3 table-bordered text-center">
                      <thead>
                        <tr className="bgYellowGradient">
                          <th scope="col">
                            <div className="row px-1 centerVertically">
                              <div className="col-md-3">
                                <i className="bi bi-fuel-pump fs-2"></i>
                              </div>
                              <div className="col-md-9">
                                Conventional <br /> Vehicle
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" valign="middle">
                            <small className="table1dNone fs-7">
                              Cost per km <br />
                            </small>
                            {Math.round((costPerKmCv + Number.EPSILON) * 100) /
                              100}
                          </th>
                        </tr>
                        <tr className="fs-5">
                          <th scope="row" valign="middle">
                            <small className="table1dNone fs-7">
                              Annual Fuel Cost <br />
                            </small>
                            {Math.round(
                              (annualFuelCostCv + Number.EPSILON) * 100
                            ) / 100}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-md-4 col-sm-4 col-6 table2">
                    <table className="table m-3 table-bordered text-center">
                      <thead className="table-bordered">
                        <tr className="bgGreenGradient">
                          <th scope="col text-center">
                            <div className="row px-1 centerVertically">
                              <div className="col-md-1"></div>
                              <div className="col-md-3">
                                <i className="bi bi-ev-station fs-2"></i>
                              </div>
                              <div className="col-md-6">Electric <br /> Vehicle</div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" valign="middle">
                            <small className="table1dNone fs-7">
                              Cost per km <br />
                            </small>
                            {Math.round((costPerKmEv + Number.EPSILON) * 100) /
                              100}
                          </th>
                        </tr>
                        <tr className="fs-5">
                          <th scope="row fs-4" valign="middle">
                            <small className="table1dNone fs-7">
                              Annual Fuel Cost <br />
                            </small>
                            {Math.round(
                              (annualFuelCostEv + Number.EPSILON) * 100
                            ) / 100}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row centerVertically">
                  <div className="col-md-1"></div>
                  <div className="col-md-4 m-0 p-0 savingsImg">
                    <ProgressiveImage
                      src="https://drive.google.com/uc?export=view&id=1jRcr_Fnpb2ngWL9PyZf7RcT51cnJt7xY"
                      alt="savings image"
                      className="savingsWidth"
                    />
                  </div>
                  <div className="col-md-7 text-center">
                    <h4 className="fw-bold">Your Annual Savings</h4>
                    <div className="btn btn-dark myTextSuccess fw-bold fs-4 savingsBorder myButtonR">
                      <i className="bi bi-currency-rupee"></i>
                      {(
                        Math.round(
                          (annualFuelCostCv -
                            annualFuelCostEv +
                            Number.EPSILON) *
                            100
                        ) / 100
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-4 mb-2">
                  <button
                    className="btn myButton myButtonBorder"
                    onClick={startNewCalculation}
                  >
                    Start New Calculation
                  </button>
                </div>
              </div>
              <div className="col-xl-2 col-lg-1 col-md-0"></div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EvCalculator;
