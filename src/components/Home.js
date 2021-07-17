import React from "react";
import "../css/Footer.css";
import { useHistory } from "react-router-dom";
export const Home = () => {
  let history = useHistory();
  return (
    <div className="home__main">
      <div className="intro__hero__text">
        <p>Get Insured</p>
        <p>At Best</p>
        <p>Price</p>
      </div>
      <div className="home_get_quote">
        <p onClick={() => history.push("/quote")}> get you quote now...</p>
      </div>
    </div>
  );
};
