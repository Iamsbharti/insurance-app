import React from "react";
import "../css/Quote.css";
import { useLocation } from "react-router-dom";
export const QuoteConfirmation = () => {
  let location = useLocation();
  console.log("quoteconfirmation::", location.state);
  const { id, salutation, firstName, lastName, quotation } =
    location.state.driverInfo;

  return (
    <div className="quote__main">
      <p className="p_msg">
        Congratulations Your Quote has been generated !!!!
      </p>
      <div className="quote__info">
        <p>
          Driver ID -- <span>{id}</span>
        </p>
        <p>
          Driver Name --{" "}
          <span>{salutation + " " + firstName + " " + lastName}</span>
        </p>
        <p>
          Quotation -- <span>{quotation}</span>
        </p>
      </div>
    </div>
  );
};
