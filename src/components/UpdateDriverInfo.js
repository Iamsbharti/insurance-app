import React, { useEffect, useState } from "react";
import "../css/Inputform.css";
export const UpdateDriverInfo = ({ driversInfo, manageDriverInfoUpdates }) => {
  const [toUpdateDriverInfo, setUpdateDriversInfo] = useState({});
  console.log("toUpdateDriverInfo::", toUpdateDriverInfo);
  const updateDriverState = (prop, newValue) => {
    console.log("handle driver updates info::");
    setUpdateDriversInfo({
      ...toUpdateDriverInfo,
      [prop]: newValue,
    });
  };
  const handleDriverInfoUpdates = () => {
    manageDriverInfoUpdates(toUpdateDriverInfo);
  };
  useEffect(() => {
    setUpdateDriversInfo(driversInfo);
  }, [driversInfo]);
  return (
    <>
      <div>
        <div className="name__address__section">
          <div className="name__section">
            <span className="section__intro">Vehicle Owner's Info</span>
            <select
              className="form-select salutation__text"
              aria-label="Prefix"
              value={toUpdateDriverInfo.salutation}
              onChange={(e) => updateDriverState("salutation", e.target.value)}
            >
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Miss.">Miss.</option>
            </select>

            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-label="First name"
              value={toUpdateDriverInfo.firstName}
              onChange={(e) => updateDriverState("firstName", e.target.value)}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              aria-label="Last name"
              value={toUpdateDriverInfo.lastName}
              onChange={(e) => updateDriverState("lastName", e.target.value)}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Telephone No"
              aria-label="Telephone No"
              value={toUpdateDriverInfo.telephone}
              onChange={(e) => updateDriverState("telephone", e.target.value)}
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
                value={toUpdateDriverInfo.address}
                onChange={(e) => updateDriverState("address", e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                placeholder="City"
                required
                name="city"
                value={toUpdateDriverInfo.city}
                onChange={(e) => updateDriverState("city", e.target.value)}
              />

              <input
                type="text"
                className="form-control"
                placeholder="PostCode/Zip Code"
                required
                name={driversInfo.pinCode}
                value={toUpdateDriverInfo.pinCode}
                onChange={(e) => updateDriverState("pinCode", e.target.value)}
              />
            </div>
          </div>
        </div>
        <button onClick={handleDriverInfoUpdates}>update</button>
      </div>
    </>
  );
};
