import React from "react";
import "./ModelsDetails.css"
import ModelsData from "../../Constants/ModelsData";

const ModelsDetails = () => {
  let constant = window.location.pathname.replace(/\/models\/|-/g, ""),
    sliceA,
    sliceB;

  if (constant === "okhi90") {
    sliceA = 0;
    sliceB = 1;
  } else if (constant === "praisepro") {
    sliceA = 1;
    sliceB = 2;
  } else if (constant === "ipraiseplus") {
    sliceA = 2;
    sliceB = 3;
  } else if (constant === "ridgeplusgps") {
    sliceA = 3;
    sliceB = 4;
  } else if (constant === "r30") {
    sliceA = 4;
    sliceB = 5;
  } else if (constant === "lite") {
    sliceA = 5;
    sliceB = 6;
  } else if (constant === "dual55ah") {
    sliceA = 6;
    sliceB = 7;
  }

  return (
    <div className="container text-break mt-3">
      {ModelsData.map((item) => (
        <div>
          <h2 className="text-center mb-5">{item.Name}</h2>
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-8 col-sm-12">
                <img
                  src={item.ImgSrc}
                  className="card-img-top"
                  alt="Model Image"
                />
              </div>
              <div className="col-md-4 col-sm-12 pt-5 dNone768">
                <dl className="row mb-5">
                  {item.RangeCharge && (
                    <dt className="col-lg-6 col-md-12">Range Charge</dt>
                  )}
                  {item.RangeCharge && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.RangeCharge}
                    </dd>
                  )}
                  {item.Battery && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Battery
                    </dt>
                  )}
                  {item.Battery && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.Battery}
                    </dd>
                  )}

                  {item.ChargingTime && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Charging Time
                    </dt>
                  )}
                  {item.ChargingTime && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.ChargingTime}
                    </dd>
                  )}

                  {item.BatteryWarranty && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Battery Warranty
                    </dt>
                  )}
                  {item.BatteryWarranty && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.BatteryWarranty}
                    </dd>
                  )}

                  {item.Speed && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Speed
                    </dt>
                  )}
                  {item.Speed && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.Speed}
                    </dd>
                  )}

                  {item.MotorWarranty && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Motor Warranty
                    </dt>
                  )}
                  {item.MotorWarranty && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.MotorWarranty}
                    </dd>
                  )}

                  {item.LoadingCapacity && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Loading Capacity
                    </dt>
                  )}
                  {item.LoadingCapacity && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.LoadingCapacity}
                    </dd>
                  )}

                  {item.OkinawaAppConnectivity && (
                    <dt className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      Okinawa App Connectivity
                    </dt>
                  )}
                  {item.OkinawaAppConnectivity && (
                    <dd className="col-lg-6 col-md-12 d-none d-sm-block col-sm-6">
                      {item.OkinawaAppConnectivity}
                    </dd>
                  )}
                </dl>
              </div>
            </div>
          </div>

          {/* Model Details */}
          <div className="px-3">
            <h3 className="mt-5 mb-4">Description: / Details:</h3>
            <dl className="row mb-5">
              {item.RangeCharge && (
                <dt className="col-md-3 col-sm-6">Range Charge</dt>
              )}
              {item.RangeCharge && (
                <dd className="col-md-3 col-sm-6">{item.RangeCharge}</dd>
              )}
              {item.Battery && <dt className="col-md-3 col-sm-6">Battery</dt>}
              {item.Battery && (
                <dd className="col-md-3 col-sm-6">{item.Battery}</dd>
              )}

              {item.ChargingTime && (
                <dt className="col-md-3 col-sm-6">Charging Time</dt>
              )}
              {item.ChargingTime && (
                <dd className="col-md-3 col-sm-6">{item.ChargingTime}</dd>
              )}

              {item.BatteryWarranty && (
                <dt className="col-md-3 col-sm-6">Battery Warranty</dt>
              )}
              {item.BatteryWarranty && (
                <dd className="col-md-3 col-sm-6">{item.BatteryWarranty}</dd>
              )}

              {item.Speed && <dt className="col-md-3 col-sm-6">Speed</dt>}
              {item.Speed && (
                <dd className="col-md-3 col-sm-6">{item.Speed}</dd>
              )}

              {item.MotorWarranty && (
                <dt className="col-md-3 col-sm-6">Motor Warranty</dt>
              )}
              {item.MotorWarranty && (
                <dd className="col-md-3 col-sm-6">{item.MotorWarranty}</dd>
              )}

              {item.LoadingCapacity && (
                <dt className="col-md-3 col-sm-6">Loading Capacity</dt>
              )}
              {item.LoadingCapacity && (
                <dd className="col-md-3 col-sm-6">{item.LoadingCapacity}</dd>
              )}

              {item.OkinawaAppConnectivity && (
                <dt className="col-md-3 col-sm-6">Okinawa App Connectivity</dt>
              )}
              {item.OkinawaAppConnectivity && (
                <dd className="col-md-3 col-sm-6">
                  {item.OkinawaAppConnectivity}
                </dd>
              )}

              {item.PeakPower && (
                <dt className="col-md-3 col-sm-6">Peak Power</dt>
              )}
              {item.PeakPower && (
                <dd className="col-md-3 col-sm-6">{item.PeakPower}</dd>
              )}

              {item.RatedPower && (
                <dt className="col-md-3 col-sm-6">Rated Power</dt>
              )}
              {item.RatedPower && (
                <dd className="col-md-3 col-sm-6">{item.RatedPower}</dd>
              )}

              {item.Climbing && <dt className="col-md-3 col-sm-6">Climbing</dt>}
              {item.Climbing && (
                <dd className="col-md-3 col-sm-6">{item.Climbing}</dd>
              )}

              {item.BrakeSystem && (
                <dt className="col-md-3 col-sm-6">Brake System</dt>
              )}
              {item.BrakeSystem && (
                <dd className="col-md-3 col-sm-6">{item.BrakeSystem}</dd>
              )}

              {item.SeatHeight && (
                <dt className="col-md-3 col-sm-6">Seat Height</dt>
              )}
              {item.SeatHeight && (
                <dd className="col-md-3 col-sm-6">{item.SeatHeight}</dd>
              )}

              {item.Dimensions && (
                <dt className="col-md-3 col-sm-6">Dimensions</dt>
              )}
              {item.Dimensions && (
                <dd className="col-md-3 col-sm-6">{item.Dimensions}</dd>
              )}

              {item.Tyre && <dt className="col-md-3 col-sm-6">Tyre</dt>}
              {item.Tyre && <dd className="col-md-3 col-sm-6">{item.Tyre}</dd>}

              {item.Speedometer && (
                <dt className="col-md-3 col-sm-6">Speedometer</dt>
              )}
              {item.Speedometer && (
                <dd className="col-md-3 col-sm-6">{item.Speedometer}</dd>
              )}

              {item.Voltage && <dt className="col-md-3 col-sm-6">Voltage</dt>}
              {item.Voltage && (
                <dd className="col-md-3 col-sm-6">{item.Voltage}</dd>
              )}

              {item.Controller && (
                <dt className="col-md-3 col-sm-6">Controller</dt>
              )}
              {item.Controller && (
                <dd className="col-md-3 col-sm-6">{item.Controller}</dd>
              )}

              {item.NavigationSystem && (
                <dt className="col-md-3 col-sm-6">Navigation System</dt>
              )}
              {item.NavigationSystem && (
                <dd className="col-md-3 col-sm-6">{item.NavigationSystem}</dd>
              )}

              {item.ChargerSpecification && (
                <dt className="col-md-3 col-sm-6">Charger Specification</dt>
              )}
              {item.ChargerSpecification && (
                <dd className="col-md-3 col-sm-6">
                  {item.ChargerSpecification}
                </dd>
              )}

              {item.Suspension && (
                <dt className="col-md-3 col-sm-6">Suspension</dt>
              )}
              {item.Suspension && (
                <dd className="col-md-3 col-sm-6">{item.Suspension}</dd>
              )}

              {item.GroundClearance && (
                <dt className="col-md-3 col-sm-6">Ground Clearance</dt>
              )}
              {item.GroundClearance && (
                <dd className="col-md-3 col-sm-6">{item.GroundClearance}</dd>
              )}

              {item.BootSpace && (
                <dt className="col-md-3 col-sm-6">Boot Space</dt>
              )}
              {item.BootSpace && (
                <dd className="col-md-3 col-sm-6">{item.BootSpace}</dd>
              )}

              {item.SideStandSensor && (
                <dt className="col-md-3 col-sm-6">Side Stand Sensor</dt>
              )}
              {item.SideStandSensor && (
                <dd className="col-md-3 col-sm-6">{item.SideStandSensor}</dd>
              )}

              {item.Headlight && (
                <dt className="col-md-3 col-sm-6">Headlight</dt>
              )}
              {item.Headlight && (
                <dd className="col-md-3 col-sm-6">{item.Headlight}</dd>
              )}

              {item.Backlight && (
                <dt className="col-md-3 col-sm-6">Backlight</dt>
              )}
              {item.Backlight && (
                <dd className="col-md-3 col-sm-6">{item.Backlight}</dd>
              )}

              {item.Wheel && <dt className="col-md-3 col-sm-6">Wheel</dt>}
              {item.Wheel && (
                <dd className="col-md-3 col-sm-6">{item.Wheel}</dd>
              )}

              {item.FloorMat && (
                <dt className="col-md-3 col-sm-6">Floor Mat</dt>
              )}
              {item.FloorMat && (
                <dd className="col-md-3 col-sm-6">{item.FloorMat}</dd>
              )}

              {item.BrakeLever && (
                <dt className="col-md-3 col-sm-6">Brake Lever</dt>
              )}
              {item.BrakeLever && (
                <dd className="col-md-3 col-sm-6">{item.BrakeLever}</dd>
              )}

              {item.ICATARAIApproved && (
                <dt className="col-md-3 col-sm-6">ICAT/ARAI Approved</dt>
              )}
              {item.ICATARAIApproved && (
                <dd className="col-md-3 col-sm-6">{item.ICATARAIApproved}</dd>
              )}

              {item.OuterAppearance && (
                <dt className="col-md-3 col-sm-6">Outer Appearance</dt>
              )}
              {item.OuterAppearance && (
                <dd className="col-md-3 col-sm-6">{item.OuterAppearance}</dd>
              )}

              {item.RoadsideAssistance && (
                <dt className="col-md-3 col-sm-6">RoadsideAssistance</dt>
              )}
              {item.RoadsideAssistance && (
                <dd className="col-md-3 col-sm-6">{item.RoadsideAssistance}</dd>
              )}

              {item.WheelBase && (
                <dt className="col-md-3 col-sm-6">Wheel Base</dt>
              )}
              {item.WheelBase && (
                <dd className="col-md-3 col-sm-6">{item.WheelBase}</dd>
              )}

              {item.AppFeatures && (
                <dt className="col-md-3 col-sm-6">App Features</dt>
              )}
              {item.AppFeatures && (
                <dd className="col-md-3 col-sm-6">{item.AppFeatures}</dd>
              )}

              {item.KeyFeature && (
                <dt className="col-md-3 col-sm-6">KeyFeature</dt>
              )}
              {item.KeyFeature && (
                <dd className="col-md-3 col-sm-6">{item.KeyFeature}</dd>
              )}
            </dl>
          </div>
        </div>
      )).slice(sliceA, sliceB)}
    </div>
  );
};

export default ModelsDetails;
