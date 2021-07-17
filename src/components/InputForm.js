import React, { useState } from "react";
import "../css/Inputform.css";
import { useHistory } from "react-router-dom";
export const InputForm = () => {
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [addressLine1, setAddrL1] = useState("");
  const [addressLine2, setAddrL2] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [driversCount, setDriversCount] = useState("");
  const [isCommercial, setIsCommercial] = useState("");
  const [canUseOutSide, setCanUserOutSide] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [registeredDate, setRegisteredDate] = useState("");

  const VALUE_SELECTION = "*required";
  const REQUIRED_FIELD = "can't be empty";
  const [fieldErrors, setFieldErrors] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    telephone: "",
    error: false,
    addressLine: "",
    city: "",
    pincode: "",
    vehicleType: "",
    engineSize: "",
    driversCount: "",
    isCommercial: "",
    canUseOutSide: "",
    currentValue: 0,
    registeredDate: 0,
  });

  const updateErrorProp = (prop, udpatedValue) => {
    setFieldErrors((prevState) => ({
      ...prevState,
      [prop]: udpatedValue,
    }));
  };
  let history = useHistory();
  const reloadForm = () => {
    history.push("/");
  };
  const validationCheck = () => {
    console.log("validation checks::", vehicleType, engineSize, driversCount);
    if (salutation === "") {
      updateErrorProp("salutation", VALUE_SELECTION);
    }
    if (firstName === "") {
      updateErrorProp("firstName", `First Name ${REQUIRED_FIELD}`);
    }
    if (lastName === "") {
      updateErrorProp("lastName", `LastName ${REQUIRED_FIELD}`);
    }
    if (telephone === "") {
      updateErrorProp("telephone", `Telephone ${REQUIRED_FIELD}`);
    }
    if (addressLine1 === "" || addressLine2 === "") {
      updateErrorProp("addressLine", `Address ${REQUIRED_FIELD}`);
    }
    if (city === "") {
      updateErrorProp("city", `City ${REQUIRED_FIELD}`);
    }
    if (pincode === "") {
      updateErrorProp("pincode", `Pincode ${REQUIRED_FIELD}`);
    }
    if (vehicleType === "") {
      updateErrorProp("vehicleType", VALUE_SELECTION);
    }
    if (engineSize === "") {
      updateErrorProp("engineSize", VALUE_SELECTION);
    }
    if (driversCount === "") {
      updateErrorProp("driversCount", VALUE_SELECTION);
    }
    if (isCommercial === "" || canUseOutSide === "") {
      updateErrorProp("isCommercial", VALUE_SELECTION);
    }
    if (registeredDate === 0) {
      updateErrorProp("registeredDate", VALUE_SELECTION);
    }
    if (currentValue === 0) {
      updateErrorProp("currentValue", VALUE_SELECTION);
    }
  };

  const submitForm = (e) => {
    validationCheck();
    console.log("Submitting Form");
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
              <option value="Mr">Miss.</option>
            </select>
            <span
              className="error__message"
              hidden={fieldErrors.salutation === ""}
            >
              {`${fieldErrors.salutation} for salutation`}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span
              className="error__message"
              hidden={fieldErrors.firstName === ""}
            >
              {fieldErrors.firstName}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span
              className="error__message"
              hidden={fieldErrors.lastName === ""}
            >
              {fieldErrors.lastName}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Telephone No"
              aria-label="Telephone No"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <span
              className="error__message"
              hidden={fieldErrors.telephone === ""}
            >
              {fieldErrors.telephone}
            </span>
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
              <span
                className="error__message"
                hidden={fieldErrors.addressLine === ""}
              >
                {fieldErrors.addressLine}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                required
                name={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <span className="error__message" hidden={fieldErrors.city === ""}>
                {fieldErrors.city}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="PostCode/Zip Code"
                required
                value={pincode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <span
                className="error__message"
                hidden={fieldErrors.pincode === ""}
              >
                {fieldErrors.pincode}
              </span>
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
              <span
                className="error__message"
                hidden={fieldErrors.vehicleType === ""}
              >
                {fieldErrors.vehicleType}
              </span>
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
              <span
                className="error__message"
                hidden={fieldErrors.engineSize === ""}
              >
                {fieldErrors.engineSize}
              </span>
            </div>

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
              <span
                className="error__message"
                hidden={fieldErrors.driversCount === ""}
              >
                {fieldErrors.driversCount}
              </span>
            </div>
          </div>
          <div className="vehicle_type_sub_section_1">
            <div className="registered__state">
              <label className="form-label">
                Will the vechile be used outside registered state ?
              </label>
              <div
                className="form-check"
                onChange={(e) => setCanUserOutSide(e.target.value)}
              >
                <div>
                  <input
                    className="form-check-input"
                    name="registered"
                    type="radio"
                    value={canUseOutSide}
                  />
                  <span>Yes</span>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    name="registered"
                    type="radio"
                    value={canUseOutSide}
                  />
                  <span>No</span>
                </div>
              </div>
              <span
                className="error__message"
                hidden={fieldErrors.canUseOutSide === ""}
              >
                {fieldErrors.canUseOutSide}
              </span>
            </div>
            <div className="Usage">
              <label className="form-label">
                Will the vechile be used for commercial purpose ?
              </label>
              <div
                className="form-check"
                onChange={(e) => setIsCommercial(e.target.value)}
              >
                <div>
                  <input
                    className="form-check-input"
                    name="registered"
                    type="radio"
                    value={isCommercial}
                  />
                  <span>Yes</span>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    name="registered"
                    type="radio"
                    value={isCommercial}
                  />
                  <span>No</span>
                </div>
              </div>
              <span
                className="error__message"
                hidden={fieldErrors.isCommercial === ""}
              >
                {fieldErrors.isCommercial}
              </span>
            </div>
          </div>
          <div className="vehicle_type_sub_section_2">
            <div className="registered__date">
              <label>Registered Date</label>
              <input
                type="date"
                className="form-control"
                value={registeredDate}
                onChange={(e) => setRegisteredDate(e.target.value)}
              />
              <span
                className="error__message"
                hidden={fieldErrors.registeredDate === ""}
              >
                {fieldErrors.registeredDate}
              </span>
            </div>
            <div className="curr__value">
              <label>Current Value(0-50000)</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="50000"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
              />
              <p> {currentValue}</p>
              <span
                className="error__message"
                hidden={fieldErrors.currentValue === 0}
              >
                {fieldErrors.currentValue}
              </span>
            </div>
          </div>
        </div>
        <div className="form__submission">
          <button onClick={submitForm}>Submit</button>
          <button onClick={reloadForm}>Reset</button>
        </div>
      </div>
    </>
  );
};
