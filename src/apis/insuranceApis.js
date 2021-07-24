import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:8080/api/v1/insurance";

export const saveDriversQuote = async (driversInfo) => {
  console.log("Save SDriver Quote API::", driversInfo);
  try {
    let saveDriversQuoteResponse = await axios.post(
      `${baseUrl}/save/driver/quote`,
      driversInfo
    );
    console.log("Save quote response::", saveDriversQuoteResponse);
    toast.success("Saved Quote");
    return saveDriversQuoteResponse.data;
  } catch (error) {
    console.error("Save Driver's Quote::", error.message);
    return error.response;
  }
};

export const getDriversInfo = async (driverId) => {
  console.log("Get Drivers info api:", driverId);
  try {
    let getDriversInfoResponse = await axios.get(
      `${baseUrl}/get/driver/quote/${driverId}`
    );
    console.log("GetDriver infor response::", getDriversInfoResponse);
    toast.success("Quote fetched");

    return getDriversInfoResponse.data;
  } catch (error) {
    console.warn("Get Drivers info Error:", error);
    toast.error(error.response.data.message);
    return error.response;
  }
};

export const deleteDriverQuote = async (driverId) => {
  console.log("Delete drivers quote api::", driverId);
  try {
    let deleteDriversInfoResponse = await axios.delete(
      `${baseUrl}/delete/driver/quote/${driverId}`
    );
    console.log("Delete driver's info response:", deleteDriversInfoResponse);
    toast.success("Quote Deleted");
    return deleteDriversInfoResponse.data;
  } catch (error) {
    console.warn("Error Deleting DriverInfo::", error.message);
    return error.response;
  }
};
export const updateDriverInfo = async (driversInfo) => {
  console.log("Update Drivers info::", driversInfo);
  try {
    let updateDriverInfoResponse = await axios.post(
      `${baseUrl}/update/driver`,
      driversInfo
    );
    console.log("updateDriverInfoResponse::", updateDriverInfoResponse);
    const { status, message } = updateDriverInfoResponse.data;
    if (status === "success") {
      toast.success(message);
    }
    return updateDriverInfoResponse;
  } catch (error) {
    console.warn("Error updating driver::", error);
    toast.error(error.response.message);
    return error.response;
  }
};
