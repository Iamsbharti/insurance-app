import React from "react";
import "../css/Navbar.css";
import { useHistory } from "react-router-dom";
export const Navbar = () => {
  let history = useHistory();
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1 logo"
            onClick={() => history.push("/")}
          >
            <i className="fa fa-handshake-o icon" aria-hidden="true"></i>
            Insure...
          </span>

          <ul className="nav__links">
            <li onClick={() => history.push("/quote")}>Get a quote</li>
            <li onClick={() => history.push("/admin")}>Admin</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
