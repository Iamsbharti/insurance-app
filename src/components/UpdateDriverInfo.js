import React, { useState } from "react";
import "../css/Inputform.css";
export const UpdateDriverInfo = ({
  driversInfo,
  manageDriverInfoUpdates,
  errorMessage,
}) => {
  const { salutation, firstName, lastName, telephone, address, city } =
    driversInfo;
  console.log("driversInfo:", Object.keys(driversInfo).length, errorMessage);
  const [toUpdateDriverInfo, setUpdateDriversInfo] = useState(driversInfo);
  const handleDriverInfoUpdates = (prop, newValue) => {
    console.log("handle driver updates info::");
    setUpdateDriversInfo({
      ...toUpdateDriverInfo,
      [prop]: newValue,
    });
    manageDriverInfoUpdates(toUpdateDriverInfo);
  };
  return (
    <>
      <div>
        {Object.keys(driversInfo).length > 0 ? (
          <>
            <div className="name__address__section">
              <div className="name__section">
                <span className="section__intro">Vehicle Owner's Info</span>
                <select
                  className="form-select salutation__text"
                  aria-label="Prefix"
                  value={salutation}
                  onChange={(e) =>
                    setUpdateDriversInfo({
                      ...toUpdateDriverInfo,
                      salutation: e.target.value,
                    })
                  }
                >
                  <option>Salutation</option>
                  <option value="Mr">Mr.</option>
                  <option value="Ms">Ms.</option>
                  <option value="Mr">Miss.</option>
                </select>

                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  aria-label="First name"
                  value={firstName}
                  onChange={(e) =>
                    setUpdateDriversInfo({
                      ...toUpdateDriverInfo,
                      firstName: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  aria-label="Last name"
                  value={lastName}
                  onChange={(e) =>
                    setUpdateDriversInfo({
                      ...toUpdateDriverInfo,
                      lastName: e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Telephone No"
                  aria-label="Telephone No"
                  value={telephone}
                  onChange={(e) =>
                    setUpdateDriversInfo({
                      ...toUpdateDriverInfo,
                      telephone: e.target.value,
                    })
                  }
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
                    value={address}
                    onChange={(e) =>
                      setUpdateDriversInfo({
                        ...toUpdateDriverInfo,
                        address: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    required
                    name={city}
                    value={city}
                    onChange={(e) =>
                      setUpdateDriversInfo({
                        ...toUpdateDriverInfo,
                        city: e.target.value,
                      })
                    }
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="PostCode/Zip Code"
                    required
                    name={driversInfo.pinCode}
                    value={driversInfo.pinCode}
                    onChange={(e) =>
                      setUpdateDriversInfo({
                        ...toUpdateDriverInfo,
                        pinCode: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <button onClick={handleDriverInfoUpdates}>update</button>
          </>
        ) : (
          <>
            <p
              style={{
                color: "red",
                fontSize: "1.4rem",
                fontWeight: "600",
                margin: "50px",
              }}
            >
              {errorMessage}
            </p>
          </>
        )}
      </div>
    </>
  );
};
