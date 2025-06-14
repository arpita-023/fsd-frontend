// src/components/Login.js
import React, { useState, useContext } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../components/UserContext";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        usernameOrEmail,
        password,
        isAdmin,
      });
      setUsernameOrEmail("");
      setPassword("");
      setIsAdmin(false);
      setShowPassword(false);

      console.log("Login Response:", response);

      if (response.status === 200) {
        const userData = response.data;
        setUser(userData);

        if (userData.role === "admin") {
          navigate("/adminchoice");
        } else {
          navigate("/choice");
        }
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.response ? error.response.data.message : error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginn">
      <div className="background-login">
        <img src="./Images/pet8.jpg" alt="Pet Image" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail">Username or Email:</label>
            <input
              type="text"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEyeSlash onClick={togglePasswordVisibility} />
              ) : (
                <FaEye onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="isAdmin">Admin Login:</label>
            <input
              type="checkbox"
              id="isAdmin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="reg">
            <p>Don't Have an Account?</p>
            <a href="/register" className="register-link">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
