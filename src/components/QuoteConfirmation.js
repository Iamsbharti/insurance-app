import React from "react";
import "../css/Quote.css";

export const QuoteConfirmation = (driverInfo) => {
  const { salutation, firstName, lastName, quotation } = driverInfo;
  return (
    <div className="quote__main">
      <p className="p_msg">
        Congratulations Your Quote has been generated !!!!
      </p>
      <div className="quote__info">
        <p>
          Driver ID:: <span>{driverInfo.id}</span>
        </p>
        <p>
          Driver Name::{" "}
          <span>{salutation + " " + firstName + " " + lastName}</span>
        </p>
        <p>
          Quotation:: <span>{quotation}</span>
        </p>
      </div>
    </div>
  );
};
