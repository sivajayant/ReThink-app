import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/table">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customurl">
            Custom URL
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
