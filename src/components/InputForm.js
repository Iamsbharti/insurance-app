import React, { useState } from "react";
import "../css/Inputform.css";
import { saveDriversQuote } from "../apis/insuranceApis";
import { toast } from "react-toastify";
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
  let history = useHistory();
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
  const reloadForm = () => {
    clearFormValues();
  };
  const validationCheck = () => {
    let isValidationError = false;
    console.log("validation checks::", isCommercial, canUseOutSide);
    if (salutation === "") {
      updateErrorProp("salutation", VALUE_SELECTION);
      isValidationError = true;
    }
    if (firstName === "") {
      updateErrorProp("firstName", `First Name ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (lastName === "") {
      updateErrorProp("lastName", `LastName ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (telephone === "") {
      updateErrorProp("telephone", `Telephone ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (addressLine1 === "" || addressLine2 === "") {
      updateErrorProp("addressLine", `Address ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (city === "") {
      updateErrorProp("city", `City ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (pincode === "") {
      updateErrorProp("pincode", `Pincode ${REQUIRED_FIELD}`);
      isValidationError = true;
    }
    if (vehicleType === "") {
      updateErrorProp("vehicleType", VALUE_SELECTION);
      isValidationError = true;
    }
    if (engineSize === "") {
      updateErrorProp("engineSize", VALUE_SELECTION);
      isValidationError = true;
    }
    if (driversCount === "") {
      updateErrorProp("driversCount", VALUE_SELECTION);
      isValidationError = true;
    }
    if (isCommercial === "") {
      console.log("iscommercial check");
      updateErrorProp("isCommercial", VALUE_SELECTION);
      isValidationError = true;
    }
    if (canUseOutSide === "") {
      console.log("canuse outside check");
      updateErrorProp("canUseOutSide", VALUE_SELECTION);
      isValidationError = true;
    }
    if (registeredDate === 0) {
      updateErrorProp("registeredDate", VALUE_SELECTION);
      isValidationError = true;
    }
    if (currentValue === 0) {
      updateErrorProp("currentValue", VALUE_SELECTION);
      isValidationError = true;
    }
    return isValidationError;
  };
  const clearFormValues = () => {
    setAddrL1("");
    setAddrL2("");
    setSalutation("");
    setFirstName("");
    setLastName("");
    setTelephone("");
    setPinCode("");
    setCity("");
    setCanUserOutSide("");
    setCurrentValue("");
    setDriversCount("");
    setEngineSize("");
    setIsCommercial("");
    setFieldErrors({ ...fieldErrors, [Object.keys(fieldErrors)]: "" });
    console.log(Object.keys(fieldErrors));
  };
  const submitForm = async (e) => {
    let isValidationError = validationCheck();
    console.log("Submitting Form::" + isValidationError);
    let driversInfo = {
      salutation,
      firstName,
      lastName,
      telephone,
      address: addressLine1 + addressLine2,
      city,
      pinCode: pincode,
      vehicleType,
      engineSize,
      driversCount,
      isCommercial: isCommercial === "Yes" ? true : false,
      canUseOutSide: canUseOutSide === "Yes" ? true : false,
      currentValue,
      registeredDate,
    };
    if (!isValidationError) {
      let response = await saveDriversQuote(driversInfo);
      console.log("response::", response);
      const { status, message } = response.data;
      if (status === "success") {
        toast.success(message);
        clearFormValues();
        // route to confirmation page
        history.push(`/quote/:${response.data.data.id}`);
      } else {
        toast.error(response.data.message);
        clearFormValues();
      }
    } else {
      toast.warning("Form Validation Error");
    }
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
              <input
                type="radio"
                checked={canUseOutSide === "Yes"}
                onClick={(e) => setCanUserOutSide(e.target.value)}
                value="Yes"
              />{" "}
              <span className="radio_option">Yes</span>
              <input
                type="radio"
                checked={canUseOutSide === "No"}
                onClick={(e) => setCanUserOutSide(e.target.value)}
                value="No"
                style={{ margin: "4px" }}
              />{" "}
              <span className="radio_option">No</span>
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
              <input
                type="radio"
                checked={isCommercial === "Yes"}
                onClick={(e) => setIsCommercial(e.target.value)}
                value="Yes"
              />{" "}
              Yes
              <input
                type="radio"
                checked={isCommercial === "No"}
                onClick={(e) => setIsCommercial(e.target.value)}
                value="No"
                style={{ margin: "4px" }}
              />{" "}
              No
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
