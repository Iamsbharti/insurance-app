import React from "react";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 logo">
            <i className="fa fa-handshake-o icon" aria-hidden="true"></i>
            Insure...
          </span>
        </div>
      </nav>
    </>
  );
};
