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
    const { status } = saveDriversQuoteResponse.data;
    if (status === "success") {
      toast.success("Quote Saved");
    }
    return saveDriversQuoteResponse.data;
  } catch (error) {
    console.error("Save Driver's Quote::", error.message);
    toast.error(error.message);
    return error;
  }
};

export const getDriversInfo = async (driverId) => {
  console.log("Get Drivers info api:", driverId);
  try {
    let getDriversInfoResponse = await axios.get(
      `${baseUrl}/get/driver/quote/${driverId}`
    );
    console.log("GetDriver infor response::", getDriversInfoResponse);
    const { status } = getDriversInfoResponse.data;
    if (status === "success") {
      toast.success("Driver's Info Fetched");
    }
    return getDriversInfoResponse.data;
  } catch (error) {
    console.warn("Get Drivers info Error:", error);
    toast.error(error.message);
    return error.response;
  }
};

export const deleteDriverQuote = async (driverId) => {
  console.log("Delete drivers quote api::", driverId);
  try {
    let deleteDriversInfoResponse = await axios.delete(
      `${baseUrl}/get/driver/quote/${driverId}`
    );
    console.log("Delete driver's info response:", deleteDriversInfoResponse);
    const { status } = deleteDriversInfoResponse.data;
    if (status === "success") {
      toast.success("Driver's Info deleted");
    }
    return deleteDriversInfoResponse.data;
  } catch (error) {
    console.warn("Error Deleting DriverInfo::", error.message);
    toast.error(error.message);
    return error;
  }
};
export const updateDriverInfo = async (driversInfo) => {
  console.log("Update Drivers info::", driversInfo);
  toast.success("Driver's info updated");
};
