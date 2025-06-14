// src/components/Header.js
import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home"); // Navigate to home after logging out
  };

  const renderLinks = () => {
    if (user) {
      return (
        <li>
          <Link to="/home" className="btn" onClick={handleLogout}>
            LOGOUT
          </Link>
        </li>
      );
    }

    if (
      location.pathname === "/home" ||
      location.pathname === "/login" ||
      location.pathname === "/register"
    ) {
      return (
        <li>
          <Link to="/login" className="btn">
            GET STARTED
          </Link>
        </li>
      );
    }

    return (
      <li>
        <Link to="/home" className="btn">
          LOGOUT
        </Link>
      </li>
    );
  };

  return (
    <div className="Heading">
      {/* <div className="logo-img">
        <img src="../Images/logo.png" />
      </div> */}
      <span>Fuzzy Paws</span>
      <ul>
        <li>
          <Link to="/home" className="list">
            HOME
          </Link>
        </li>
        <li>
          <a href="/volunteer" className="list">
            VOLUNTEER
          </a>
        </li>
        <li>
          <a href="shelter" className="list">
            SHELTER
          </a>
        </li>
        <li>
          <Link to="/shop" className="list">
            SHOP
          </Link>
        </li>
        {renderLinks()}
      </ul>
    </div>
  );
};

export default Header;
