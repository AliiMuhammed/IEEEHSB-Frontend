import React, { useEffect, useState } from "react";
import otpImg from "../../../Assets/login/otp-img.jpg";
import logo from "../../../Assets/logos/horizontal logo.png";
import "../style/otp.css";
import MainSpinner from "../../../Shared/components/MainSpinner";
import { useDispatch } from "react-redux";
import { openToast } from "../../../Redux/Slices/toastSlice";
import MyToast from "../../../Shared/components/MyToast";
import http from "../../../Helper/http";

const OTP = () => {
  const [email, setEmail] = useState("");
  const [expirationTime, setExpirationTime] = useState(120);
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [digits, setDigits] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve the email from session storage
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    // Set up the timer
    if (expirationTime > 0) {
      const intervalId = setInterval(() => {
        setExpirationTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      setTimer(intervalId);
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleInputChange = (e, digit) => {
    const { value, nextSibling } = e.target;
    if (value.length === 1 && /^[0-9]$/.test(value)) {
      setDigits((prevDigits) => ({ ...prevDigits, [digit]: value }));
      if (nextSibling) {
        nextSibling.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { digitOne, digitTwo, digitThree, digitFour } = digits;
    if (!digitOne || !digitTwo || !digitThree || !digitFour) {
      setError("Please fill all digit fields.");
      return;
    }
    const finalNumber = `${digitOne}${digitTwo}${digitThree}${digitFour}`;
    setLoading(true);
    http
      .POST("/admins/verify", { email, otp: finalNumber })
      .then((response) => {
        console.log(response);
        setLoading(false);
        dispatch(openToast({ msg: "Verified", type: "success" }));
      })
      .catch((error) => {
        dispatch(openToast({ msg: "Something went wrong", type: "error" }));
        setLoading(false);
      });
  };

  const resendOTP = () => {
    setLoading(true);
    http
      .POST("/admins/resend-otp", { email })
      .then((response) => {
        console.log(response);
        setLoading(false);
        dispatch(openToast({ msg: "OTP sent", type: "success" }));
      })
      .catch((error) => {
        dispatch(openToast({ msg: "Something went wrong", type: "error" }));
        setLoading(false);
      });
  };

  return (
    <section className="otp-section">
      <div className="container">
        <div className="right">
          <div className="bg-img">
            <img src={otpImg} alt="otp-img" loading="lazy" />
          </div>
          <div className="overlay">
            <img src={logo} alt="iEEE" loading="lazy" />
          </div>
        </div>
        <div className="left">
          <div className="otp-header">
            <h1>Verification</h1>
            <p>A verification code has been sent to your email: {email}</p>
            {expirationTime === 0 && (
              <p className="error-msg">The verification code has expired.</p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="otp-digits">
              <input
                type="text"
                name="digit-one"
                id="digit-one"
                maxLength="1"
                onChange={(e) => handleInputChange(e, "digitOne")}
              />
              <input
                type="text"
                name="digit-two"
                id="digit-two"
                maxLength="1"
                onChange={(e) => handleInputChange(e, "digitTwo")}
              />
              <input
                type="text"
                name="digit-three"
                id="digit-three"
                maxLength="1"
                onChange={(e) => handleInputChange(e, "digitThree")}
              />
              <input
                type="text"
                name="digit-four"
                id="digit-four"
                maxLength="1"
                onChange={(e) => handleInputChange(e, "digitFour")}
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <div className="resend-code">
              <button
                onClick={() => {
                  resendOTP();
                }}
                type="button"
                disabled={expirationTime === 0 ? false : true}
                className={`resend-btn ${expirationTime === 0 ? "active" : ""}`}
              >
                Resend Code
              </button>
              <span className="timer">{formatTime(expirationTime)}</span>
            </div>
            <button
              className="main-btn otp-btn"
              disabled={expirationTime === 0 || loading}
              type="submit"
            >
              {loading ? <MainSpinner /> : "Verify"}
            </button>
          </form>
        </div>
      </div>
      <MyToast />
    </section>
  );
};

export default OTP;
