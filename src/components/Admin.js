import React, { useState } from "react";
import "../css/Admin.css";
import {
  getDriversInfo,
  updateDriverInfo,
  deleteDriverQuote,
} from "../apis/insuranceApis";
import { UpdateDriverInfo } from "./UpdateDriverInfo";
export const Admin = () => {
  const [action, setAction] = useState("Search");
  const [driverId, setDriverId] = useState("");
  const [toggleDriversInfo, setToggleDriversInfo] = useState(true);
  const [driversInfo, setDriversInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  console.log("action:", action, driverId);
  const handleAdminActions = async (action) => {
    let response;
    console.log("handle admin actions::", action);
    switch (action) {
      case "Search":
        setToggleDriversInfo(true);
        console.log("searching api");
        response = await getDriversInfo(driverId);
        console.log("response::", response);
        setToggleDriversInfo(false);
        if (response && response.status === "success") {
          setDriversInfo(response.data);
        } else {
          setDriversInfo(response.data.data);
          setErrorMessage(response.data.message);
        }
        break;
      case "Delete":
        console.log("delete ops");
        response = await deleteDriverQuote(driverId);
        if (response && response.status === "success") {
          setToggleDriversInfo(true);
          setErrorMessage(response.message);
        } else {
          setErrorMessage(response.data.message);
        }
        break;
      default:
        return "";
    }
  };
  const handleDriverInfoUpdates = async (updatedDriverInfo) => {
    console.log("Handle Driver updates::", updatedDriverInfo);
    // api call
    let response = await updateDriverInfo(updatedDriverInfo);
    console.log("update response::", response);
    const { status } = response.data;
    if (status === "success") {
      setToggleDriversInfo(!toggleDriversInfo);
      setDriverId("");
    }
  };
  return (
    <div className="admin__main">
      <p className="intro__admin">Admin DashBoard</p>
      <div className="admin__contents">
        <div className="admin__inputs__section">
          <input
            type="text"
            placeholder="enter driver's Id"
            className="form-control"
            name="driverId"
            onChange={(e) => setDriverId(e.target.value)}
          />
          <span className="section__intro">Select Action</span>
          <select
            className="form-select salutation__text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="Search">Search</option>
            <option value="Delete">Delete</option>
          </select>
          <button
            onClick={() => handleAdminActions(action)}
            disabled={driverId === ""}
          >
            {action}
          </button>
        </div>
        {driversInfo ? (
          <>
            <div className="admin__info__Section" hidden={toggleDriversInfo}>
              <UpdateDriverInfo
                driversInfo={driversInfo}
                manageDriverInfoUpdates={handleDriverInfoUpdates}
                errorMessage={errorMessage}
              />
            </div>
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
    </div>
  );
};
