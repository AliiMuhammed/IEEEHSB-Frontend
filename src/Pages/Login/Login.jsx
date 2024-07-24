import React, { useEffect, useState } from "react";
import "./style/login.css";
import loginImg from "../../Assets/login/login-img.jpg";
import logo from "../../Assets/logos/horizontal logo.png";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import http from "../../Helper/http";
import MainSpinner from "../../Shared/components/MainSpinner";
import { useDispatch } from "react-redux";
import { openToast } from "../../Redux/Slices/toastSlice";
import MyToast from "../../Shared/components/MyToast";

const Login = () => {
  const [showPass, setShowPass] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "* Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "* Email is invalid";
    }
    if (!password) {
      newErrors.password = "* Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      console.log({ email, password });
      http
        .POST("/users/login", { email, password })
        .then((response) => {
          console.log(response);
          setLoading(false);
          console.log("Dispatching success toast");
          dispatch(
            openToast({
              msg: "Verification code sent to your email",
              type: "success",
            })
          );
        })
        .catch((error) => {
          console.log(error);
          console.log("Dispatching error toast");
          dispatch(openToast({ msg: "Something went wrong", type: "error" }));
          setLoading(false);
        });
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="right">
          <div className="bg-img">
            <img src={loginImg} alt="login-img" loading="lazy" />
          </div>
          <div className="overlay">
            <img src={logo} alt="iEEE" loading="lazy" />
          </div>
        </div>
        <div className="left">
          <div className="form-header">
            <h1>Login</h1>
            <p>Welcome Back! Please Log In to Continue</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-inputs">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
              <label htmlFor="password">Password</label>
              <div className="show-pass">
                <button
                  type="button"
                  className="show"
                  onClick={() => {
                    setShowPass(showPass === "password" ? "text" : "password");
                  }}
                >
                  {showPass === "password" ? <IoEyeOff /> : <IoEye />}
                </button>
                <input
                  type={showPass}
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errors.password && (
                <span className="error-msg">{errors.password}</span>
              )}
              <div className="forget">
                <Link to="/forgot">Forgot Password?</Link>
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="main-btn login-btn"
            >
              {loading ? <MainSpinner /> : "Login"}
            </button>
          </form>
        </div>
      </div>
      <MyToast />
    </section>
  );
};

export default Login;
