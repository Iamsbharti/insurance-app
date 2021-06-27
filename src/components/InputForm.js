import React, { useState } from "react";
import "../css/Inputform.css";

export const InputForm = () => {
  const [salutation, setSalutation] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [telephone, setTelephone] = useState();
  const [addressLine1, setAddrL1] = useState();
  const [addressLine2, setAddrL2] = useState();
  const [city, setCity] = useState();
  const [pincode, setPinCode] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [engineSize, setEngineSize] = useState();
  const [driversCount, setDriversCount] = useState();
  const [isCommercial, setIsCommercial] = useState();
  const [canUseOutSide, setCanUserOutSide] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [registeredDate, setRegisteredDate] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitting Form");
    console.log("sal::", salutation);
  };
  return (
    <>
      <div className="input__form__main">
        <div className="name__address__section">
          <div className="name__section">
            <span className="section__intro">Vehicle Owner's Info</span>
            <select
              className="form-select salutation__text"
              aria-label="Prefix"
              value={salutation}
              onChange={(e) => setSalutation(e.target.value)}
            >
              <option>Salutation</option>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Telephone No"
              aria-label="Telephone No"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="address__section">
            <span className="section__intro">Address</span>
            <div className="input__card">
              <textarea
                type="text"
                className="form-control"
                placeholder="Address Line 1"
                required
                rows="2"
                value={addressLine1}
                onChange={(e) => setAddrL1(e.target.value)}
              />
              <textarea
                type="textarea"
                className="form-control"
                placeholder="Address Line 2"
                required
                rows="2"
                value={addressLine2}
                onChange={(e) => setAddrL2(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="City"
                required
                name={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="PostCode/Zip Code"
                required
                value={pincode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="vechile__info">
          <span className="section__intro">Vehicle Info</span>
          <div className="vehicle_type_section">
            <div className="type">
              <label>Type</label>
              <select
                className="form-select"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option>Select a Vehicle type</option>
                <option value="Cabriolet">Cabriolet</option>
                <option value="Coupe">Coupe</option>
                <option value="Estate">Estate</option>
                <option value="HatchBack">HatchBack</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="size">
              <label>Engine Size</label>
              <select
                className="form-select"
                value={engineSize}
                onChange={(e) => setEngineSize(e.target.value)}
              >
                <option>Select Engine Size</option>
                <option value="1000">1000</option>
                <option value="1600">1600</option>
                <option value="2000">2000</option>
                <option value="2500">2500</option>
                <option value="2500">2500</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="Usage">
              <label>Usage</label>
              <select
                className="form-select"
                value={isCommercial}
                onChange={(e) => setIsCommercial(e.target.value)}
              >
                <option>Commercial Usage?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="registered__state">
              <label className="form-label">Registered State</label>
              <select
                className="form-select"
                value={canUseOutSide}
                onChange={(e) => setCanUserOutSide(e.target.value)}
              >
                <option>Registered State ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="vehicle_type_sub_section">
            <div className="driver__count">
              <label>Driver's Count</label>
              <select
                className="form-select"
                value={driversCount}
                onChange={(e) => setDriversCount(e.target.value)}
              >
                <option>Additional Driver's Count</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="registered__date">
              <label>Registered Date</label>
              <input
                type="date"
                className="form-control"
                value={registeredDate}
                onChange={(e) => setRegisteredDate(e.target.value)}
              />
            </div>
            <div className="curr__value">
              <label>Current Value(0-50000)</label>
              <span> {currentValue}</span>
              <input
                type="range"
                className="form-range"
                min="0"
                max="50000"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form__submission">
          <button onClick={submitForm}>Submit</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};
