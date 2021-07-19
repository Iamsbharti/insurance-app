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
  const handleAdminActions = async (action) => {
    let response;
    console.log("handle admin actions::", action);
    switch (action) {
      case "Search":
        console.log("searching api");
        response = await getDriversInfo(driverId);
        console.log("response::", response);
        setToggleDriversInfo(!toggleDriversInfo);
        if (response.status === "success") {
          setDriversInfo(response.data);
        } else {
          setErrorMessage(response.data.message);
        }
        break;
      case "Update":
        console.log("manageDriverInfoUpdates:", driversInfo);
        updateDriverInfo(driversInfo);
        break;
      case "Delete":
        response = await deleteDriverQuote(driverId);
        setToggleDriversInfo(!toggleDriversInfo);
        if (response.status === "success") {
          setErrorMessage(response.message);
        } else {
          setErrorMessage(response.data.message);
        }
        break;
      default:
        return "";
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
            <option value="Update">Update</option>
            <option value="Delete">Delete</option>
          </select>
          <button
            onClick={() => handleAdminActions(action)}
            disabled={driverId === ""}
          >
            {action}
          </button>
        </div>
        <div className="admin__info__Section" hidden={toggleDriversInfo}>
          <UpdateDriverInfo
            driversInfo={driversInfo}
            manageDriverInfoUpdates={setDriversInfo}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </div>
  );
};
