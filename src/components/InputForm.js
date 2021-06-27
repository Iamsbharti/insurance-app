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
  const [currentValue, setCurrentValue] = useState();
  const [registeredDate, setRegisteredDate] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitting Form");
  };
  return (
    <>
      <div className="input__form__main">
        <div className="name__address__section">
          <div className="name__section">
            <span className="section__intro">Vehicle Owner's Info</span>
            <select
              class="form-select salutation__text"
              aria-label="Prefix"
              name={salutation}
              onChange={(e) => setSalutation(e.target.value)}
            >
              <option selected>Salutation</option>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
            </select>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              aria-label="First name"
              name={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              aria-label="Last name"
              name={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Telephone No"
              aria-label="Telephone No"
              name={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="address__section">
            <span className="section__intro">Address</span>
            <div className="input__card">
              <textarea
                type="text"
                class="form-control"
                placeholder="Address Line 1"
                required
                rows="2"
                name={addressLine1}
                onChange={(e) => setAddrL1(e.target.value)}
              />
              <textarea
                type="textarea"
                class="form-control"
                placeholder="Address Line 2"
                required
                rows="2"
                name={addressLine2}
                onChange={(e) => setAddrL2(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                placeholder="City"
                required
                name={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                class="form-control"
                placeholder="PostCode/Zip Code"
                required
                name={pincode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="vechile__info">
          <span className="section__intro">Vehicle Info</span>
          <div className="vehicle_type_section">
            <div classname="type">
              <label>Type</label>
              <select class="form-select">
                <option selected>Select a Vehicle type</option>
                <option value="Cabriolet">Cabriolet</option>
                <option value="Coupe">Coupe</option>
                <option value="Estate">Estate</option>
                <option value="HatchBack">HatchBack</option>
                <option value="other">other</option>
              </select>
            </div>
            <div classname="size">
              <label>Engine Size</label>
              <select class="form-select">
                <option selected>Select Engine Size</option>
                <option value="1000">1000</option>
                <option value="1600">1600</option>
                <option value="2000">2000</option>
                <option value="2500">2500</option>
                <option value="2500">2500</option>
                <option value="other">other</option>
              </select>
            </div>
            <div classname="Usage">
              <label>Usage</label>
              <select class="form-select">
                <option selected>Commercial Usage?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div classname="registered__state">
              <label class="form-label">Registered State</label>
              <select class="form-select">
                <option selected>Registered State ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="vehicle_type_sub_section">
            <div className="driver__count">
              <label>Driver's Count</label>
              <select class="form-select">
                <option selected>Additional Driver's Count</option>
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
                class="form-control"
                name={registeredDate}
                onChange={(e) => setRegisteredDate(e.target.value)}
              />
            </div>
            <div className="curr__value">
              <label>Current Value(0-50000)</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="50000"
                name={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form__submission">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};
